---
title: 'Apollo Federation: Cross-Subgraph Field Resolution Pattern'
date: '2025-12-10'
---

## Overview

This post is a repackaged revision lesson for myself, explaining a common Apollo Federation pattern where one subgraph defines a query that returns entities, but the full entity details are resolved by a different subgraph.

## The Pattern

**Subgraph A (User Context)**: Knows _which_ entities belong to a user
**Subgraph B (Entity Details)**: Knows _all the details_ about those entities

Apollo Federation automatically connects them together.

## Step-by-Step Example

Let's walk through how this works with a concrete example.

### Step 1: Define the Query

**Subgraph A** defines a query that returns user-specific data:

```graphql
# schema/query.ts
type Query {
  """
  Gets the user's item list
  """
  userItems(pagination: PaginationInput): UserItemsResponse!
}
```

### Step 2: Define the Response Type

The response type contains a reference to entities from another subgraph:

```graphql
# schema/responses.ts
type UserItemsResponse {
  items: ItemList!
}

type ItemList {
  pageInfo: PageInfo!
  records: [Item!]!
}
```

### Step 3: Create the Entity Stub

**Subgraph A** defines a "stub" type with only the key field and the `@key` directive:

```graphql
# schema/type.ts
type Item @key(fields: "id") {
  id: ID!
}
```

**Key points:**

- The `@key(fields: "id")` directive tells Apollo Federation: "This entity can be identified by its `id`"
- Only the `id` field is defined - this is a **stub type**
- This signals to the gateway: "I don't have all the fields, look elsewhere"

### Step 4: Implement the Resolver

The resolver in **Subgraph A** only needs to return the IDs:

```typescript
// resolvers/queries/index.ts
const resolvers = {
  Query: {
    async userItems(
      _: unknown,
      args: { pagination?: PaginationInput },
      ctx: AuthenticatedContext
    ): Promise<UserItemsResponse> {
      // Fetch which items belong to this user
      const response = await ctx.dataSources.userApi.getUserItems(ctx.user.userId, args.pagination);

      const items = response.content.items ?? [];

      return {
        items: {
          pageInfo: getPageInfo(response.result.count, items.length, args.pagination),
          records: items.map((item) => {
            return {
              id: item.itemCode // Only return the ID!
            };
          })
        }
      };
    }
  }
};
```

**Notice:** The resolver only returns `{ id: item.itemCode }` - nothing else!

### Step 5: Full Entity Definition in Another Subgraph

**Subgraph B** has the complete entity definition with all fields:

```graphql
# Subgraph B: schema/type.ts
type Item @key(fields: "id") {
  id: ID!
  name: String!
  description: String!
  imageUrl: String!
  price: Float!
  category: Category!
  inStock: Boolean!
  metadata: ItemMetadata!
}
```

**Subgraph B** also implements a reference resolver:

```typescript
// Subgraph B: resolvers/types/item.ts
const Item = {
  __resolveReference(reference: { id: string }, ctx: Context) {
    // Fetch full item details using the ID
    return ctx.dataSources.itemApi.getItemById(reference.id);
  }
};
```

## How Federation Magic Works

When a client makes the query:

```graphql
query {
  userItems(pagination: { limit: 10 }) {
    items {
      records {
        id
        name
        description
        price
      }
    }
  }
}
```

Here's what happens behind the scenes:

1. **Apollo Gateway** routes the `userItems` query to **Subgraph A**
2. **Subgraph A** resolver executes and returns:
   ```json
   {
     "items": {
       "records": [{ "id": "ITEM001" }, { "id": "ITEM002" }, { "id": "ITEM003" }]
     }
   }
   ```
3. **Apollo Gateway** sees that the client requested more fields (`name`, `description`, `price`) that aren't in Subgraph A
4. **Apollo Gateway** looks up which subgraph has the full `Item` definition (Subgraph B)
5. **Apollo Gateway** calls **Subgraph B's** `__resolveReference` with the IDs
6. **Subgraph B** fetches and returns full item details
7. **Apollo Gateway** merges the results and returns to the client:
   ```json
   {
     "items": {
       "records": [
         { "id": "ITEM001", "name": "Product 1", "description": "...", "price": 29.99 },
         { "id": "ITEM002", "name": "Product 2", "description": "...", "price": 49.99 },
         { "id": "ITEM003", "name": "Product 3", "description": "...", "price": 19.99 }
       ]
     }
   }
   ```

## Type Extension Pattern

You can also **extend** types from another subgraph to add user-specific fields:

```graphql
# Subgraph A: schema/type.ts
extend type Item @key(fields: "id") {
  id: ID! @external
  isInUserWishlist: Boolean
  userRating: Int
}
```

**Directives used:**

- `extend type` - Adds fields to an existing type from another subgraph
- `@external` - Marks fields that are defined in the other subgraph
- `@key(fields: "id")` - Identifies how to reference this entity

**Resolver in Subgraph A:**

```typescript
// Subgraph A: resolvers/types/item.ts
const Item = {
  async isInUserWishlist(
    parent: { id: string },
    _args: unknown,
    ctx: AuthenticatedContext
  ): Promise<boolean> {
    return await ctx.dataSources.wishlistApi.isInWishlist(ctx.user.userId, parent.id);
  },

  async userRating(
    parent: { id: string },
    _args: unknown,
    ctx: AuthenticatedContext
  ): Promise<number | null> {
    return await ctx.dataSources.ratingsApi.getUserRating(ctx.user.userId, parent.id);
  }
};
```

Now when a client queries:

```graphql
query {
  userItems {
    items {
      records {
        id
        name # from Subgraph B
        price # from Subgraph B
        isInUserWishlist # from Subgraph A
        userRating # from Subgraph A
      }
    }
  }
}
```

Apollo Federation automatically:

1. Gets the item IDs from Subgraph A
2. Fetches base item details from Subgraph B
3. Fetches user-specific fields from Subgraph A
4. Merges everything together

## Key Takeaways

1. **Stub Types**: Define minimal types with `@key` directive to reference entities from other subgraphs
2. **Separation of Concerns**:
   - One subgraph knows _which_ entities to return
   - Another subgraph knows _what data_ those entities contain
3. **Minimal Data Transfer**: Subgraphs only return what they know (usually just IDs)
4. **Automatic Resolution**: Apollo Gateway handles the rest
5. **Type Extension**: Add subgraph-specific fields to entities owned by other subgraphs

## Federation Directives Reference

| Directive            | Purpose                                                    |
| -------------------- | ---------------------------------------------------------- |
| `@key(fields: "id")` | Marks the unique identifier field(s) for entity resolution |
| `@external`          | Indicates a field is defined in another subgraph           |
| `extend type`        | Adds fields to a type from another subgraph                |

## Benefits of This Pattern

- **Domain Separation**: Each subgraph owns its domain data
- **Independent Development**: Teams can work on subgraphs independently
- **Scalability**: Subgraphs can be deployed and scaled separately
- **Flexibility**: Easy to add new fields without modifying other subgraphs
- **Type Safety**: Full GraphQL type safety across subgraphs

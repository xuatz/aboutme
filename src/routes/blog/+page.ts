import type { PageLoad } from './$types';

interface PostMetadata {
  title: string;
  date: string;
}

interface PostModule {
  metadata: PostMetadata;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
}

export const load = (async () => {
  const postFiles = import.meta.glob<PostModule>('./posts/*.md', { eager: true });

  const posts: Post[] = Object.entries(postFiles).map(([path, module]) => {
    // Extract slug from path: ./posts/my-post.md -> my-post
    const slug = path.replace('./posts/', '').replace('.md', '');

    return {
      slug,
      title: module.metadata.title,
      date: module.metadata.date
    };
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts
  };
}) satisfies PageLoad;

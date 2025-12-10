import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

interface PostModule {
  default: ConstructorOfATypedSvelteComponent;
  metadata: {
    title: string;
    date: string;
  };
}

export const load = (async ({ params }) => {
  const posts = import.meta.glob<PostModule>('../posts/*.md', { eager: true });

  const postPath = `../posts/${params.slug}.md`;
  const post = posts[postPath];

  if (!post) {
    throw error(404, `Post not found: ${params.slug}`);
  }

  return {
    content: post.default,
    metadata: post.metadata
  };
}) satisfies PageLoad;

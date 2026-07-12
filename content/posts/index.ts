import type { Post } from "../../lib/content";

// Posts registered here in publish-date order.
// Add new imports below as posts are created.

export const POSTS: Post[] = ([] as Post[]).sort(
  (a, b) => (a.publishDate < b.publishDate ? -1 : 1)
);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPublishedPosts(): Post[] {
  const today = new Date().toISOString().slice(0, 10);
  return POSTS.filter((p) => p.publishDate <= today);
}

export function getPostsByState(stateSlug: string): Post[] {
  return getPublishedPosts().filter((p) => p.states.includes(stateSlug));
}

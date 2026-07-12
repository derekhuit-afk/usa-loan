import type { Post } from "../../lib/content";
import { post as p01 } from "./p01-jacksonville-dscr-investor-guide";
import { post as p02 } from "./p02-wshfc-dpa-stacking-guide";
import { post as p03 } from "./p03-jblm-va-loan-guide-washington";
import { post as p04 } from "./p04-jacksonville-va-loan-veterans-florida";
import { post as p05 } from "./p05-washington-va-cash-out-refinance";

export const POSTS: Post[] = [p01, p02, p03, p04, p05].sort(
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

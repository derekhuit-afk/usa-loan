import type { Post } from "../../lib/content";
import { post as p01 } from "./p01-jacksonville-dscr-investor-guide";
import { post as p02 } from "./p02-wshfc-dpa-stacking-guide";
import { post as p03 } from "./p03-jblm-va-loan-guide-washington";
import { post as p04 } from "./p04-jacksonville-va-loan-veterans-florida";
import { post as p05 } from "./p05-washington-va-cash-out-refinance";
import { post as p06 } from "./p06-texas-dfw-dscr";
import { post as p07 } from "./p07-texas-va-loan";
import { post as p08 } from "./p08-georgia-va-loan";
import { post as p09 } from "./p09-georgia-first-time-buyer";
import { post as p10 } from "./p10-michigan-mshda-dpa";
import { post as p11 } from "./p11-michigan-dscr";
import { post as p12 } from "./p12-illinois-ihda-first-time-buyer";
import { post as p13 } from "./p13-great-lakes-naval-station-va-loan";
import { post as p14 } from "./p14-indianapolis-dscr-investor-guide";
import { post as p15 } from "./p15-indiana-va-loan-fort-benjamin-harrison";
import { post as p16 } from "./p16-malmstrom-afb-va-loan-montana";
import { post as p17 } from "./p17-montana-usda-rural-home-loan";
import { post as p18 } from "./p18-tinker-afb-fort-sill-va-loan-oklahoma";
import { post as p19 } from "./p19-oklahoma-city-dscr-investor-guide";
import { post as p20 } from "./p20-oklahoma-section-184-guide";
import { post as p21 } from "./p21-section-184-vs-fha-vs-va";
import { post as p22 } from "./p22-section-184-trust-land-fee-simple";
import { post as p23 } from "./p23-florida-section-184-guide";
import { post as p24 } from "./p24-texas-section-184-guide";
import { post as p25 } from "./p25-michigan-section-184-guide";
import { post as p26 } from "./p26-washington-section-184-guide";
import { post as p27 } from "./p27-indiana-section-184-guide";
import { post as p28 } from "./p28-montana-section-184-guide";
import { post as p29 } from "./p29-illinois-section-184-guide";

export const POSTS: Post[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11,
  p12, p13, p14, p15, p16, p17, p18, p19,
  p20, p21, p22,
  p23, p24, p25, p26, p27, p28, p29,
].sort((a, b) => (a.publishDate < b.publishDate ? -1 : 1));

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

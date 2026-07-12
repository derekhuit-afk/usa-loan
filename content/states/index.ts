import type { StatePage } from "../../lib/content";
import { state as florida } from "./florida";
import { state as washington } from "./washington";
import { state as alaska } from "./alaska";

export const STATES: StatePage[] = [florida, washington, alaska];

export function getState(slug: string): StatePage | undefined {
  return STATES.find((s) => s.slug === slug);
}

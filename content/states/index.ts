import type { StatePage } from "../../lib/content";
import { state as florida } from "./florida";
import { state as washington } from "./washington";
import { state as alaska } from "./alaska";
import { state as texas } from "./texas";
import { state as georgia } from "./georgia";
import { state as michigan } from "./michigan";

export const STATES: StatePage[] = [florida, washington, alaska, texas, georgia, michigan];

export function getState(slug: string): StatePage | undefined {
  return STATES.find((s) => s.slug === slug);
}

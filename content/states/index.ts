import type { StatePage } from "../../lib/content";
import { state as florida } from "./florida";
import { state as washington } from "./washington";
import { state as alaska } from "./alaska";
import { state as texas } from "./texas";
import { state as georgia } from "./georgia";
import { state as michigan } from "./michigan";
import { state as illinois } from "./illinois";
import { state as indiana } from "./indiana";
import { state as montana } from "./montana";
import { state as oklahoma } from "./oklahoma";

export const STATES: StatePage[] = [
  florida, washington, alaska, texas, georgia, michigan,
  illinois, indiana, montana, oklahoma,
];

export function getState(slug: string): StatePage | undefined {
  return STATES.find((s) => s.slug === slug);
}

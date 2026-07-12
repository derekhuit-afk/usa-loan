import type { Program } from "../../lib/content";
import { program as dscr } from "./dscr";
import { program as va } from "./va";
import { program as wshfc } from "./wshfc";
import { program as firstTimeBuyer } from "./first-time-buyer";

export const PROGRAMS: Program[] = [dscr, va, wshfc, firstTimeBuyer];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

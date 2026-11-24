// Two Lines to Your Past Self — a warning sent back to one specific moment.
// The program writes exactly two lines to /output/entry.txt: line one warns
// the past self about a single moment; line two says why it mattered and
// what changed because of it. Deterministic: no network, no randomness,
// no clock — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "On your last night in Bandung, when she puts her cup down and asks, \"Are you sure?\" — don't say yes.";
const LINE_TWO =
  "That yes costs you three years apologising for a life you never wanted.";

const text = `${LINE_ONE}\n${LINE_TWO}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

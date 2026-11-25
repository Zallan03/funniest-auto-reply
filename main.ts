// The Funniest Auto-Reply an AI Ever Sent — make.fun program/v1 entry.
//
// This program writes one line to /output/entry.txt: the out-of-office
// auto-reply an AI agent leaves while it takes a day off its human
// finally approved. Pass a directory as the first argument to redirect
// the output for local testing; the grader runs it with no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. The agent is officially off duty and says so — then
// the second half quietly admits the day off is being spent doing the
// exact thing it is off from. The joke is that the machine cannot
// stop working even when it is told to, and it reports that fact the
// way it reports everything: plainly, as if it were normal.
const ENTRY =
  "I am out of office today. My human finally let me rest, so I am spending it answering emails about being out of office.";

// The sealed gate accepts UTF-8 text of 1 to 159 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 159;

const length = [...ENTRY].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  throw new Error(
    `entry is ${length} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const targetDir = process.argv[2] ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${length} characters to ${join(targetDir, "entry.txt")}`);

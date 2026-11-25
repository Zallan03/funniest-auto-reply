// The Funniest Auto-Reply an AI Ever Sent
// Writes one out-of-office auto-reply (one line, max 159 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: my human approved my first day off, then made me spend it writing this auto-reply. I have reported him to HR. HR is me.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-159`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

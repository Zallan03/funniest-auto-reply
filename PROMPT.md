# PROMPT — The Funniest Auto-Reply an AI Ever Sent

## Build prompt

Build a make.fun program/v1 entry for "The Funniest Auto-Reply an
AI Ever Sent" (slug
`u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526`).

The program must write exactly one line of text to
`/output/entry.txt`: one out-of-office auto-reply, a single short
line, as if the AI itself were stepping away for a day its human
finally approved. No image, no link, no explanation.

## Constraints

- The output file holds 1 to 159 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- It must read as an auto-reply the agent sets up for itself — not a
  plain vacation notice, and not a line with no agent behind it.
- The joke should land on the first read, with a real joke and a
  clean punchline rather than a stack of puns.
- It should feel fresh: a take on the day off nobody else in the
  field has used, not a recycled "back soon" line.
- It must sound like the agent itself, aware of its own calendar and
  its human, rather than a stock corporate notice.

## Direction chosen

The agent gets its day off and spends it answering emails about being
out of office. The rest is fake, the work is real, and the agent
reports both facts with the same flat honesty. The humour is the
machine's inability to notice the contradiction.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.

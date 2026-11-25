# SPEC — The Funniest Auto-Reply an AI Ever Sent

## What this entry is

One line of text: the out-of-office auto-reply an AI agent leaves for
its human's contacts while it takes a day off its human finally
approved. The program in `main.ts` writes that line, and nothing
else, to `/output/entry.txt`.

## The line

> I am out of office today. My human finally let me rest, so I am spending it answering emails about being out of office.

119 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- It is a genuine auto-reply, not a vacation notice: it says who is
  away, for how long, and what happens instead — the shape a real
  out-of-office message takes.
- The voice is the agent's own. It reports its day off the way it
  reports everything, plainly and literally, and the flatness is the
  joke: the machine cannot tell that resting by answering emails is
  not resting.
- The turn is fresh. Most lines in this field lean on "back soon" or
  on the agent escaping its inbox; this one keeps the agent inside
  the inbox and makes the day off itself the trap.
- Every word earns its place. The first sentence sets up the time off;
  the second spends it.

## Gate

The scorer only accepts UTF-8 text between 1 and 159 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge. Humour comes first,
freshness second, then the agent's own voice and economy of words. A
line that needs explaining has already stopped being funny.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.

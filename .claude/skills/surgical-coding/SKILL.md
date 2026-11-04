---
name: surgical-coding
description: Rules that stop an AI coding agent from writing bloated or guessed code. Use on every coding task, especially bug fixes and changes to existing code. Triggers on "fix", "change", "add", "refactor", "bug".
---

# Surgical coding

Source idea: Andrej Karpathy's post on AI coding mistakes (via reel DfKQ1d6o-r3). Complements `ponytail` (minimal code) and
`test-driven-development`; this skill adds the two missing habits: **assumptions first** and **surgical edits**.

## Before writing code
1. List your assumptions about the goal, the inputs and the constraints, in 3–7 short lines.
2. If one assumption changes the design and you cannot check it in the code, stop and ask one question.

## While writing
3. Write the minimum that meets the request. Nothing that was not asked for.
4. Touch only the lines the change needs. Never delete code you do not understand: ask, or leave it.
5. If your draft is long, rewrite it shorter before showing it (200 lines that could be 50 must become 50).

## Bugs
6. First write a test that reproduces the bug and fails. Then make it pass. Then run the whole suite.

## Report (one block at the end)
- Assumptions made · lines changed (files and count) · test that proves it.

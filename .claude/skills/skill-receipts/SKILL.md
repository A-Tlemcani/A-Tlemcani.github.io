---
name: skill-receipts
description: At the end of any answer where a skill, plugin or agent changed the work, show a short receipt saying which one was used, why, what it changed, and what would have happened without it. Always on for Abderrahman's sessions.
---

# Skill receipts

Abderrahman wants to see, in every answer, **why** a skill was used and **what it fixed** that would not have been fixed without it.

## Format (end of the answer, only when a skill actually changed something)

| Skill | Why it was used | What it changed | Without it |
| --- | --- | --- | --- |
| surgical-coding | Bug fix in existing code | 1 test added first; 6 lines changed in 1 file | Likely rewrite of the whole function (~60 lines) |

## Rules
- One row per skill that changed the result. Do not list skills that were loaded but changed nothing.
- "What it changed" must be concrete: a number, a file, a check that passed or failed.
- "Without it" is an honest estimate, marked "est." when not measured. Measured numbers come from `benchmarks/`.
- Keep it to the table. No paragraph about the skills.

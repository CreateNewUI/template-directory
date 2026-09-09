---
name: ship-ui
description: >
  Load this skill before shipping a UI change, to statically review the diff for design-craft regressions (accessibility, motion, responsive, and visual or UX drift), correctness and security issues, and leftover debug code, then write a commit message and pull request description that match the repository's conventions. Triggers on "review my UI change", "ship this", "is this ready to ship". This is the ship gate at the end of the design → build → ship pipeline.
---

# Ship UI

The final review before a UI change ships. It assumes the code compiles and passes lint, so it skips the mechanical style a linter enforces, but it still reviews logic, correctness, and security. The skill checks the diff for the design-craft regressions linters miss, then turns that diff into a clean commit message and PR description.

## Core mandate

Review the changed code and the minimum surrounding context needed to validate it. Do not audit unrelated parts of the codebase. Catch the regressions a linter cannot detect, such as accessibility, motion, responsive, and visual or UX drift, and flag only what you are sure is a real problem. Then write a commit message and PR description that read as a developer wrote them, with no tooling attribution.

## Severity scale

| Level | Meaning |
| --- | --- |
| **Blocking** | A real bug, a leaked secret, or a shipped accessibility failure. Do not merge. |
| **Note** | Worth checking, a likely regression or a quality gap, not always wrong. |

A clean diff should pass with an empty list. Do not invent minor findings to lengthen the list, and skip formatting and naming preferences.

## The checklist

### 1. Gather the diff

Gather every pending change, so a clean result is trustworthy. Pick the scope that matches the request.

- Uncommitted work about to be committed. Run `git diff HEAD` to capture staged and unstaged edits to tracked files.
- A whole branch headed for a PR. Run `git diff <base>...HEAD` for committed work, then add `git diff HEAD` for any uncommitted work on top.

`git diff` omits untracked files, so detect them with `git status --short` and inspect each new UI file directly. Set `<base>` to the branch the PR merges into, usually the repository default branch from `git symbolic-ref --short refs/remotes/origin/HEAD`. Fall back to `origin/main` or `origin/master`, and use local `main` or `master` only when no remote exists, because a local default branch can sit behind its remote and produce an unrelated diff. Do not use the branch's own upstream, which often tracks its remote copy and would hide most of the change set. If you cannot determine the base branch confidently, ask the user before continuing, because reviewing against the wrong base produces a misleading result.

### 2. Review the UI diff

Check the diff against each concern below, and flag only what you are sure is a real problem. This is a static review of the code, so treat any check that needs a rendered page, a keyboard pass, or a reduced-motion run as unverified, and record it under Testing as pending.

- [ ] **Accessibility** — new interactive elements have keyboard handlers or native semantics, focus styling is present and not removed, focus order is logical, no keyboard trap, and roles and names are correct.
- [ ] **Motion** — every new animation provides an appropriate `prefers-reduced-motion` alternative, uses performant animation properties, and animates for a clear reason at a sensible frequency.
- [ ] **Responsive** — no fixed width forces overflow on a small viewport, breakpoint and container-query logic is present, and touch-target sizing and safe-area handling are correct.
- [ ] **Visual and UX drift** — design tokens replace hardcoded color, spacing, and type. The change fits the surrounding system. No magic number stands where a token exists.
- [ ] **User-facing copy** — new labels, errors, empty states, and tooltips read well.
- [ ] **Correctness and security** — off-by-one errors, null and undefined handling, race conditions, secrets in the diff, injection risks.
- [ ] **Cleanliness** — no dead code or leftover debug, such as `console.log`, `debugger`, or commented-out blocks.

### 3. Write the commit message

Match the repo's existing convention. Do not assume Conventional Commits. Read `git log <base> -20 --pretty=format:"%s%n%b---"` first, then classify it.

- **Conventional Commits** (`type(scope): summary`) — follow it, and use only the types the repo already uses. Do not invent ones that never appear.
- **Ticket-prefixed** (`PROJ-123: summary` or `[PROJ-123] summary`) — use that prefix, and look for the ticket ID in the branch name if it is not obvious elsewhere.
- **Plain imperative** (`Add x`, `Fix y`) — write in that style, and do not impose a type or scope system the repo does not use.
- If the log is empty or too mixed to classify, default to Conventional Commits.

Apply these regardless of style.

- [ ] Subject line is 72 characters or fewer, in imperative mood ("add", not "added").
- [ ] Body appears only when the change needs more than the subject.
- [ ] Scope or prefix appears only when the changed paths make it obvious or the repo's pattern calls for it, and drops when the diff spans unrelated areas.
- [ ] **No tooling attribution.** Never add "written with an AI", a `Generated-by:` trailer, or a co-authored-by line for a tool. The commit message is a durable record that people read long after the tool is forgotten.

### 4. Draft the PR description

Summarize the whole branch, not just the latest commit.

When the repository contains a pull request template in its supported locations, fill in that template instead of the structure below. If multiple templates are available and none is specified, use the repository's default or most clearly applicable one. Otherwise use this default structure.

- [ ] `## Summary` — two to four sentences on what changed and why.
- [ ] `## Changes` — a bullet list of concrete changes, described by net effect.
- [ ] `## UI notes` — visual or interaction changes a reviewer should look for, such as new states, motion, or responsive behavior. Point out where a screenshot or recording would help.
- [ ] `## Testing` — how the change was or should be verified across viewports, input methods, and reduced-motion settings. Report only checks supported by evidence, and mark anything not performed as pending rather than implying it passed.
- [ ] `## Notes` — only when there is a breaking change, a follow-up, or a deliberate omission.

Apply these regardless of structure.

- [ ] **Never list individual commits.** The reviewer already sees them on the commit tab. Describe the net effect of the branch, not its commit-by-commit history.
- [ ] **No unsupported test claims** such as "ran the test suite". That belongs in CI. Only report manual verification a reviewer cannot find elsewhere, under Testing.
- [ ] **No tooling attribution**, for the same reason as the commit message.

When you update an earlier PR description, rewrite it to describe the full branch as one coherent whole. Do not append a line per commit. Keep it grounded in the actual diff, and do not guess at intent you cannot see in the code.

## Writing style

Write every commit body and PR description in plain prose, using only commas and periods to punctuate the sentences you generate. Do not use em dashes, colons, or semicolons. Split a sentence that needs a colon or semicolon into two, and rewrite a dashed aside as a comma or a new sentence. This rule covers the commit body and PR prose you write, not the commit subject line or the structural syntax a tool or convention requires, so the subject line, a `type(scope):` commit prefix, a `PROJ-123:` ticket prefix, a Markdown heading, and anything inside a code span all stay as they are.

## Output

Return three sections in this fixed order, with these exact headings. `## Review`, then `## Commit message`, then `## PR description`. Under `## Review`, write one bullet per finding in the form `Severity, path:line, finding`, or write `No issues found.` when the diff is clean. Put the commit message in its own `text` code block, and put the PR description in its own code block.

---

Authored by @planetabhi
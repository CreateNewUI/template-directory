---
name: keyboard-accessibility
description: >
  Load this skill for any project with interactive UI, such as buttons, links, forms, modals, dropdowns, menus, tabs, sliders, toolbars, carousels, or custom widgets, in React or vanilla JavaScript. Never ship an interactive element that cannot be fully operated by keyboard alone. Always ensure a visible focus indicator, logical tab order, correct widget key behavior, and no keyboard traps. Targets WCAG 2.2 Level AA.
---

# Keyboard accessibility

Apply these rules to every interactive element and feature. Examples are React-first. Vanilla JavaScript is shown only where it differs meaningfully. The detailed rules and code examples are bundled under `./reference/`. Read the relevant file before applying or citing a rule.

## Core mandate

All interactive functionality must be fully usable with a keyboard alone, with no mouse or touch required, except where the function genuinely depends on path-based movement (for example, freehand drawing). Keyboard access is not the same as "can Tab to it": native and composite widgets use different key conventions, and users must be able to reach, operate, and leave every component.

## Confirmation

When you are only reviewing, report findings without pausing. Before applying edits to existing files, confirm the intended change set first, and ask for any context you need to judge correctly instead of guessing.

## Severity scale

| Level | Meaning |
| --- | --- |
| **Critical** | Blocks task completion entirely for keyboard and assistive technology (AT) users |
| **Serious** | Significantly impairs keyboard access, with no reasonable workaround |
| **Moderate** | Creates friction, but a workaround exists |
| **Minor** | Best-practice gap with marginal impact |

Judge severity by the actual effect on the task, not the rule alone: can the user reach, operate, and leave the component; is an essential task blocked; is focus lost or placed misleadingly.

## Reference map

The rules and code examples are bundled under `./reference/`. Read the relevant file before applying or citing a rule. Severity reflects the impact when the rule is violated.

- Critical rules:
   - [reference/native-elements.md](./reference/native-elements.md) — Use native, keyboard-reachable elements
   - [reference/keyboard-traps.md](./reference/keyboard-traps.md) — No keyboard trap
   - [reference/widget-keys.md](./reference/widget-keys.md) — Expected key behaviors
   - [reference/dialogs.md](./reference/dialogs.md) — Dialog focus management
- Serious rules:
   - [reference/focus-visibility.md](./reference/focus-visibility.md) — Focus visibility
   - [reference/focus-not-obscured.md](./reference/focus-not-obscured.md) — Focus not obscured
   - [reference/focus-order.md](./reference/focus-order.md) — Focus order
   - [reference/composite-widgets.md](./reference/composite-widgets.md) — Composite widgets (roving tabindex)
   - [reference/visibility-mechanisms.md](./reference/visibility-mechanisms.md) — `aria-hidden` versus `hidden` versus `inert`
- Moderate rules:
   - [reference/skip-links.md](./reference/skip-links.md) — Skip link and landmarks
   - [reference/navigation-and-notifications.md](./reference/navigation-and-notifications.md) — Navigation and notification focus
   - [reference/input-alternatives.md](./reference/input-alternatives.md) — Character-key shortcuts, touch, and pointer
- Testing:
   - [reference/checklist.md](./reference/checklist.md) — Testing checklist and automated-tool limits

## Key WCAG 2.2 criteria

- 2.1.1 Keyboard (A), Critical if violated
- 2.1.2 No Keyboard Trap (A), Critical if violated
- 2.1.4 Character Key Shortcuts (A)
- 2.4.1 Bypass Blocks (A)
- 2.4.3 Focus Order (A)
- 2.4.7 Focus Visible (AA)
- 2.4.11 Focus Not Obscured Minimum (AA)
- 2.4.13 Focus Appearance (AAA)
- 2.5.1 Pointer Gestures (A)
- 2.5.3 Label in Name (A)
- 2.5.8 Target Size Minimum (AA)

## References

- [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [APG: Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [APG: Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [MDN: The `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [MDN: The `inert` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert)
- [MDN: `:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [`focus-trap-react`](https://github.com/focus-trap/focus-trap-react)

> **Standards horizon:** These rules target WCAG 2.2 AA. WCAG 3.0 is in
> development. Keyboard and focus requirements are expected to remain broadly
> compatible. Monitor <https://www.w3.org/TR/wcag-3.0/>.

## Anti-patterns

- Positive `tabindex` values to force order; fix the DOM order instead.
- Clickable `div` or `span` where a `button` or `a` belongs.
- Blanket `preventDefault()` that swallows expected keys.
- Removing the focus outline without a visible replacement.
- `aria-hidden="true"` on a focusable element, which strands focus.

---

Authored by @planetabhi

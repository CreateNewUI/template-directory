# Testing checklist

- [ ] Every interactive element is reachable with `Tab`.
- [ ] Focus indicator is always visible and ≥3:1 contrast (light and dark).
- [ ] Tab order matches the visual/reading order.
- [ ] Elements activate with the correct keys per the widget table.
- [ ] No keyboard trap (except an intentional modal with a working `Escape`).
- [ ] `Escape` closes modals, popups, and menus.
- [ ] Skip link is first in the DOM and visible on focus.
- [ ] No focusable element sits inside an `aria-hidden="true"` subtree.
- [ ] Sticky elements never fully obscure the focused element.
- [ ] Composite widgets use roving tabindex or `aria-activedescendant`.
- [ ] Route changes move focus and announce the new view.
- [ ] Drag interactions have a keyboard alternative; targets ≥24×24 px.
- [ ] Tested with a screen reader running, at 200%/400% zoom, and 320px width.
- [ ] Tested across pairings that diverge for the same ARIA: NVDA with Firefox, JAWS with Chrome, and VoiceOver with Safari.

## Automated-tool limitations

Automated tools catch positive `tabindex`, handlers on non-interactive elements, focusable descendants of `aria-hidden`/inert content, and missing accessible names, but they cannot confirm the focus order is meaningful or that custom interactions follow their expected key model. Keep manual keyboard walkthroughs for every new or changed pattern.

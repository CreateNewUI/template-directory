# No keyboard trap (WCAG 2.1.2)

If focus can enter a component, the user must be able to move it away with `Tab`, `Shift+Tab`, arrow keys, or `Escape` (per the component). A trap with no exit is Critical. Restricting focus temporarily is not a trap when it is a modal dialog with a standard, documented exit. Refer to [Dialog focus management](./dialogs.md) for the exit conventions.

Test embedded editors, third-party widgets, iframes, media players, and canvas apps carefully. They commonly consume `Tab` and need a documented exit.

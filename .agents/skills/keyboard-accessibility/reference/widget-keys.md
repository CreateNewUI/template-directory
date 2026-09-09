# Expected key behaviors

Deviating from expected widget keys breaks the mental model assistive technology (AT) users depend on. Do not override native control behavior without a documented need. For custom widgets, follow the current [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/), which is versioned independently of WCAG. APG patterns are design guidance, not WCAG requirements by themselves.

| Control | Required keys |
| --- | --- |
| Button | `Enter`, `Space` |
| Link | `Enter` |
| Checkbox | `Space` to toggle |
| Radio group | Arrow keys to move; `Space` to select |
| `<select>` | Platform conventions |
| Menu / menubar | Arrow keys; `Enter` to activate; `Escape` to close |
| Tabs | Arrow keys between tabs; `Tab` moves into the panel; `Home`/`End` first/last |
| Dialog | `Escape` closes; focus stays inside while open |
| Combobox | Depends on editable/select-only; `Escape` closes the popup |
| Tree | Up/Down navigate; Right expands/enters; Left collapses/parent |
| Slider | Arrows change value; `Home`/`End` min/max; `PageUp`/`PageDown` larger steps |
| Accordion | `Enter`/`Space` toggles; Up/Down between headers |
| `<details>` summary | `Enter`/`Space` toggles |

Do not implement a widget from this summary alone. Use the complete current APG pattern and test with real browsers and assistive technologies. Combobox has more state-dependent variants than any other pattern here, since editable, select-only, and autocomplete behaviors each differ. Do not extrapolate a combobox from its table row.

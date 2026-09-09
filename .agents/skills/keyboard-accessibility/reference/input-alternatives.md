# Input alternatives

## Character-key shortcuts (WCAG 2.1.4)

If a shortcut uses only a printable character, provide at least one of: a way to turn it off, a way to remap it to include a non-printing modifier, or activation only while the relevant component has focus. Do not intercept browser, operating system, or assistive technology (AT) shortcuts.

## Touch and pointer equivalents (WCAG 2.5.x)

| Requirement | Description | Severity |
| --- | --- | --- |
| 2.5.1 Pointer Gestures | Multipoint/path gestures need a single-pointer or keyboard alternative | Serious |
| 2.5.3 Label in Name | Visible label text must be in the accessible name | Serious |
| 2.5.8 Target Size Minimum | Targets at least 24×24 CSS px (44×44 recommended) | Moderate |
| `user-scalable=no` | Never block pinch-zoom | Serious |
| Drag-to-reorder | Must have a keyboard alternative (for example, move up/down buttons) | Serious |

```html
<!-- Good -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

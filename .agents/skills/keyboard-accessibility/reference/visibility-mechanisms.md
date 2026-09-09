# `aria-hidden` versus `hidden` versus `inert`

| Mechanism | Visual | Sequential focus | Accessibility tree |
| --- | --- | --- | --- |
| `hidden` / `display: none` | Hidden | Removed | Removed |
| `visibility: hidden` | Hidden | Removed | Removed |
| `inert` | Visible unless styled | Descendants removed | Descendants removed |
| `aria-hidden="true"` | Unchanged | Unchanged | Content hidden from assistive technology |

Never place a focusable element inside an `aria-hidden="true"` subtree. `aria-hidden` does not remove keyboard focus, so it can create a control that receives focus but is invisible to screen readers. Use `hidden` for closed disclosures, and use `inert` when visible content must become non-interactive.

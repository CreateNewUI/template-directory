# Focus order (WCAG 2.4.3)

Tab order must follow the logical reading and interaction sequence. Illogical order is Serious. Screen reader users build a spatial model from it.

- Use semantic DOM order as the primary mechanism, and keep visual order aligned with DOM order. Do not use CSS `order`, grid placement, or absolute positioning to create a misleading visual sequence.
- Never use positive `tabindex`. It creates a separate, fragile sequence.
- Use `tabindex="0"` only when an element legitimately belongs in sequential focus and no native element provides the semantics.
- Use `tabindex="-1"` only for programmatic focus targets and inactive items in roving-tabindex patterns.
- Do not add non-interactive containers/headings to the Tab order.
- Avoid `autofocus` unless initial focus there is expected and tested.
- When content is inserted, removed, reordered, or filtered, preserve focus or move it somewhere logical. Never leave it on a removed element.

In React, do not use the array index as a `key` for reorderable lists. A stable key keeps DOM identity so focus is not silently lost on re-render.

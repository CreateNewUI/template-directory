# Dialog focus management

Incorrect dialog focus is Critical. Users lose their place or cannot reach dialog controls.

## Preferred: native `<dialog>` with `showModal()`

A modal dialog opened with `showModal()` automatically makes the rest of the document `inert`, traps focus, closes on `Escape`, and exposes `aria-modal="true"`, all browser-provided (Baseline: widely available). This is preferred over hand-rolled focus-trap classes.

```jsx
import { useRef, useEffect } from "react";

function DeleteDialog({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) dialog.showModal();
    else if (dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} aria-labelledby="del-title" onClose={onClose}>
      <h2 id="del-title">Delete project?</h2>
      <p>This action cannot be undone.</p>
      <form method="dialog">
        <button autoFocus>Cancel</button>
        <button value="confirm">Delete project</button>
      </form>
    </dialog>
  );
}
```

Choose initial focus by content. A short confirmation may focus Cancel. A long informational dialog may focus a heading with `tabindex="-1"` so it reads from the top. `showModal()` focuses the first focusable element (or the element with `autofocus`) by default. On close, return focus to the trigger. If the trigger was removed, return focus to the nearest logical workflow location.

Do not assume `aria-modal="true"` alone creates modality. ARIA does not make content inert, contain focus, add keyboard handling, or restore focus.

Even with native behavior, test: initial focus, `Tab`/`Shift+Tab` containment, `Escape` and a visible close control, focus restoration, stacked overlays, screen reader announcement, and your browser support matrix.

## Fallback: `inert` (when native `<dialog>` is unavailable)

The `inert` attribute removes a subtree from the tab order and the accessibility tree, and blocks clicks (Baseline: widely available). It is simpler and more reliable than manual focusable-element cycling.

```js
function openDialog(dialog, siblingsSelector) {
  document.querySelectorAll(siblingsSelector).forEach(el => el.inert = true);
  dialog.hidden = false;
  dialog.querySelector("button, [href], input, select, textarea, [tabindex]")?.focus();
}
function closeDialog(dialog, siblingsSelector, trigger) {
  document.querySelectorAll(siblingsSelector).forEach(el => el.inert = false);
  dialog.hidden = true;
  trigger.focus();
}
```

Where `inert` is unavailable, use the production-tested [`focus-trap`](https://github.com/focus-trap/focus-trap) / [`focus-trap-react`](https://github.com/focus-trap/focus-trap-react) library or the [`wicg-inert` polyfill](https://github.com/WICG/inert) rather than hand-rolling focus cycling.

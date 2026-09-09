# Composite widgets (roving tabindex)

Composite widgets (toolbars, radio groups, tabs, menus, trees) expose a single Tab stop, and arrow keys move among internal items. There are two recognized strategies: roving `tabindex` (one item `0`, others `-1`, updated on move) or `aria-activedescendant` (DOM focus stays on the container). Choose the one the widget's WAI-ARIA Authoring Practices Guide (APG) pattern specifies. Do not add roving tabindex to a native radio group. The browser already provides it.

```jsx
import { useRef } from "react";

function Toolbar({ items }) {
  const ref = useRef(null);

  function onKeyDown(e) {
    const buttons = Array.from(ref.current.querySelectorAll("button:not([disabled])"));
    const current = buttons.indexOf(document.activeElement);
    let next = current;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (current + 1) % buttons.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (current - 1 + buttons.length) % buttons.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = buttons.length - 1;
    else return;
    e.preventDefault();
    buttons.forEach((b, i) => (b.tabIndex = i === next ? 0 : -1));
    buttons[next].focus();
  }

  return (
    <div role="toolbar" aria-label="Text formatting" ref={ref} onKeyDown={onKeyDown}>
      {items.map((label, i) => (
        <button key={label} type="button" tabIndex={i === 0 ? 0 : -1} aria-pressed="false">
          {label}
        </button>
      ))}
    </div>
  );
}
```

A production widget must also handle orientation, text direction, disabled items, and dynamic additions. Refer to the [APG keyboard interface practice](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) for the arrow-key directions per widget type.

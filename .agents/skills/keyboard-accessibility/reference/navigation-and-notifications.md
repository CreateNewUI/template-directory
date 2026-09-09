# Navigation and notification focus

## Client-side navigation focus (React Router)

On a client-side route change, move focus so keyboard and screen reader users are not stranded: update the title, focus the new view's main heading or container, and announce the change once.

```jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

function RouteFocus({ title, children }) {
  const location = useLocation();
  const headingRef = useRef(null);

  useEffect(() => {
    document.title = title;
    headingRef.current?.focus();
  }, [location, title]);

  return (
    <main>
      <h1 ref={headingRef} tabIndex={-1}>{title}</h1>
      {children}
    </main>
  );
}
```

Pair this with a visually hidden `aria-live="polite"` region to announce the new view. Do not move focus merely because content updated. Move focus only when the user needs a new context or would otherwise lose their place. Never use positive `tabindex` or synthetic `Tab` events to manage focus.

## Transient notification focus

Toasts, form-submission confirmations, and other transient messages are a common place keyboard flows break, because nobody decides whether focus should move. Decide deliberately for each message:

- For a passive status update that needs no action, announce it through a persistent `aria-live="polite"` region and leave focus where the user is working.
- For an error or a confirmation the user must act on, move focus to the message or its first control so keyboard and screen reader users reach it.
- For a toast with controls (for example, an Undo button), keep it reachable long enough to operate, do not auto-dismiss it before the user can Tab to it, and return focus to a logical location when it closes.

Use `role="alert"` (assertive) only for messages that justify interrupting the user. Use `aria-live="polite"` for everything else.

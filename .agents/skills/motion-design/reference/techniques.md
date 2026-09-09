# Transition, animation, Web Animations API, and View Transitions

Pick the cheapest technique that produces the motion. Do not install a library for a fade.

## Choosing the technique

| Technique | Use it for | Notes |
| --- | --- | --- |
| CSS transition | A state change between two values, such as open and close | Interruptible, the default choice |
| CSS `@starting-style` | An entry animation on first render, with no JavaScript state | Baseline newly available; pair with a transition |
| CSS animation and `@keyframes` | Loops and multi-step sequences, such as a spinner or shimmer | Not interruptible mid-run |
| Web Animations API | Dynamic values from JavaScript, or motion you must pause, reverse, or cancel | Interruptible and scriptable |
| View Transitions API | Animating a DOM or route change, such as a list-to-detail navigation | Baseline newly available; provide a fallback |

## Animate only compositor-friendly properties

Animate `transform` and `opacity`. They run on the compositor and do not trigger layout. Avoid animating `width`, `height`, `top`, `left`, `margin`, and other layout properties. See [performance.md](./performance.md).

```css
/* Good: transform and opacity */
.panel {
  transition: transform var(--motion-duration-4) var(--motion-ease-out),
              opacity var(--motion-duration-4) var(--motion-ease-out);
}

/* Avoid: animating layout properties */
.panel-bad { transition: height 300ms, margin-top 300ms; }
```

Never use `transition: all`. Name the properties so unrelated changes do not animate by accident.

## View Transitions with a fallback

`startViewTransition` animates a DOM change, and returns to an instant update where it is unsupported:

```js
function update(dom) {
  if (document.startViewTransition) {
    document.startViewTransition(dom);
  } else {
    dom();
  }
}
```

View transitions honor `prefers-reduced-motion` through the `::view-transition` pseudo-elements, so pair them with the reduced-motion rules in [accessibility.md](./accessibility.md).

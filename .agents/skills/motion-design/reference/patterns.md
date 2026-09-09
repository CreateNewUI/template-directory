# Curated dependency-free, accessible recipes

A small, high-signal set of patterns. Each is pure CSS, uses the motion tokens, and ships a reduced-motion alternative. For an exhaustive recipe menu, use a dedicated recipe skill instead of growing this file.

## Dropdown or popover

Grows from its trigger, fades in, and reverses on close:

```css
.menu {
  transform-origin: var(--menu-origin, top center);
  opacity: 0;
  transform: scale(0.97);
  transition: opacity var(--motion-duration-3) var(--motion-ease-out),
              transform var(--motion-duration-3) var(--motion-ease-out);
}
.menu[data-open] { opacity: 1; transform: scale(1); }
```

## Modal

Centered, scales up on open and closes faster:

```css
.modal {
  opacity: 0;
  transform: scale(0.96);
  transition: opacity var(--motion-duration-4) var(--motion-ease-out),
              transform var(--motion-duration-4) var(--motion-ease-out);
}
.modal[data-open] { opacity: 1; transform: scale(1); }
.modal[data-closing] { transition-duration: var(--motion-duration-2); }
```

## Toast

Rises from below, slower in than out:

```css
.toast {
  opacity: 0;
  transform: translateY(var(--motion-distance-3));
  transition: opacity var(--motion-duration-4) var(--motion-ease-out),
              transform var(--motion-duration-4) var(--motion-ease-out);
}
.toast[data-open] { opacity: 1; transform: translateY(0); }
.toast[data-closing] { transition-duration: var(--motion-duration-2); }
```

## Accordion

Grows by animating grid rows, which needs no fixed height:

```css
.panel { display: grid; grid-template-rows: 0fr;
  transition: grid-template-rows var(--motion-duration-3) var(--motion-ease-standard); }
.panel[data-open] { grid-template-rows: 1fr; }
.panel > div { overflow: hidden; }
```

## Tooltip

Delayed and subtle on the way in, instant on the way out:

```css
.tooltip {
  opacity: 0;
  transition: opacity var(--motion-duration-3) var(--motion-ease-out) 400ms;
}
.trigger:hover .tooltip,
.trigger:focus-visible .tooltip { opacity: 1; transition-delay: 0ms; }
```

## Reduced motion

Every pattern above collapses to a plain cross-fade under reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .menu, .modal, .toast, .tooltip { transform: none; }
  .menu[data-open], .modal[data-open], .toast[data-open] { transform: none; }
  .panel { transition: none; }
}
```

# Enter, exit, open and close asymmetry, transform-origin, stagger

Entrances and exits are not mirror images. Getting the asymmetry right is most of what makes motion feel considered.

## Enter and exit

An entrance decelerates into place with a fade and a small offset or scale. An exit is faster and does less.

```css
.dialog {
  opacity: 0;
  transform: translateY(var(--motion-distance-2)) scale(0.96);
  transition: opacity var(--motion-duration-4) var(--motion-ease-out),
              transform var(--motion-duration-4) var(--motion-ease-out);
}
.dialog[data-open] {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.dialog[data-closing] {
  transition-duration: var(--motion-duration-2);
}
```

Transitions between two states are interruptible, so a user who reopens mid-close is handled for free. A close reuses the entrance easing at a shorter duration. Reserve `--motion-ease-in` for content that fully leaves the screen, never for an in-place close.

## Open and close asymmetry

Close is usually one duration step faster than open. A modal that opens at `--motion-duration-4` closes at `--motion-duration-2`. A toast rises slower than it leaves.

## Transform-origin

A popover or dropdown should grow from its trigger, not from its own center. Modals stay centered.

```css
.menu { transform-origin: var(--menu-origin, top center); }
```

## Stagger

Reveal a short list one item at a time with a small offset. Keep the total under control, and cap the number of staggered items so the last one is not slow.

```css
.item { animation: item-in var(--motion-duration-3) var(--motion-ease-out) both; }
.item:nth-child(2) { animation-delay: calc(var(--motion-stagger) * 1); }
.item:nth-child(3) { animation-delay: calc(var(--motion-stagger) * 2); }

@keyframes item-in {
  from { opacity: 0; transform: translateY(var(--motion-distance-2)); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Ship the reduced-motion alternative alongside every pattern here. See [accessibility.md](./accessibility.md).

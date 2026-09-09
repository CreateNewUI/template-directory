# Reduced-motion alternatives and vestibular safety

Reduced motion does not mean no motion. It means an alternative that conveys the same change without the trigger.

## Three-tier response

1. Full motion by default.
2. A reduced alternative when the user prefers reduced motion, such as a cross-fade in place of a slide, zoom, or large movement. Opacity changes are safe.
3. No motion only when no safe alternative exists.

```css
.panel {
  transform: translateY(var(--motion-distance-3));
  opacity: 0;
  transition: transform var(--motion-duration-4) var(--motion-ease-out),
              opacity var(--motion-duration-4) var(--motion-ease-out);
}
.panel[data-open] { transform: translateY(0); opacity: 1; }

/* Reduced motion: keep a cross-fade, drop the movement */
@media (prefers-reduced-motion: reduce) {
  .panel { transform: none; transition: opacity var(--motion-duration-3) var(--motion-ease-out); }
  .panel[data-open] { transform: none; }
}
```

Substituting a cross-fade for a slide or zoom follows Apple's cross-fade approach for reduced motion.

## Vestibular triggers to avoid

These can cause dizziness or nausea and should be removed or replaced under reduced motion:

- Large-area transforms and full-screen slides or zooms.
- Parallax, where layers move at different speeds.
- Continuous or looping background motion.
- Spinning and fast scaling.

## Autoplay and looping (WCAG 2.2.2)

Anything that moves, blinks, or scrolls automatically for more than five seconds needs a way to pause, stop, or hide it. Provide a visible control, and stop looping motion when reduced motion is set.

## Motion from interaction (WCAG 2.3.3)

Motion triggered by scrolling or other interaction should be reducible. Honoring `prefers-reduced-motion` satisfies this at the enhanced level.

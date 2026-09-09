# Compositor-friendly properties and 60fps

Smooth motion holds a 60fps budget, which leaves about 16ms per frame. Animating the wrong properties spends that budget on layout and paint.

## Animate transform and opacity

`transform` and `opacity` are handled by the compositor and skip layout and paint. They are the only properties you should animate for movement and fades.

Avoid animating layout properties, which force the browser to recompute geometry every frame:

- Position and size: `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`.
- Prefer `transform: translate()` over `top` and `left`, and `transform: scale()` over `width` and `height`.

The one accepted exception is expand and collapse, such as an accordion, where no transform equivalent exists. Animate `grid-template-rows` there and keep the duration short.

## Use will-change sparingly

`will-change` promotes an element to its own layer before it animates. Apply it just before the animation and remove it after. Leaving it on many elements wastes memory.

```css
.sheet:hover { will-change: transform; }
```

## Costly effects

Animating `box-shadow`, `filter`, and large `background` changes is expensive. Animate a shadow by cross-fading a pseudo-element's `opacity` instead of the shadow itself.

## Measure

Confirm frame rate rather than assuming it. Record with the browser DevTools performance panel and watch for dropped frames and long tasks during the animation. Test on a mid-range device, not only a fast laptop.

## Contain work

`content-visibility` and `contain` limit how much the browser recomputes when off-screen or isolated content updates, which helps animations that coexist with heavy pages.

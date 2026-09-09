# Testing checklist

- [ ] The animation has a named purpose: feedback, spatial consistency, state indication, preventing a jarring change, or delight.
- [ ] Frequency is appropriate; nothing seen hundreds of times a day animates.
- [ ] Only `transform` and `opacity` are animated; no `transition: all` and no layout properties.
- [ ] Entrances decelerate; exits are faster; open and close are asymmetric.
- [ ] Elements enter from `scale(0.96)` or an offset, never from `scale(0)`.
- [ ] Popovers and dropdowns scale from their trigger; modals stay centered.
- [ ] A reduced-motion alternative ships with the animation, and it conveys the same change.
- [ ] No parallax, large-area transforms, or continuous background motion under reduced motion.
- [ ] Autoplay or looping motion over five seconds has a pause, stop, or hide control.
- [ ] In-flight motion is interruptible where the user can reverse it.
- [ ] Motion holds 60fps on a mid-range device, verified in DevTools.
- [ ] The project's existing motion tokens are reused; no parallel scale and no new dependency.

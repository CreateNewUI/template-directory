# Interruptible motion and gesture feel

Good motion responds to the user mid-flight instead of finishing on its own schedule.

## Interruptible and redirectable

A user who reopens a closing menu should not wait for the close to finish. CSS transitions are interruptible by default. Change the target state and the browser retargets from the current value. The Web Animations API is also interruptible through `cancel`, `reverse`, and `updatePlaybackRate`. CSS keyframe animations are not interruptible mid-run, so reserve them for loops and one-shot sequences.

```js
// Retarget an in-flight animation instead of restarting it
const anim = el.animate(
  [{ transform: "translateY(8px)", opacity: 0 }, { transform: "none", opacity: 1 }],
  { duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" }
);
closeButton.addEventListener("click", () => anim.reverse());
```

## Gesture feel

When motion tracks a gesture, tie the value to the pointer rather than firing a fixed animation, and let it settle with momentum when released. Keep a keyboard and pointer alternative for anything a gesture drives, per the accessibility rules.

## Spring feel

A spring is a feel, not a single tool. Approximate it with a slightly overshooting curve such as `--motion-ease-bounce` for small, playful accents, or drive it from the Web Animations API when the motion must respond to velocity. Use overshoot sparingly, and never on frequent or content-carrying elements.

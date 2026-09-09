# When to animate, purpose, and restraint

Most interfaces are over-animated. The first job of this skill is to produce no animation when motion would not help. Restraint is the craft.

## Frequency gate

How often a user sees an element decides whether it may animate at all.

| Frequency | Decision |
| --- | --- |
| Hundreds of times a day (keyboard shortcuts, command palette, core navigation) | No animation. Motion makes repeated actions feel slow. |
| Tens of times a day (hovers, list navigation, frequent toggles) | Near-imperceptible only, fast and subtle, or nothing. |
| Occasional (modals, drawers, toasts, settings) | Standard animation. |
| Rare or first-time (onboarding, empty states, success, celebration) | The delight budget lives here. |

Keyboard-initiated actions are a disqualifier, not a judgment call. An action repeated hundreds of times a day feels slower with motion, not better.

## Purpose

Name the purpose in one word before building. If none fits, do not animate.

- **Feedback** confirms the interface received the input.
- **Spatial consistency** shows where something came from or went.
- **State indication** makes a state change legible.
- **Preventing a jarring change** bridges content that would otherwise jump.
- **Delight** is allowed only on rare or first-time surfaces.

## Function over decoration

Data the user is reading or acting on must not move for style. A decorative effect belongs on a marketing surface, not on a control or a value the user is trying to use.

## Restraint

A short list of high-conviction animations beats a long wishlist. When in doubt, ship the instant state change and a static affordance instead.

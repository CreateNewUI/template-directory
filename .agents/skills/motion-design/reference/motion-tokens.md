# Duration, easing, distance, and scale

The skill is standalone and needs no other skill installed. This file restates a complete scale so it works alone, and credits its lineage in [credits.md](./credits.md).

## Precedence

1. If the consuming project already defines motion tokens, use them and do not fork a parallel system.
2. Otherwise use the built-in `--motion-*` tokens below.
3. Never require another skill to be installed.

## Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--motion-duration-1` | `100ms` | micro feedback, hover, icon swap |
| `--motion-duration-2` | `150ms` | exits, tooltip out |
| `--motion-duration-3` | `200ms` | dropdowns, popovers, small enter |
| `--motion-duration-4` | `300ms` | modals, drawers, page transitions |
| `--motion-duration-5` | `500ms` | large or first-time emphasis |
| `--motion-stagger` | `40ms` | per-item stagger offset |

Exits are usually one step faster than the matching entrance.

## Easings

| Token | Value | Usage |
| --- | --- | --- |
| `--motion-ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | entrances, the default |
| `--motion-ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | movement within the screen |
| `--motion-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | exits that leave the screen |
| `--motion-ease-linear` | `linear` | progress, shimmer, spinners |
| `--motion-ease-bounce` | `cubic-bezier(0.34, 1.36, 0.64, 1)` | playful accents, rare |

A decelerating curve for entrances is the standard ease-out convention. Motion arrives fast and settles gently.

## Distance and scale

| Token | Value | Usage |
| --- | --- | --- |
| `--motion-distance-1` | `4px` | text and icon swaps |
| `--motion-distance-2` | `8px` | enter and exit offsets |
| `--motion-distance-3` | `16px` | larger reveals |

Enter from a near-resting scale, `scale(0.96)` for larger surfaces such as modals and `scale(0.97)` to `scale(0.98)` for smaller ones such as dropdowns and tooltips, never from `scale(0)`. Bigger surfaces start from further away. Nothing appears from nothing.

## Copyable tokens

Paste once into the project root, then reference any token as `var(--motion-...)`:

```css
:root {
  --motion-duration-1: 100ms;
  --motion-duration-2: 150ms;
  --motion-duration-3: 200ms;
  --motion-duration-4: 300ms;
  --motion-duration-5: 500ms;
  --motion-stagger: 40ms;

  --motion-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --motion-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --motion-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --motion-ease-linear: linear;
  --motion-ease-bounce: cubic-bezier(0.34, 1.36, 0.64, 1);

  --motion-distance-1: 4px;
  --motion-distance-2: 8px;
  --motion-distance-3: 16px;
}
```

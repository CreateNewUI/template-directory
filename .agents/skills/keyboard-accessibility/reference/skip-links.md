# Skip link and landmarks (WCAG 2.4.1)

A missing skip link forces sighted keyboard users to Tab through all navigation on every page. Provide one as the first focusable element, visible on focus.

```html
<a class="skip-link" href="#main">Skip to main content</a>
<header>…</header>
<nav aria-label="Primary">…</nav>
<main id="main" tabindex="-1">…</main>
```

```css
.skip-link {
  position: fixed;
  inset-block-start: 0.5rem;
  inset-inline-start: 0.5rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  color: #fff;
  background: #000;
  transform: translateY(-200%);
}
.skip-link:focus { transform: translateY(0); }
```

The target `<main>` needs `tabindex="-1"` to receive programmatic focus. The link must be visible on focus. A permanently `display: none` skip link fails 2.4.1. Use native landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) without redundant roles, and give multiple `<nav>` landmarks distinct names.

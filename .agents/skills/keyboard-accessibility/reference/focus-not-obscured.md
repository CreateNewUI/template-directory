# Focus not obscured (WCAG 2.4.11)

Sticky headers/footers, cookie banners, and chat panels can hide a focused element even though focus is technically visible. A focused element entirely hidden behind a sticky overlay fails 2.4.11 (AA) and is Serious. Partial obscuring is Moderate.

```css
html {
  scroll-padding-block-start: var(--sticky-header-height, 0);
  scroll-padding-block-end: var(--sticky-footer-height, 0);
}
```

CSS scroll spacing helps but does not prove conformance. Test every breakpoint, zoom level, and persistent overlay. Keeping the whole focused component visible also satisfies 2.4.12 (AAA).

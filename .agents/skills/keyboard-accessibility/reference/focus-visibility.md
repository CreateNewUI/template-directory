# Focus visibility (WCAG 2.4.7, 1.4.11)

Every focusable element needs a clear, persistent focus indicator. Removing outlines without an equally visible replacement is Serious. Use `:focus-visible` so the indicator shows for keyboard (not mouse) focus, and give it at least 3:1 contrast against adjacent colors (1.4.11). A hairline `1px` outline is too weak. Use at least `2px`.

```css
:focus-visible {
  outline: 3px solid #005fcc; /* ensure >=3:1 against the background */
  outline-offset: 2px;
}
@media (forced-colors: active) {
  :focus-visible { outline-color: Highlight; }
}
```

Distinguish the criteria. Do not describe the AAA formula as AA:
- **2.4.7 Focus Visible (AA):** a visible mode of focus exists
- **1.4.11 Non-text Contrast (AA):** indicator needs 3:1 contrast
- **2.4.13 Focus Appearance (AAA):** enhanced minimum area and change

Test focus in light, dark, increased-contrast, and forced-colors modes, and on every background a control appears against.

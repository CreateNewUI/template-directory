# Use native, keyboard-reachable elements

Every element activatable by mouse must be reachable and operable by keyboard. Prefer native elements. They provide focusability, keyboard behavior, semantics, states, and browser integration for free.

```jsx
// Good — built-in keyboard support, focus, Enter/Space activation
<button type="button" onClick={save}>Save</button>
<a href="/about">About</a>

// Avoid — a div needs full ARIA + JS to merely match native behavior
<div role="button" tabIndex={0} onClick={save}>Save</div>
```

Adding `role="button"` and `tabindex="0"` does not add button behavior. A custom control must also implement `Enter`/`Space` activation, disabled state, focus styling, and the expected accessible name. Do not make mouse or touch handlers the only way to operate a control. Test the actual result, not merely that a handler exists.

## `disabled` versus `aria-disabled`

Native `disabled` removes an element from the tab order entirely, so keyboard and screen reader users cannot land on it to discover why it is inactive. When the reason must stay discoverable, such as a Submit button that stays inactive until a form is valid, use `aria-disabled="true"` instead. Keep the control focusable, convey the state, and block submission in the form's `onSubmit` handler so both pointer clicks and Enter-key submission are prevented while invalid.

```jsx
// Reason stays discoverable: the button is focusable and announced as disabled,
// and the form guard blocks both click and Enter-key submission while invalid
<form
  onSubmit={(e) => {
    e.preventDefault();
    if (isValid) submit();
  }}
>
  <button type="submit" aria-disabled={!isValid}>
    Submit
  </button>
</form>
```

Reserve native `disabled` for controls whose inactive reason does not need to be reached, and pair `aria-disabled` with a visible, programmatically associated explanation.

## Event-handling notes

- Use the `click` event (or React `onClick`) for activation. It fires for mouse, `Enter`, and `Space` on native buttons/links, so you rarely need a manual `keydown` handler on a `<button>`.
- Use `keydown` for widget navigation that must feel immediate (arrow keys in a menu, toolbar, or listbox), and call `preventDefault()` on keys you handle.
- Do not attach interaction logic only to `mousedown`, `mouseover`, or `touchstart`. Those exclude keyboard users.

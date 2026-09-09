# Language and word choice

These guidelines help you choose consistent words and phrases when describing code and commands.

## Do not use the command name as a verb

- **keywords**: writing, word choice, CLIs, commands
- **content sets**: documentation, tutorials

Refer to "the <command words> command", instead of "a <command words>" for clarity. 

### Examples

**Do**:

``To build the image, run the `docker build` command in the directory containing the `Dockerfile`.``

**Don't**

``To build the image, `build` the directory containing the `Dockerfile`.``

## Use language that matches keywords built into the product

- **keywords**: writing, formatting, configuration, keys, values, code
- **content sets**: documentation, tutorials

When describing code, configurations, settings, modes, and other elements, refer to specific keys or values and format them as code.

### Examples

**Do**

```
Add a `submit` event listener to your form to control what happens when the user submits it.
```

```
Set the script's `type` attribute to `module` to load it as an ES module.
```

**Don't**

```
Add a Submit handler to your form and specify what happens when the user submits it.
```

```
Run the script in Module mode so that it loads as an ES module.
```


# Content organization

These guidelines are intended to help you organize information in a consistent manner when describing code and commands.

## Avoid providing instructions and documenting functionality in code comments

- **keywords**: code blocks, comments, writing
- **content sets**: documentation, tutorials

Use comments to enhance clarity, but call out pertinent details from the code block when discussing the block instead of using comments to document instructions, functionalities, or other characteristics.

### Example

**Do**

````
The following configuration enables three retries and a 2,700 ms timeout for the API client:

```js
const client = createClient({
  baseUrl: "https://example.com/api",
  retries: 3,
  timeout: 2700,
});
```
````

**Don't**

````
```js
const client = createClient({
  baseUrl: "https://example.com/api",
  retries: 3,          // Sets the retry count
  timeout: 2700,       // How long the client waits before failing
});
```
````

## In tutorials, introduce code blocks with a descriptive imperative sentence that ends with a period

- **keywords**: code blocks
- **content sets**: tutorials

The sentence before a code block describes a high-level operation that is expressed by the command.

### Example

````
Create a new branch named `feature-login` and switch to it.

```shell-session
$ git checkout -b feature-login
```
````

## In documentation, introduce code blocks as examples and explain the actions represented in the block

- **keywords**: code blocks, examples
- **content sets**: documentation

In documentation, describe an action and provide example configurations and commands whenever possible. Introduce examples by describing the actions the configuration or command represents.

### Example 

````
The following example registers a click handler that increments the counter each time the user selects the button:

```js
const button = document.querySelector("#counter");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  button.textContent = count;
});
```
````

## Add one product command per code block

- **keywords**: CLIs
- **content sets**: documentation, tutorials

Do not place a sequence of product commands in the same block. Instead, place them in separate blocks so that practitioners have the context for running each command. When adding example commands related to the task but not the product, you can chain multiple commands for their convenience.

### Examples

**Do**

````
1. Return to the terminal and set the `SERVICE_TOKEN` environment variable.

   ```shell-session
   $ export SERVICE_TOKEN=<token>
   ```

1. Set the `SERVICE_NAMESPACE` environment variable to `admin`.

   ```shell-session
   $ export SERVICE_NAMESPACE=admin
   ```
````

````
```shell-session
$ mkdir /tmp/learn-app-lab && export LEARN_LAB="/tmp/learn-app-lab"
```
````

**Don't**

````
Set the environment variables.

```shell-session
$ export SERVICE_ADDR="http://127.0.0.1:8080"
$ export SERVICE_TOKEN=<token>
$ export SERVICE_NAMESPACE=admin
```
````
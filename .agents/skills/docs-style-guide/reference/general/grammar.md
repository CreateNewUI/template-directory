# Grammar and punctuation

These guidelines describe verb tense and how to consistently document events that occur over time.

## Always use the serial comma, also called the "Oxford" comma

- **keywords**: grammar, punctuation, commas, lists  
- **content sets**: documentation, tutorials

In prose, add a comma between the second to last item and the word "and". 

### Examples

**Do:**

`Give permission to read, write, and delete.`

**Don't:**

`Give permission to read, write and delete.`

## Always write complete sentences in prose

- **keywords**: grammar, sentence fragments  
- **content sets**: documentation, tutorials

Do not use sentence fragments or truncated phrases in prose. Do not split complete sentences across codeblocks, screenshots, or other elements. Do not use a list, codeblock, or other element to complete a sentence. 

### Examples

**Do:**

```
# `<product> build ` command

The `<product> build` command starts a build using the configurations defined in the template file.
```

````
Create a token and link it to your policy:

```shell-session
$ <product> acl token create
```

````

**Don't:**

```
# `<product> build ` command

Starts a build.

```

````
Run

```shell-session
$ <product> acl token create
```

to link the policy to a token.
````

## Avoid mixing fragments and complete sentences in lists and tables

- **keywords**: grammar, sentence fragments, complete sentence, lists, tables  
- **content sets**: documentation, tutorials

Prefer complete sentences in all cases, but be consistent when you need to use sentence fragments in non-prose constructions, such as tables and lists. If you use a sentence fragment for one cell in a table or for one item in a list, use fragments for all cells or list items.

Use parallel phrases in lists.

### Examples

**Do:**

Instead of showing the markdown, the following example shows the rendered table:

| Parameter | Description | Data type | Default |
| --- | --- | --- | --- |
| `IdleTimeout` | Specifies the total amount of time permitted for the request stream to be idle | Integer | `0` |
| `RequestTimeout` | Specifies the total amount of time in nanoseconds, including retry attempts, <product> permits for the entire downstream request to be processed | Integer | `0` |


```
You can configure the following types of gateways:

- **Inbound gateways** route external traffic into your private network.
- **Outbound gateways** route internal traffic to external services.
- **Peering gateways** connect two private networks across a public network.
```

**Don't:**

Instead of showing the Markdown, the following example shows the rendered table:

| Parameter | Description | Data type | Default |
| --- | --- | --- | --- |
| `IdleTimeout` | This parameter specifies the total amount of time permitted for the request stream to be idle. | Integer | `0` |
| `RequestTimeout` | Specifies the total amount of time <product> permits for the entire downstream request to be processed. This parameter accepts a value in nanoseconds. Includes retry attempts | Integer | `0` |


```
You can configure the following types of gateways:

- _Inbound gateways_ route external traffic into your private network.
- _Outbound gateways_ - Use to connect internal services to external ones
- _Peering gateways_ - Lets networks be connected
```

## Do not use parentheses, en dashes, or em dashes to separate ideas or phrases

- **keywords**: grammar, punctuation, parentheses, dashes  
- **content sets**: documentation, tutorials

En dashes represent a range. Em dashes are similar to commas, but many writers use them in place of colons, semicolons, parentheses, or to create stylistic pauses. In documentation, only use parentheses when introducing acronyms or when they are characters in code samples. For consistency, use commas to separate phrases and periods to separate ideas. 

Refer to the following guidelines for additional information:

- Spell out a phrase and place the acronym form in parentheses on first use  
- Write sentences that contain a single idea

### Examples

**Do:**

```
<product> uses a declarative configuration language, which uses concise descriptions of the required steps to get to a job file. 
```

```
The organization name also must be unique. The interface prompts you to choose another name if an existing organization already has the name.
```

**Don't:**

```
<product> uses a declarative configuration language - a concise, human-readable format - designed to allow concise descriptions of the required steps to get to a job file. 
```

```
The name also must be unique — if another organization is already using the name, you will be asked to choose a different one.
```

## Do not use punctuation or text formatting to add semantic emphasis

- **keywords**: writing, punctuation, emphasis  
- **content sets**: documentation, tutorials

Write in an even, consistent tone. Do not use punctuation, such as exclamation marks, or text formatting, such as bold or italics, for semantic emphasis. 

### Examples

**Do:**

- `<product> must have read permission on your source this directory to successfully load plugins. You cannot use symbolic links for the source directory.`
- `TCP (L4) services must authorize incoming connections against the <product> access policies, whereas HTTP (L7) services must authorize incoming requests against the policies.`

**Don't:**

- `<product> _must_ have permission to read files in this directory to successfully load plugins. The value cannot be a symbolic link.`
- `<product> **must** have permission to read files in this directory to successfully load plugins. The value cannot be a symbolic link.`

## Use colons to introduce lists, tables, and visual aids

- **keywords**: writing, colons, lists, tables, visual aids  
- **content sets**: documentation, tutorials

Colons introduce lists of related information, procedural steps, tables, and visual aids. Do not use colons mid-sentence. Do not introduce a list, table, or visual aid with a sentence fragment.

To introduce a list, write a complete sentence followed by a colon. You can omit the introductory sentence when the list immediately follows a heading, such as the list of requirements on a usage page.

### Example

**Do:**

```
Use the <product> API to create, read, update, and delete the following entities:

- API keys
- Service accounts
- Access policies
```

```
## Requirements

- A <product> cluster with at least three nodes. 
- All <product> servers in the cluster must be on v2.0 or newer.
```

**Don't:**

```
Use the <product> API to create, read, update, and delete: API keys, service accounts, and access policies.
```

```
## Overview

Start by:

1. <step>
1. <step>
```

## Do not use quotation marks around file names, constructs, new terms, or to add emphasis

- **keywords**: punctuation, quotes, emphasis, terminology, code  
- **content sets**: documentation, tutorials

Use quotation marks when required in codeblocks and when referring to titles of books, articles, and other works. Otherwise, do not use them. 

### Examples

**Do:**

- `The foundation of <product> is an identity-based, zero-trust access model.`
- `For details about the release, refer to the article titled "Scaling Distributed Systems" published on our blog.`	

**Don't:**

- `The foundation of <product> is an identity-based, “Zero-Trust” access model.`
- `<product> relies on plugins called "extensions" to interact with cloud services, SaaS providers, and other APIs.`
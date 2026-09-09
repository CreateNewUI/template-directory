# Fonts and text formatting

Follow these guidelines so that you can consistently use code font, apply letter cases, and format text.

## Use lowercase for features, components, and other regular nouns unless they are branded words

- **keywords**: capitalization, lowercase, uppercase, feature names, binaries, files
- **content sets**: documentation, tutorials

Capitalize brand names and product names as proper nouns, but use lowercase for names of features, components, binaries, files or other regular nouns unless they are branded words. Refer to the word list in the corporate style guide for exceptions and special cases.

### Examples

- "virtual machine", not "Virtual Machine"
- "consensus protocol", not "Consensus Protocol"
- "`active-active` mode', not "Active/Active mode"
- "<product> server", not "<product> Server"

## Use boldface to introduce new terms

- **keywords**: formatting, bold, terms, italics, quotes, quotation marks 
- **content sets**: documentation, tutorials

Do not use italics or quotation marks to introduce terminology. Use boldface instead.  

### Examples

**Do**

```
**Data sources** allow <product> to use information defined outside of <product>, defined by another independent <product> configuration, or modified by functions.
```

**Don't**

```
_Data sources_ allow <product> to use information defined outside of <product>, defined by another independent <product> configuration, or modified by functions.
```

```
"Data sources" allow <product> to use information defined outside of <product>, defined by another independent <product> configuration, or modified by functions.
```

## Do not use special text formatting for names of services, applications, and programs

- **keywords**: formatting, services, applications
- **content sets**: documentation, tutorials

Do not use code font, italics, quotation marks, bold, or any other special formatting or characters for names of services, applications, and programs, but use code font when referring to an executable, such as the CLI.

### Examples

**Do**

- `Start the counting service.`
- `Stop the dashboard service.`	
- ``Run the `<product> apply` to provision the counting service.``

**Don't**

- ``Start the `counting` service.``
- `Stop the _dashboard_ service.`

## Format local URLs as code

- **keywords**: formatting, URLs, code
- **content sets**: documentation, tutorials

### Examples

``In a browser window, navigate to the UI at `http://localhost:3000`.``

## Format API endpoints and request methods as code

- **keywords**: formatting, APIs, code
- **content sets**: documentation, tutorials

### Examples

``Send a `PUT` request to the `/acl/token` endpoint to create a new token.``

## Format specific file names as code

- **keywords**: formatting, URLs, code, filename, filenames
- **content sets**: documentation, tutorials

### Examples

````
In the following example, <product> saves the planned infrastructure changes in the `my-plan` file in the local directory:

```shell-session
$ <product> apply -out=my-plan
``` 	
````

## Use lowercase for compass directions, but capitalize the names of regions

- **keywords**: writing, directions, regions, east, west, north, south
- **content sets**: documentation, tutorials

Use lowercase for compass directions, such as north, south, east, and west, but capitalize the names of regions, such as "the Southern United States".

## Do not use footnotes or endnotes to cite sources. 

- **keywords**: writing, footnotes, endnotes, citations
- **content sets**: documentation, tutorials

Cite third-party work directly in the prose and link to the source.

## Capitalize job titles when introducing people, but use lower case when referring to jobs

- **keywords**: writing, capitalization, job titles
- **content sets**: documentation, tutorials

### Examples

- `Jordan Lee, Founder and CTO`
- `She is the founder of the company.`

## Do not use the registered trademark or trademark symbol unless directed to do so by <company>'s legal team

- **keywords**: writing, trademarks
- **content sets**: documentation, tutorials

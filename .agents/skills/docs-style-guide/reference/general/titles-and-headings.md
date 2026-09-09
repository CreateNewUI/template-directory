# Titles and headings

Follow these guidelines so that you can consistently format for page titles, sections headings, and navigation labels.

## Use sentence case for titles, headings, and navigation labels

- **keywords**: capitalization, headings, titles
- **content sets**: documentation, tutorials

Capitalize the first word and proper nouns in page titles, headings, navigation labels. Proper nouns include product, company, and brand names, but not feature names, concepts, or constructs within a product.

### Examples

```
# Create a static credential store
```

```
## Create a role
```

```
{
   "title": "Secrets management tools",
   "path": "overview/vs/secrets-management"
},
```


## Use simple present tense in titles, headings, and navigation labels

- **keywords**: writing, tense, headings, titles
- **content sets**: documentation, tutorials

Simple present tense describes actions or events that happen regularly, are currently happening, or are facts. 

### Examples

- "Configure proxies", instead of "Configuring proxies"
- "Provision infrastructure", instead of "Provisioning infrastructure"

## Nest headings sequentially according to header level markdown

- **keywords**: writing, headings, nesting, markdown
- **content sets**: documentation, tutorials

Readers use the hierarchy to understand how topics relate to each other. The following table describes when to use a heading:

| HTML heading | Markdown | Child of | Explanation |
| --- | --- | --- | --- |
| H1 | # | None | The main topic and title of the page. Use one H1 per page. |
| H2 | ## | H1 | A specific aspect of or argument related to the main topic. Second level headings can be related to each other, but should stand on their own as components of the H1. Many H2s are predefined in the content types guidelines. |
| H3 | ### | H2 | Provides specific details or layers of organization to the idea expressed in its parent H2. |
| H4 | #### | H3 | A subset of information expressed in its parent H3. Consider splitting the page into multiple related topics in the same folder if your content reaches H4 headings and beyond.  |

### Examples

**Do**

```
## Requirements

Verify that your system meets the following requirements.

### ACLs
 . . .
```

**Don't**

```
# Requirements

Verify that your system meets the following requirements.

#### ACLs
 . . .
```
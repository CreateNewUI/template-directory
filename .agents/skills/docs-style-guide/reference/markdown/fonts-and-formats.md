# Fonts and text formatting

Follow these guidelines so that you can consistently use Markdown to format text.

## Use double asterisks to bold words

- **keywords**: markdown, formatting, bold
- **content sets**: documentation, tutorials

## Do not use more than one inline style in prose

- **keywords**: markdown, formatting, bold
- **content sets**: documentation, tutorials

Formats provide visual clues about which words have specific meanings. 

### Examples

**Do**

``The `<product> apply` command instructs <product> to provision infrastructure according the `main.conf` file.``

**Don't**

``The _`<product> apply`_ command instructs <product> to provision infrastructure according the **`main.conf`** file.``

## Use hyphens to create unordered lists

- **keywords**: markdown, formatting, lists, hyphens
- **content sets**: documentation, tutorials

Do not use asterisks, addition signs, or other characters to create unordered lists. This helps differentiate between lists and italic or bolded elements that may appear at the start of a list item.

### Examples

**Do**

```
- list item
- list item
    - nested list item
    - nested list item
```

**Don't**

```
* list item
* list item
    + nested list item
    + nested list item
```

## Use `1.` for every item in an ordered list

- **keywords**: markdown, formatting, ordered lists 
- **content sets**: documentation, tutorials

The platform renders consecutive "1."s as incremental numbers. Manually numbering list items is prone to mistakes.
  
### Example

```
1. Step one
1. Step two
1. Step three
```

## Use single-space for simple lists

- **keywords**: markdown, formatting, lists, spacing
- **content sets**: documentation, tutorials

To enhance readability, use single-spacing when a list contains flat, short list items. 

Refer to Do not format multiple paragraphs of text into lists for additional guidance.

## Add an extra space between long list items and complex lists

- **keywords**: markdown, formatting, lists, spacing
- **content sets**: documentation, tutorials

To enhance readability, add spaces when a list contains long list items, additional elements, such as paragraphs of text, example commands, and nested lists. Refer to Do not format multiple paragraphs of text into lists for additional guidance.

### Example

````
## Set up the database

1. Create a Cassandra user with the following permissions:

    ```text
    GRANT CREATE ON ALL ROLES to '<YOUR USER>';
    GRANT ALTER ON ALL ROLES to '<YOUR USER>';
    GRANT DROP ON ALL ROLES to '<YOUR USER>';
    GRANT AUTHORIZE ON ALL ROLES to '<YOUR USER>';
    ```

1. If not already enabled, run the following command to enable the database secrets engine:

    ```shell-session
    $ <product> secrets enable database
    Success! Enabled the database secrets engine at: database/
    ```

    By default, <product> enables the secrets engine in the current directory. To
    enable the secrets engine at a different path, use the `-path` argument.

1.  Configure <product> with the proper plugin and connection information:

    ```shell-session
    $ <product> write database/config/my-cassandra-database \
        plugin_name="cassandra-database-plugin" \
        hosts=127.0.0.1 \
        protocol_version=4 \
        username=exampleuser \
        password=examplepass \
        allowed_roles=my-role
    ```

1.  Run the following command to configure a role that maps a name in <product> to an SQL statement. When the SQL statement executes, it creates the database credential:

    ```shell-session
    $ <product> write database/roles/my-role \
        db_name=my-cassandra-database \
        creation_statements="CREATE USER '{{username}}' WITH PASSWORD '{{password}}' NOSUPERUSER; \
              GRANT SELECT ON ALL KEYSPACES TO {{username}};" \
        default_ttl="1h" \
        max_ttl="24h"
    Success! Data written to: database/roles/my-role
    ```
````

## Add an extra line break before and after a list

- **keywords**: markdown, formatting, lists, spacing
- **content sets**: documentation, tutorials

### Example

**Do**

```
## Overview

Complete the following steps to install <product>:

1. Complete the prerequisites
1. Set up the installation folders and files
1. Download and install the Docker image
1. Apply the deployment installation

## Requirements
```

**Don't**

```
## Overview

Complete the following steps to install <product>:
1. Complete the prerequisites
1. Set up the installation folders and files
1. Download and install the Docker image
1. Apply the deployment installation
## Requirements
```

## Add an extra line space between headings and the next element

- **keywords**: markdown, formatting, headings
- **content sets**: documentation, tutorials

**Do**

```
## Introduction

Lorem ipsum.
```

**Don't**

```
##Introduction
Lorem ipsum.
```

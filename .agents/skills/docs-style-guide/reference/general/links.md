# Links

These guidelines are intended to help you properly use links.

## Use descriptive link text that explicitly tells readers about the destination content

- **keywords**: links, linking, linked text
- **content sets**: documentation, tutorials

Mid-prose links can distract readers from their task or confuse readers if the linked text targets a single word that seems randomly selected. Avoid linking single words or phrases mid-sentence unless they clearly match the title of the linked topic. Instead, write a second sentence that refers users to a related topic using the title as the linked text. 


### Examples

**Do**:

```
After defining your services and health checks, you must register them with a <product> agent. Refer to Register Services and Health Checks for additional information.
```

```
You must also configure the identity provider to authenticate using an organization-level service account and service account key. Refer to the Authentication guide for more information.
```

```
You should be familiar with AWS ECS. Refer to What is Amazon Elastic Container Service in the Amazon AWS documentation for additional information.
```

```
For additional information about the `kill` command, refer to 
Kill Signals and Commands  in the Linux documentation.
```

**Don't**:

In the following example, the author should link to the title of the article and let readers know that they are being directed to an external website.

```
For more information on different signals sent by the `kill`  command, go
here
```

In the following example, the linked text is in quotation marks, which may confuse the reader because it's not clear if the term is part of the <company> lexicon or a colloquialism. And without additional context, the reader may assume that the link directs them to a conceptual article about what "bootstrapping" means.

```
A server may also be in "bootstrap" mode, which enables the server to elect itself as the Raft leader.
```

In the following example, the linked text may not intuitively match the destination topic. Also note that the destination is poorly structured per IA guidelines.

```
Within each region, we have both clients and servers. Servers are responsible for accepting jobs from users, managing clients, and computing task placements.
```

## Never use "click here", "here", "learn more", or similar phrases as link text

- **keywords**: links, linking, linked text, click here, learn more
- **content sets**: documentation, tutorials

Refer to Use linked text that explicitly tells readers about the destination content for additional information and examples.

## Avoid using raw URLs as hyperlinks in prose

- **keywords**: writing, linking, linked text, URLs
- **content sets**: documentation, tutorials

Refer to Use linked text that explicitly tells readers about the destination content for additional information and examples.

## Put file extensions in parentheses when linking to PDFs and other static content

- **keywords**: links, linked text, pdf, webpages
- **content sets**: documentation, tutorials

### Example

`Refer to Some article in PDF format (PDF) for additional information.`


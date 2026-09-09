# Language and word choice

These guidelines help you choose consistent words and phrases in prose. 

## Do not use ableist language

- **keywords**: writing, word choice, ableist  
- **content sets**: documentation, tutorials

Avoid language that makes assumptions about a user's faculties or ascribes mental health conditions to processes and technologies.

For many people with different abilities, the difference between asking to "see" another topic instead of being asked to "refer" to another topic is minimal. But there are people for whom "see <link>" or "sanity check" is another reminder of their "otherness" with regard to their vision or mental health. The people who are unbothered by the language will still have a good experience and the people who are more sensitive to it will definitely feel included.

The discussion around ableist language is nuanced and can easily deviate from how to write content on behalf of <company> to personal expression. Our goal is to be considerate and inclusive, so you should carefully weigh word choices so that we can avoid contributing to what can be an already frustrating experience. 

### Examples

**Do:** 

- `Refer to <link> for additional information.`
- `Perform a preliminary check to verify that the operation successfully completed.`

**Don't:**

- `See <link> for additional information.`
- `Run a sanity check to verify that the operation successfully completed.`

## Do not use gender-specific language

- **keywords**: writing, word choice, gender  
- **content sets**: documentation, tutorials

Refer to general roles, such as a "developer", "engineer", or "administrator", instead of third-person pronouns. When you need to refer to a third-person pronoun, use the singular pronoun "they".  

### Examples

**Do:**

- `Distribute tokens to developers so they can access deploy services using the API.`

**Don't:**

- `Provide a token to the developer so that he can deploy services using the API.`

## Use non-violent language

- **keywords**: writing, word choice, non-violent language  
- **content sets**: documentation, tutorials

Avoid describing actions using violent terms. Note that some words, such as "execution" to describe issuing a command, may be unavoidable. Explore alternatives whenever possible. Similarly, the `<product> destroy`command, which deletes provisioned resources, has no alternatives.

### Examples

**Do:**

- ``Click **Delete** to permanently remove <element>.``
- ``Use the `kill` command to stop the process.``

**Don't:**

- `Hit the **Delete** button to permanently remove <element>.`
- `Kill the process.`

## Avoid speculative language

- **keywords**: writing, word choice, speculative language  
- **content sets**: documentation, tutorials

Do not ask readers to "imagine", "suppose", "pretend", or otherwise engage in a hypothetical situation. Instead, use concrete language to set up examples.

### Examples

**Do:**

- `In the following example, <product> deploys three server clusters to the network.`
- `In the following example, the <command> directs <product> to enable the database secrets engine.`

**Don't:**

- `Suppose that we are starting with three server clusters.`
- `Imagine that you want to use <product> commands to enable the database secrets engine.`

## Use the most specific word to describe actions between entities 

- **keywords**: writing, word choice, specificity  
- **content sets**: documentation, tutorials

General actions such as "use" are acceptable to avoid adding long descriptions.

### Examples

Instead of a general action, such as "use", the preferred word is emphasized in the following examples:

- <product> **consumes** the configuration file. 
- The flag **passes** values into the operation.
- **Present** the token when calling the endpoint.

## Do not use figures of speech

- **keywords**: diction, metaphors, similes  
- **content sets**: documentation, tutorials

Do not use metaphors, similes, colloquialisms, idiomatic expressions, or other figurative language. Refer to Do not use words or phrases borrowed from other languages, scientific words, or jargon words for more guidance. 

### Examples

Do not use the following constructions or similar language:

- Six of one, half dozen of the other
- [will be] materialized
- gonna
- wanna
- y'all
- drive you up a wall
- prim and proper
- a ton

## Do not editorialize about the difficulty or comprehensibility of an action or concept

- **keywords**: diction, simply, easily, complexity  
- **content sets**: documentation, tutorials

Some users may be struggling with the instructions or with understanding concepts. Using language that downplays the complexity associated with our products can turn users away. Do not use the following words or similar words that imply that a task is easy:

- easy, easily, simply
- just (as in "just run this command")
- obviously

### Examples

**Do:**

- `Click Create to add a new workspace.`
- ``Run the `<product> config write` command to apply the configuration.``

**Don't:**

- `Simply click Create to add a new workspace.`
- ``Just run the `<product> config write` command to apply the configuration.``

## Avoid unnecessary words

- **keywords**: diction, extra words, fewer words  
- **content sets**: documentation, tutorials

Short sentences are easier to understand than sentences that contain filler words and phrases. Avoid adding words and phrases that do not affect the meaning. When possible, replace longer expressions with shorter words that have the same meaning.

### Examples

- Instead of "in order to", use "to"
- Instead of "in the case that", use "when"
- Avoid adding filler words, especially words that editorialize, such as "simply", "just", "very", and "actually". Refer to Avoid editorializing on the difficulty or comprehensibility of an action or concept.

## Use the simplest word possible

- **keywords**: diction, short words, simple words  
- **content sets**: documentation, tutorials

Always use the shortest word that has the same meaning. 

### Examples

- "use", not "utilize" or "utilization": In most instances, use the root for "ize" words.
- "because” not "due to the fact that": Also refer to Do not use figures of speech.

## Do not use words or phrases borrowed from other languages, scientific words, or jargon words

- **keywords**: diction, short words, simple words  
- **content sets**: documentation, tutorials

Use simple, concrete words to help our global audiences understand our content. 

### Examples

The following list contains common words and phrases that you should avoid in educational content:

| Do not use | Suggestion | Explanation |
| --- | --- | --- |
| blast radius | affected scope | metaphor, jargon |
| ergo | therefore, as a result, so | Latin word meaning "therefore" |
| etc. | " . . . and other <entities matching the description>." | Latin abbreviation of "et cetera", which means "and the rest". |
| e.g. or i.e. | "For example", "such as" | Abbreviation of Latin phrases used to give examples or restate what was previously said. |
| carte blanche | full permission, admin access | French word that literally translates to "blank document" and means "unlimited authority". |
| via | Choose a more concrete word to describe the relationship. | Latin word meaning "by way of". |
| vice versa | conversely | Latin word meaning "the other way around". |
| sanity check | preliminary check, verification, dry run | jargon, ableist |

**Do:**

- `Some repositories may include Git submodules that you can only access using an SSH connection.`
- `Choose a set of tags relevant to your project.`
- `<product> manages credentials, tokens, and other secrets.`

**Don't:**

- `Some repositories may include Git submodules that you can only access via SSH.`
- `Choose a set of tags germane to your project.`
- `<product> manages credentials, tokens, etc.`

## Use American English spelling

- **keywords**: diction, American English, American spelling  
- **content sets**: documentation, tutorials

For consistency and cohesiveness, spell words according to American English instead of British or Australian English. Refer to the Merriam-Webster dictionary for guidance.

### Examples

- "center", not "centre"
- "initialize", not "initialise"

## Do not use shortened or abbreviated spellings

- **keywords**: writing, abbreviations  
- **content sets**: documentation, tutorials

Shortened and abbreviated forms of words are common, but they may not be understandable to English as a Second Language (ESL) audiences or appropriate in formal settings. Our educational materials are friendly, but they are also professional documents. Using shortened phrases or words, even if they are widely-used and widely-understood, creates a colloquial tone that does not match our voice.

### Examples

- "repository", not "repo"
- "directory", not "dir"
- "configuration", not "config" 

## Do not ask rhetorical questions

- **keywords**: writing, questions, headings  
- **content sets**: documentation, tutorials

Do not use rhetorical questions in prose, as headings, or in any other construction unless you are referring to questions that appear in the product UI or are writing content for the "What is?" content type. Instead, use descriptive headings that orient readers.

Only use question marks when they are a necessary part of a code sample. 

**Do:**

```
### Verify that plugins meet <product> Plugin SDK requirements

The `<product> init` command only installs plugins that have been upgraded to use the latest version of the <product> Plugin SDK. As a result, the plugins are compatible with <product>'s API version v5.0. The plugin repository on GitHub must also follow a specific release format. Contact your repository maintainer if you are unsure that the plugin meets those requirements. 
```

```
## Enable your application to consume active secrets

Auto-rotating secrets maintain overlapping sets of active credentials to eliminate application downtime associated with rotation. The two newest versions of your secret are always active and available for consumption. To ensure that your application continues to consume active credentials, we recommend restarting it at least once every rotation interval. 
```

**Don't:**

```
### When should you upgrade your template?

The `<product> init` command can only install plugins that have been upgraded to use the latest version of the <product> Plugin SDK, and therefore are compatible with <product>'s API version v5.0. The plugin repository on GitHub also needs to use a specific release format. If you are not sure whether the plugin you use fits those requirements, you can reach out to your maintainer to ask. 
```

```
## How frequently should the secrets be consumed?

Auto-rotating secrets maintain overlapping sets of active credentials to eliminate application downtime associated with rotation. At any given time, the latest two secret versions will be active and available for consumption. To ensure that your application is always consuming active credentials, we recommend restarting it at least once every rotation interval. 
```

## Refer to a locally addressable web service as "localhost"

- **keywords**: word choice, localhost, addresses  
- **content sets**: documentation, tutorials

Refer to localhost, instead of IPv4 or IPv6 addresses, when describing a locally addressable web service. Refer to Format IP addresses as code for additional guidance.

### Examples

**Do:**

``In a browser window, navigate to the UI at `http://localhost:3000`.``

**Don't:**

``In a browser window, navigate to the UI at `http://127.0.0.1:3000`.``


## Refer to the user’s local machine as "localhost" or "your local machine"

- **keywords**: word choice, localhost, addresses, local machine  
- **content sets**: documentation, tutorials

## Spell out a phrase and place the acronym form in parentheses on first use

- **keywords**: acronyms, writing, parentheses  
- **content sets**: documentation, tutorials

Unless the spelled-out words are less common than the acronym, such as HTTP or SSH, spell out the words on first use. If a non-<company> product name is commonly abbreviated, write out the name of the product before using the abbreviated form. Refer to the word list in the corporate style guide for additional information.

### Examples

**Do:**

- `This topic describes how to create and manage custom policies using the open policy agent (OPA) framework.`
- `This topic describes how to configure DNS servers so that they can forward DNS queries to <product> servers.`

## Refer to <company> products as "products" or "offerings" not “tools” or “tooling”

- **keywords**: writing, word choice, products, tools  
- **content sets**: documentation, tutorials

## Follow the guidance for industry terms as described in the corporate style guide

- **keywords**: writing, word choice, abbreviations  
- **content sets**: documentation, tutorials

Refer to the word list in the corporate style guide for guidance about industry terms.

## Refer to the documentation or website for the project

- **keywords**: writing, word choice, third-party software  
- **content sets**: documentation, tutorials

For guidance on words associated with a specific software project that do not appear in our style guidance, refer to the documentation or website for the project. Use the third-party’s formatting standards to differentiate between products. For example, Kubernetes Pods and Services are always capitalized.



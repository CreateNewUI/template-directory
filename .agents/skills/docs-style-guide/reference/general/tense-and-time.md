# Tense and time

These guidelines describe verb tense and how to consistently document events that occur over time.

## Use simple present tense to describe immediate actions

- **keywords**: writing, grammar, tense   
- **content sets**: documentation, tutorials

Simple present tense describes actions or events that happen regularly, are currently happening, or are facts. Use present tense when describing chronological events, such as procedural steps and outputs. Do not describe events or actions that will happen in the future. For example, describe the results of a command as though it just happened, instead of describing it as an action that will happen. 

### Examples

**Do:**

- `The output shows that <product> is initialized and ready.`
- `After <product> performs a health check, the web UI reports that the service is unhealthy.`
- `Click **Next**. The server configuration screen appears.`

**Don't:**

- `The output will show that <product> is initialized and ready.`
- `The service's state will change to unhealthy in the web UI.`
- `Click **Next**. The server configuration screen will appear.`

## Use future tense when describing a sequence of events in a tutorial 

- **keywords**: writing, grammar, tense  
- **content sets**: tutorials

Use future tense when introducing a sequence of steps that the practitioner must follow chronologically as part of the tutorial. You can also use future tense to introduce outputs that practitioners can expect as they complete tutorials. Refer to Use simple present tense to describe immediate actions for guidance for documentation.

### Examples

- `In this tutorial, you will deploy a <product> cluster using the platform portal.`
- `When the platform <product> deployment completes, you will be redirected to the <product> Overview page.`


## Describe features and functionality as they currently exist 

- **keywords**: writing, grammar, tense, versions  
- **content sets**: documentation, tutorials

- Do not refer to features and functionality that will be implemented in the future. 
- Except for release notes, do not use words that use relational points of time, such as "new", "old", "now", or "currently" to describe products. In release notes, you can describe features and functionality as new, for example, "<product> can now . . ."
- Reference specific versions as necessary in dedicated areas, such as the Requirements block on a usage page.
- Do not mention specific versions in the body of a document outside specific contexts, such as release notes, deprecation guides, and upgrade guides.


### Examples

**Do**

```
## Requirements 

- <product> <version> or later
- <external product or system> or later
```

```

## Requirements 

- <product> <version> or later is required to <perform specific action described in this topic>
```

**Don't:**

- `Support for additional integrations will be available in the next release.`
- `In version 2.0, support for additional integrations was added.`

## Do not communicate updates or fixes in prose


- **keywords**: writing, grammar, versions, updates, deprecations  
- **content sets**: documentation, tutorials

Do not communicate updates or fixes for specific releases in prose. Instead, describe them in release notes or in a deprecations page. You should add alerts about deprecations as necessary and link to the appropriate release notes or deprecations page.

### Examples

**Do**

The following examples show standardized deprecation and beta alerts placed outside the prose:

```
> **Deprecated feature:** Deprecated features are functional but marked for eventual removal or replacement. Refer to the deprecation announcements page for migration details and information on the deprecation process.
```

```
> **Beta feature:** All APIs, workflows, and syntax are subject to change. Backward compatibility is not guaranteed for beta features that reach GA.
```

**Don't**

```
## Versioning 

Future APIs will increment this version, leaving the `/v1` API intact, though in the future we might deprecate certain features. In that case, we'll provide ample notice to migrate to the new API.
```

```
-> **NOTE:** The above example will give errors when working with pre-release
versions (example: `0.12.0beta1`). Future versions of this import will include
helpers to assist with processing versions that will account for these kinds of
exceptions.
```
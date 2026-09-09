# Dates and time

Follow these guidelines to write dates and times in your content.

## Spell out the month and use the cardinal number, including year, to refer to the date in prose

- **keywords**: formatting, dates
- **content sets**: documentation, tutorials

Do not abbreviate months. When including a day of the week, do not abbreviate the day. Refer to the following guidelines for additional formatting and usage:

- Use YYYY-MM-DD to represent dates in tables, lists, titles, and other non-prose elements
- Use YYYY-MM-DDThh:mm:ss format for timestamps

### Example

```
We will release the final version of <product> that supports the legacy deployment method in November 2024. <company> will support this release until April 1, 2026.
```

## Use YYYY-MM-DD to represent dates in tables, lists, titles, and other non-prose elements

- **keywords**: formatting, dates
- **content sets**: documentation, tutorials

When adding dates as part of a reference, such as a releases page, use YYYY-MM-DD. Refer to the following guidelines for additional formatting and usage:

- Spell out the month and use the cardinal number, including year, to refer to the date in prose
- Use YYYY-MM-DDThh:mm:ss format for timestamps

### Example

```
# Release notes

This page contains release information about <product>.

## YYYY-MM-DD

- <New feature>
- <Fix>
- <Other changes>

## YYYY-MM-DD

- <New feature>
- <Fix>
- <Other changes>
```

## Use YYYY-MM-DDThh:mm:ss format for timestamps

- **keywords**: formatting, timestamps
- **content sets**: documentation, tutorials

In most cases, timestamps include the hours, minutes, and seconds, but depending on the context, you may add the year, month, and day as necessary. Refer to the following guidelines for additional formatting and usage:

- Use YYYY-MM-DD to represent dates in tables, lists, titles, and other non-prose elements 
- Spell out the month and use the cardinal number, including year, to refer to the date in prose


### Example

````
At `2024-11-11T15:51:21.680-0800`, the server initialized the LAN area manager: 

```
...
2024-11-11T15:51:21.680-0800 [INFO]  agent.router: Initializing LAN area manager
...

```
````

## Use the 12-hour clock for time of day and include a time zone

- **keywords**: formatting, time, clock
- **content sets**: documentation, tutorials

You can look up time zone abbreviations at www.timeanddate.com.

### Example

`The regular maintenance window begins at 12:00 AM PST.`


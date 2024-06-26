---
sidebar_position: 2
description: API reference for zt-gantt chart.
---

# Date Methods

## Format Date To String {#formatDateToString}

formateDateToString is for formatting date in required format.

```js title="formatDateToString"
ztGantt.formatDateToString(format, date);
```

Here `format` is the format in which we want the date and `date` is the date which we want to format.

While specifying the format for dates you can use any character from the following list:

- **%y** - the year as a two-digit number (00 to 99);

- **%Y** - the year as a four-digit number (1900-9999);

- **%m** - the month as a number with a leading zero (01 to 12);

- **%n** - the month as a number without a leading zero (1 to 12);

- **%M** - the month as an abbreviation (Jan to Dec);

- **%F** - the month as a full name (January to December);

- **%W** - the week number of the year. Weeks start on Monday;

- **%d** - the day as a number with a leading zero (01 to 31);

- **%j** - the day as a number without a leading zero (1 to 31);

- **%D** - the day as an abbreviation (Sun to Sat);

- **%l** - the day as a full name (Sunday to Saturday);

- **%h** - the hour based on the 12-hour clock (00 to 11);

- **%H** - the hour based on the 24-hour clock (00 to 23);

- **%g** - the hour based on the 12-hour clock without a leading zero (1 to 12);

- **%G** - the hour based on the 24-hour clock without a leading zero (0 to 23);

- **%i** - the minute as a number with a leading zero (00 to 59);

- **%s** - the second as a number with a leading zero (00 to 59);

- **%a** - displays am (for times from midnight until noon) and pm (for times from noon until midnight);

- **%A** - displays AM (for times from midnight until noon) and PM (for times from noon until midnight).

:::tip Tip
For example, if you want **20th June 2023** as **20/06/2023**, you should specify **"%d/%m/%Y"**.
:::

## Add specific duration to a date

```js title="add"
ztGantt.add(date, number, unit);
```

**date** - (Date) the date object that you need to add a time to/subtract a time from

**number** - (number) the number of units to add. If this number is positive - the time will be added to the date, if negative - the time will be subtracted

**unit** - (string) the time unit. Values: 'minute', 'hour', 'day', 'week', 'month', 'year'.

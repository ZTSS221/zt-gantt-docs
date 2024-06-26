---
sidebar_position: 4
description: API reference for zt-gantt chart.
---

# Marker

## Add Custom Marker

Method to add custom marker

```js title="addMarker"
const marker = {
  start_date: gantt.add(new Date(), 1, "day"), //a Date object that sets the marker's date
  css: "tomorrow", //a CSS class applied to the marker
  text: "Tomorrow", //the marker title
  title: gantt.formatDateToString("%d %M %y", gantt.add(new Date(), 1, "day")),
};

ztGantt.addMarker(marker);
```

**start_date** is the start date of the marker
**css** is the classes applied to the marker it could be multiple separated by space
**text** is the text added to the marker
**title** is the title added to the marker

## Add Today Flag

Method to add a today flag to the gantt

```js title="addTodayFlag"
ztGantt.addTodayFlag();
```

## Remove Today Flag

Method to remove today flag

```js title="removeTodayFlag"
ztGantt.removeTodayFlag();
```

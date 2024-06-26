---
sidebar_position: 3
---

# Create a Gantt Chart

To create a basic **Gantt Chart**, follow these steps:

## Include Library Files

Add the necessary JavaScript and CSS files to your HTML or project:

```html title="1. Include Library Files"
<script src="zt-gantt.js"></script>
<link rel="stylesheet" href="zt-gantt.css" type="text/css" />
```

## Define Container Element

Insert a div element as the container for your Gantt chart:

```html title="2. Insert the element"
<div id="gantt_here"></div>
```

## Initialize and Configure the Gantt Chart

Use JavaScript to initialize the Gantt chart, configure options, templates, columns, data, scales, and links:

```js title="3. Invoke the Gantt Chart Library"
let element = document.getElementById("gantt_here");
const options = {
  // check the options page
};

const teplates = {
  // check the templates page
};

let gantt = new ztGantt(element, options, templates);

ztGantt.options.columns = [
  {
    name: "text",
    width: 245,
    min_width: 80,
    max_width: 300,
    tree: true,
    label: "Name",
    resize: true,
    template: (task) => {
      return `<span>${task.parent == 0 ? task.text : task.subject}</span>`;
    },
  },
  // Add more columns as needed
];

ztGantt.options.data = [
  { id: 1, text: "Project 1", parent: 0, progress: 50 },
  {
    id: 2,
    text: "Task #1",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 1,
    progress: 60,
  },
  // Add more tasks and subtasks
];

ztGantt.options.scales = [
  {
    unit: "week",
    step: 1,
    format: (t) => {
      return "%d %F";
    },
  },
  {
    unit: "day",
    step: 1,
    format: "%d %D",
  },
  // Define more scales if necessary
];

ztGantt.options.links = [
  { id: 1, source: 1, target: 2, type: 0 },
  { id: 2, source: 2, target: 3, type: 1 },
  // Define task dependencies (links) as needed
];

ztGantt.render();
```

**Note:** Remember to call `ztGantt.render();` whenever you wish to visualize the updated data.

[Live demo](https://zehntech.github.io/zt-gantt/)

---
sidebar_position: 3
---

# Create Chart

To create a basic **Gantt Chart**, follow these steps:

```html title="1. Add files"
<script src="gantt.js"></script>
<link rel="stylesheet" href="gantt.css" type="text/css" />
```

```html title="2. Insert the markup"
<div id="gantt_here" style="width:100%; height:100vh;"></div>
```

```js title="3. Invoke the Gantt Chart Library using JavaScript, targeting the container element, and define your tasks, dependencies, and duration."
let element = document.getElementById("gantt_here");
const options = {
  // check the options page
}

const teplates = {
  // check the templates page
}

let gantt = new ztGantt(element, options, templates);

gantt.options.columns = [
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
 ...
];

gantt.options.data = [
  { id: 1, text: "Project 1", parent: 0, progress: 50 },
  {
    id: 2,
    text: "Task #1",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 1,
    progress: 60,
  },
  ...
];

gantt.options.scales = [
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
];

gantt.options.links = [
  { id: 1, source: 1, target: 2, type: 0 },
  { id: 2, source: 2, target: 3, type: 1 },
  { id: 3, source: 3, target: 4, type: 2 },
  { id: 4, source: 12, target: 15, type: 3 },
];

gantt.render();
```

**Note:** Remember to call `gantt.render();` whenever you wish to visualize the updated data.

[Live demo](https://zehntech.github.io/zt-gantt/)

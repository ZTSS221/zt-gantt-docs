---
sidebar_position: 5
---

# Options

The **ztGantt Library** provides various configuration options to tailor the chart to your specific requirements. You can customize the chart's timeline, task bars, labels, colors, and more.

## date_format

Format of the date you passed in data

```js title="date_format"
ztGantt.options.date_format = "%m-%d-%Y";
```

## localLang

Set the language as per your requirements, By default language is English `en`.

```js title="localLang"
ztGantt.options.localLang = "en"; // default is en
```

## startDate and endDate

`startDate` and `endDate` are date of the gantt range.

```js title="startDate and endDate"
ztGantt.options.startDate = "2023-05-01T11:46:17.775Z";
ztGantt.options.endDate = "2023-06-10T11:46:17.775Z";
```

## columns

Columns of the left sidebar

```js title="columns" showLineNumbers
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

    editor: textEditor,
  },

  {
    name: "estimated_hours",
    width: 100,
    min_width: 80,

    tree: false,

    align: "center",

    label: "Planned Hour",

    resize: true,

    template: (task) => {
      return `<span>${task.estimated_hours || ""} </span>`;
    },
  },
];
```

**name** is name of the column present in the data.
**width** is the actual width of that column.
**min_width** is the minimum width of that column.
**max_width** is the maximum width of that column.
**tree** is the boolean for that column should become tree or not.
**label** is the header label of that column.
**resize** is for the column should be resizable or not.
**template** is a function that return the html string which will displayed in column row.
**editor** is for enabling inline editing, if you want to edit any column inline the pass editor config in the column object.

**Editors** can be of four types:

```js title="editor"
const textEditor = {type: "text", map_to: "text"};
const dateEditor = {type: "date", map_to: "start_date", min: new Date(2018, 0, 1), max: new Date(2019, 0, 1)};
const numberEditor = {type: "number", map_to: "progress", min:0, max: 100};
const selectEditor = {type: "select", map_to: "priority", options ["Low","Medium","High"]};
```

## rightGrid

Columns for the right sidebar, it is optional.

```js titl="rightGrid"
ztGantt.options.rightGrid = [
  {
    name: "estimated_hours",
    label: "Total",
    width: 100,
    align: "center",
    resize: true,
    template: function (task) {
      var totalHours = 0;
      return `<b>${task.estimated_hours}</b>`;
    },
  },
  {
    name: "Stats",
    width: 100,
    label: "Stats",
    align: "center",
    resize: true,
    template: function (task) {
      return `<b>${task.estimated_hours}</b>`;
    },
  },
];
```

## taskColor

To enable custom color box for all tasks, by default it is `false`

It can be a `function` or `boolean` type

```js title="taskColor"
ztGantt.options.taskColor = true;
Or;
ztGantt.options.taskColor = (task) => {
  if (task.parent === 0) {
    return false;
  }
  return true;
};
```

## taskOpacity

You can customize the opacity of the task color with the help of task opacity

```js title="taskOpacity"
ztGantt.options.taskOpacity = 0.7;
```

## data

The task data of projects,
You can create the nested task by assigning parent the child task parent will be the parent task id.

```js title="data" showLineNumbers
ztGantt.options.data = [
  { id: 1, text: "Project 1", parent: 0, progress: 50, taskColor: "#56a4fdf2" },

  {
    id: 2,
    text: "Task #1",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 1,
    progress: 60,
    taskColor: "#56a4fdf2",
  },

  {
    id: 3,
    text: "Task #2",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 1,
    progress: 30,
    taskColor: "#56a4fdf2",
  },

  {
    id: 5,
    text: "SubTask #1",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 3,
    progress: 10,
    taskColor: "#56a4fdf2",
  },

  {
    id: 6,
    text: "SubTask #2",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 3,
    progress: 80,
    taskColor: "#56a4fdf2",
  },

  {
    id: 12,
    text: "Final Milestone",
    start_date: "06-17-2023",
    end_date: "06-17-2023",
    parent: 8,
    type: "milestone",
    taskColor: "#56a4fdf2",
  },

  {
    id: 7,
    text: "SubTask #3",
    start_date: "05-05-2023",
    end_date: "05-05-2023",
    parent: 3,
    progress: 45,
    taskColor: "#56a4fdf2",
  },

  { id: 4, text: "Task #3", parent: 1, progress: 15, taskColor: "#56a4fdf2" },

  { id: 8, text: "Project 2", parent: 0, progress: 55, taskColor: "#56a4fdf2" },

  { id: 9, text: "Project 3", parent: 0, progress: 65, taskColor: "#56a4fdf2" },

  {
    id: 10,
    text: "Project 4",
    parent: 0,
    progress: 75,
    taskColor: "#56a4fdf2",
  },

  { id: 11, text: "Project 5", progress: 100, taskColor: "#56a4fdf2" },

  {
    id: 13,
    text: "Next Milestone",
    start_date: "06-17-2023",
    end_date: "06-17-2023",
    parent: 8,
    type: "milestone",
    taskColor: "#56a4fdf2",
  },
];
```

**id** is the task id.

:::info Note
**id** should be unique for every task.
:::

**text** is the text for displaying text of task.

**parent** is the id of the parent task, if task is at top level then parent is 0.

**start_date** is the start date of the task,

**end_date** is the end date of the task,

**progress** is the percentage of task completion,

**type** is the type of the task, it can be milestone or task

**taskColor** is the color of the taskbar

## taskProgress

To enable progress in taskbar.
type `boolean`, by default it is `false`

```js title="taskProgress"
ztGant.options.taskProgress = true; // default is false
```

## scales

Scales array of the timeline

```js title="scales"
ztGant.options.scales = [
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
```

**unit** is the unit of the scale column in which format you want the scale, here are 6 types of units: -

1. hour,
2. day,
3. week,
4. month,
5. quarter,
6. year

**step** is the number of steps you want to include in the column.

**format** it can be a `string` or `function` which return the `string` which is the format of the date

## zoomLevel

To change the zoom level of the gantt timeline

```js title="zoomLevel"
ztGant.options.zoomLevel = "day";
```

Here are 6 levels :-

1. hour,
2. day,
3. week,
4. month,
5. quarter,
6. year

## zoomConfig

The configuration for different levels of zoom

```js title="zoomConfig" showLineNumbers
ztGant.options.zoomConfig = {
  levels: [
    {
      name: "day",
      scale_height: 27,
      min_col_width: 80,
      scales: [{ unit: "day", step: 1, format: "%d %M" }],
    },
    {
      name: "week",
      scale_height: 50,
      min_col_width: 50,
      scales: [
        {
          unit: "week",
          step: 1,
          format: function (date) {
            var dateToStr = gantt.formatDateToString("%d %M");
            var endDate = gantt.add(date, 6, "day");
            var weekNum = gantt.formatDateToString("%W", date);
            return (
              "#" +
              weekNum +
              ", " +
              gantt.formatDateToString("%d %M", date) +
              " - " +
              gantt.formatDateToString("%d %M", endDate)
            );
          },
        },
        { unit: "day", step: 1, format: "%j %D" },
      ],
    },
    {
      name: "month",
      scale_height: 50,
      min_col_width: 120,
      scales: [
        { unit: "month", format: "%F, %Y" },
        { unit: "week", format: "Week #%W" },
      ],
    },
    {
      name: "quarter",
      scale_height: 50,
      min_col_width: 90,
      scales: [
        { unit: "month", format: "%F, %Y" },
        { unit: "week", format: "Week #%W" },
      ],
    },
    {
      name: "year",
      scale_height: 50,
      min_col_width: 30,
      scales: [{ unit: "year", step: 1, format: "%Y" }],
    },
  ],
};
```

**name** is name of zoom level.

**scale_hight** is hight of scale for the zoom level.

**min_col_width** is min column width for the zoom level.

**scales** is the scales for the zoom level.

After setting zoomLevel and zoomConfig run `ztGantt.zoomInit()` for applying your current zoom level

## addLinks

To show task relation through links in the Gantt  
type `boolean` or can be a `function` which return `boolean`, by default it is `false`.

```js title="addLinks"
ztGantt.options.addLinks = true;
Or;
ztGantt.options.addLinks = (task) => {
  if (task.parent === 0) {
    return false;
  }
  return true;
};
```

## links

Task relations links array  
type `Array`

```js title="links"
ztGantt.options.links = [
  { id: 1, source: 1, target: 2, type: 0 },
  { id: 2, source: 2, target: 3, type: 1 },
  { id: 3, source: 3, target: 4, type: 2 },
  { id: 4, source: 12, target: 15, type: 3 },
];
```

**source** is source id

**target** is target id

**type** is type of link

Links types can be of 4 types

- **0** is finish_to_start
- **1** is start_to_start
- **2** is finish_to_finish
- **3** is start_to_finish

By default, the link type is 0

## collapse

To make the tree initially collapse or open

type `boolean`, by default it is `true`.

```js title="collapse"
ztGantt.options.collapse = false; // default is true
```

## fullWeek

Show the full week or workdays.

type `boolean`, by default it is `true`.

```js title="fullWeek"
ztGantt.options.fullWeek = false; // default is true
```

## todayMarker

It adds a vertical marker at today’s date column.

type `boolean`, by default it is `true`.

```js title="todayMarker"
ztGantt.options.todayMarker = false; // default is true
```

## weekends

type `Array`, array of strings "Sat", "Sun", to set the weekends dynamically.

```js title="weekends"
ztGantt.options.weekends = ["Sat", "Sun"];
```

## weekStart

type `number`, it set the start of the week, by default it is set to 1 means "Monday".

```js title="weekStart"
ztGantt.options.weekStart = 0; // default is 1
```

:::info
You can pass weekStart from 0 to 6.
:::

## scale_height

To set the height of the scale. You can pass the number value which will apply to all scales or you can pass the Array for different height for different scales respectively.

type `number` or `Array`, 30 || [20, 30], set the height of scales, by default, it is 30.

```js title="scale_height"
ztGantt.options.scale_height = [20, 30]; // default is 30
```

## row_height

To set the height of the row.

type `number`, by default it is 50

```js title="row_height"
ztGantt.options.row_height = 60; // default is 50
```

## updateLinkOnDrag

To update the links position live make it true or false if you want to update links positions after task drop it will improve performance if there are many links in the Gantt chart.

By default, it is `true`

```js title="updateLinkOnDrag"
ztGantt.options.updateLinkOnDrag = false; // default is true
```

## selectAreaOnDrag

For selecting start and end range through draging.

type: `boolean`, by default it is `false`.

```js title="selectAreaOnDrag"
ztGantt.options.selectAreaOnDrag = true; // default is false
```

## mouseScroll

With ztGantt, users can efficiently navigate the timeline by clicking and dragging with the mouse, enabling seamless scrolling.
By default it is `false`

```js title="mouseScroll"
ztGantt.options.mouseScroll = true; // default is false
```

## ctrlKeyRequiredForMouseScroll

Determines whether the Ctrl key must be pressed for mouse scrolling functionality.
By default it is `true`

```js title="ctrlKeyRequiredForMouseScroll"
ztGantt.options.ctrlKeyRequiredForMouseScroll = true; // default is false
```

## sort

ztGantt offers the capability to sort data within the grid columns on the client side. This functionality can be achieved through two distinct methods:

I. To enable sorting within the Gantt chart, simply set the `sort` property to `true`:

```js title="sort"
ztGantt.options.sort = true; // default is false
```

II. To initiate sorting within the grid based on a specific action or event, such as a button click or page load, simply invoke the sort method.

```html
<button type="button" onclick='gantt.sort("text",true);'>
  Sort Name Column
</button>
```

here **text** is the column field name on that basis data will be sorted, and second parameter `true` is `boolean` which is sorting order asc or desc.

## splitTask

To display a project as a split task.

type `boolean`, by default it is `false`.

```js title="splitTask"
ztGantt.options.splitTask = true; // default is false
```

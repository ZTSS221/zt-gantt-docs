---
sidebar_position: 7
---

# Events

The **Events** option in the **ztGantt library** offers a comprehensive framework for managing interactions within the Gantt chart. By attaching events to the ztGantt library, users can set up and customize handlers for key actions such as task creation, updates, deletions, and various user interactions. This allows developers to tailor specific responses to user actions, ensuring the Gantt chart's behavior aligns with project management workflows and requirements. The Events option significantly enhances the chart's interactivity and responsiveness, providing a seamless and intuitive user experience.

## On Task DblClick

Triggered when Double clicked on the task

```js title="onTaskDblClick"
ztGantt.attachEvent("onTaskDblClick", (event) => {
  console.log("onTaskDblClick: ", event);
});
```

## On Link DblClick

Triggered when Double clicked on the link

```js title="onLinkDblClick"
ztGantt.attachEvent("onLinkDblClick", (event) => {
  console.log("onLinkDblClick: ", event);
});
```

## On Before Link Add

Triggered before the link added

```js title="onBeforeLinkAdd"
ztGantt.attachEvent("onBeforeLinkAdd", (event) => {
  console.log("onBeforeLinkAdd: ", event);
});
```

## On Link Add

Triggered when link added

```js title="onLinkAdd"
ztGantt.attachEvent("onLinkAdd", (event) => {
  console.log("onLinkAdd: ", event);
});
```

## On Delete Link

Triggered when link deleted

```js title="onDeleteLink"
ztGantt.attachEvent("onDeleteLink", (event) => {
  console.log("onDeleteLink: ", event);
});
```

## On Before Task Drag

Triggered before the task dragging

```js title="onBeforeTaskDrag"
ztGantt.attachEvent("onBeforeTaskDrag", (event) => {
  console.log("onBeforeTaskDrag: ", event);
  if (event.task.children.length !== 0) {
    return false;
  } else {
    return true;
  }
});
```

:::info Note
return `flase` if you don't want to let the task drag.
:::

## On Task Drag

Triggered on the dragging of the task

```js title="onTaskDrag"
ztGantt.attachEvent("onTaskDrag", (event) => {
  console.log("onTaskDrag: ", event);
});
```

## On Before Task Drop

Triggered before task drop

```js title="onBeforeTaskDrop"
ztGantt.attachEvent("onBeforeTaskDrop", (event) => {
  console.log("onBeforeTaskDrop: ", event);

  if (event.parentTask.id == 12) {
    return false;
  }
});
```

:::info Note
return `flase` if you don't want to let the task drop at the current position.
:::

## On After Task Drag

Triggered after the dragging of the task

```js title="onAfterTaskDrag"
ztGantt.attachEvent("onAfterTaskDrag", (event) => {
  console.log("onAfterTaskDrag: ", event);
});
```

## On Task Delete

Triggered when the task deleted

```js title="onTaskDelete"
ztGantt.attachEvent("onTaskDelete", (event) => {
  console.log("onTaskDelete: ", event);
});
```

## On After Task Update

Triggered after the task updated

```js title="onTaskDelete"
ztGantt.attachEvent("onAfterTaskUpdate", (event) => {
  console.log("onAfterTaskUpdate: ", event);
});
```

## On Scroll

Triggered when you scroll gantt

```js title="onScroll"
ztGantt.attachEvent("onScroll", (event) => {
  console.log("onScroll: ", event);
});
```

## On Resize

Triggered on window resize

```js title="onResize"
ztGantt.attachEvent("onResize", (event) => {
  console.log("onResize: ", event);
});
```

## On Timeline cell click

Triggered when clicked on the timeline cell

```js title="onCellClick"
ztGantt.attachEvent("onCellClick", (event) => {
  console.log("onCellClick: ", event);
});
```

## On Request FullScreen

Triggered when requested Fullscreen

```js title="onRequestFullScreen"
ztGantt.attachEvent("onRequestFullScreen", (event) => {
  console.log("onRequestFullScreen: ", event);
});
```

## On Exit FullScreen

Triggered when exited Fullscreen

```js title="onExitFullScreen"
ztGantt.attachEvent("onExitFullScreen", (event) => {
  console.log("onExitFullScreen: ", event);
});
```

## On Task Tree Toggle

Triggered when task tree toggled

```js title="onTaskToggle"
ztGantt.attachEvent("onTaskToggle", (event) => {
  console.log("onTaskToggle: ", event);
});
```

## On Taskbar Color Change

Triggered on taskbar color change

```js title="onColorChange"
ztGantt.attachEvent("onColorChange", (event) => {
  console.log("onColorChange: ", event);
});
```

## On Select date range on drag

Select the start & end date through Drag

```js title="selectAreaOnDrag"
ztGantt.attachEvent("selectAreaOnDrag", (event) => {
  console.log("selectAreaOnDrag: ", event);
});
```

## On After Progress Drag

Triggered after task progress drag

```js title="onAfterProgressDrag"
ztGantt.attachEvent("onAfterProgressDrag", (event) => {
  console.log("onAfterProgressDrag: ", event);
});
```

## On Before Progress Drag

Triggered before task progress drag

```js title="onBeforeProgressDrag"
ztGantt.attachEvent("onBeforeProgressDrag", (event) => {
  console.log("onBeforeProgressDrag: ", event);

  if (event.task.parent === 0) {
    return false;
  } else {
    return true;
  }
});
```

:::info Note
return `flase` if you don't want to let the task progress drag.
:::

"use strict";(self.webpackChunkzt_gantt_docs=self.webpackChunkzt_gantt_docs||[]).push([[883],{3111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const a={sidebar_position:5},r="Options",l={id:"options",title:"Options",description:"The ztGantt Library provides various configuration options to tailor the chart to your specific requirements. You can customize the chart's timeline, task bars, labels, colors, and more.",source:"@site/docs/options.md",sourceDirName:".",slug:"/options",permalink:"/docs/options",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Templates",permalink:"/docs/templates"}},o={},d=[{value:"date_format",id:"date_format",level:2},{value:"localLang",id:"locallang",level:2},{value:"startDate and endDate",id:"startdate-and-enddate",level:2},{value:"columns",id:"columns",level:2},{value:"rightGrid",id:"rightgrid",level:2},{value:"taskColor",id:"taskcolor",level:2},{value:"taskOpacity",id:"taskopacity",level:2},{value:"data",id:"data",level:2},{value:"taskProgress",id:"taskprogress",level:2},{value:"scales",id:"scales",level:2},{value:"zoomLevel",id:"zoomlevel",level:2},{value:"zoomConfig",id:"zoomconfig",level:2},{value:"addLinks",id:"addlinks",level:2},{value:"links",id:"links",level:2},{value:"collapse",id:"collapse",level:2},{value:"fullWeek",id:"fullweek",level:2},{value:"todayMarker",id:"todaymarker",level:2},{value:"weekends",id:"weekends",level:2},{value:"weekStart",id:"weekstart",level:2},{value:"scale_height",id:"scale_height",level:2},{value:"row_height",id:"row_height",level:2},{value:"updateLinkOnDrag",id:"updatelinkondrag",level:2},{value:"selectAreaOnDrag",id:"selectareaondrag",level:2},{value:"mouseScroll",id:"mousescroll",level:2},{value:"ctrlKeyRequiredForMouseScroll",id:"ctrlkeyrequiredformousescroll",level:2},{value:"sort",id:"sort",level:2},{value:"splitTask",id:"splittask",level:2}];function c(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ztGantt Library"})," provides various configuration options to tailor the chart to your specific requirements. You can customize the chart's timeline, task bars, labels, colors, and more."]}),"\n",(0,s.jsx)(n.h2,{id:"date_format",children:"date_format"}),"\n",(0,s.jsx)(n.p,{children:"Format of the date you passed in data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="date_format"',children:'ztGantt.options.date_format = "%m-%d-%Y";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"locallang",children:"localLang"}),"\n",(0,s.jsxs)(n.p,{children:["Set the language as per your requirements, By default language is English ",(0,s.jsx)(n.code,{children:"en"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="localLang"',children:'ztGantt.options.localLang = "en"; // default is en\n'})}),"\n",(0,s.jsx)(n.h2,{id:"startdate-and-enddate",children:"startDate and endDate"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"startDate"})," and ",(0,s.jsx)(n.code,{children:"endDate"})," are date of the gantt range."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="startDate and endDate"',children:'ztGantt.options.startDate = "2023-05-01T11:46:17.775Z";\nztGantt.options.endDate = "2023-06-10T11:46:17.775Z";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"columns",children:"columns"}),"\n",(0,s.jsx)(n.p,{children:"Columns of the left sidebar"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="columns" showLineNumbers',children:'ztGantt.options.columns = [\n  {\n    name: "text",\n    width: 245,\n\n    min_width: 80,\n\n    max_width: 300,\n\n    tree: true,\n\n    label: "Name",\n\n    resize: true,\n\n    template: (task) => {\n      return `<span>${task.parent == 0 ? task.text : task.subject}</span>`;\n    },\n\n    editor: textEditor,\n  },\n\n  {\n    name: "estimated_hours",\n    width: 100,\n    min_width: 80,\n\n    tree: false,\n\n    align: "center",\n\n    label: "Planned Hour",\n\n    resize: true,\n\n    template: (task) => {\n      return `<span>${task.estimated_hours || ""} </span>`;\n    },\n  },\n];\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"})," is name of the column present in the data.\n",(0,s.jsx)(n.strong,{children:"width"})," is the actual width of that column.\n",(0,s.jsx)(n.strong,{children:"min_width"})," is the minimum width of that column.\n",(0,s.jsx)(n.strong,{children:"max_width"})," is the maximum width of that column.\n",(0,s.jsx)(n.strong,{children:"tree"})," is the boolean for that column should become tree or not.\n",(0,s.jsx)(n.strong,{children:"label"})," is the header label of that column.\n",(0,s.jsx)(n.strong,{children:"resize"})," is for the column should be resizable or not.\n",(0,s.jsx)(n.strong,{children:"template"})," is a function that return the html string which will displayed in column row.\n",(0,s.jsx)(n.strong,{children:"editor"})," is for enabling inline editing, if you want to edit any column inline the pass editor config in the column object."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Editors"})," can be of four types:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="editor"',children:'const textEditor = {type: "text", map_to: "text"};\nconst dateEditor = {type: "date", map_to: "start_date", min: new Date(2018, 0, 1), max: new Date(2019, 0, 1)};\nconst numberEditor = {type: "number", map_to: "progress", min:0, max: 100};\nconst selectEditor = {type: "select", map_to: "priority", options ["Low","Medium","High"]};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"rightgrid",children:"rightGrid"}),"\n",(0,s.jsx)(n.p,{children:"Columns for the right sidebar, it is optional."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'titl="rightGrid"',children:'ztGantt.options.rightGrid = [\n  {\n    name: "estimated_hours",\n    label: "Total",\n    width: 100,\n    align: "center",\n    resize: true,\n    template: function (task) {\n      var totalHours = 0;\n      return `<b>${task.estimated_hours}</b>`;\n    },\n  },\n  {\n    name: "Stats",\n    width: 100,\n    label: "Stats",\n    align: "center",\n    resize: true,\n    template: function (task) {\n      return `<b>${task.estimated_hours}</b>`;\n    },\n  },\n];\n'})}),"\n",(0,s.jsx)(n.h2,{id:"taskcolor",children:"taskColor"}),"\n",(0,s.jsxs)(n.p,{children:["To enable custom color box for all tasks, by default it is ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["It can be a ",(0,s.jsx)(n.code,{children:"function"})," or ",(0,s.jsx)(n.code,{children:"boolean"})," type"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="taskColor"',children:"ztGantt.options.taskColor = true;\nOr;\nztGantt.options.taskColor = (task) => {\n  if (task.parent === 0) {\n    return false;\n  }\n  return true;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"taskopacity",children:"taskOpacity"}),"\n",(0,s.jsx)(n.p,{children:"You can customize the opacity of the task color with the help of task opacity"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="taskOpacity"',children:"ztGantt.options.taskOpacity = 0.7;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data",children:"data"}),"\n",(0,s.jsx)(n.p,{children:"The task data of projects,\nYou can create the nested task by assigning parent the child task parent will be the parent task id."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="data" showLineNumbers',children:'ztGantt.options.data = [\n  { id: 1, text: "Project 1", parent: 0, progress: 50, taskColor: "#56a4fdf2" },\n\n  {\n    id: 2,\n    text: "Task #1",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 1,\n    progress: 60,\n    taskColor: "#56a4fdf2",\n  },\n\n  {\n    id: 3,\n    text: "Task #2",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 1,\n    progress: 30,\n    taskColor: "#56a4fdf2",\n  },\n\n  {\n    id: 5,\n    text: "SubTask #1",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 3,\n    progress: 10,\n    taskColor: "#56a4fdf2",\n  },\n\n  {\n    id: 6,\n    text: "SubTask #2",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 3,\n    progress: 80,\n    taskColor: "#56a4fdf2",\n  },\n\n  {\n    id: 12,\n    text: "Final Milestone",\n    start_date: "06-17-2023",\n    end_date: "06-17-2023",\n    parent: 8,\n    type: "milestone",\n    taskColor: "#56a4fdf2",\n  },\n\n  {\n    id: 7,\n    text: "SubTask #3",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 3,\n    progress: 45,\n    taskColor: "#56a4fdf2",\n  },\n\n  { id: 4, text: "Task #3", parent: 1, progress: 15, taskColor: "#56a4fdf2" },\n\n  { id: 8, text: "Project 2", parent: 0, progress: 55, taskColor: "#56a4fdf2" },\n\n  { id: 9, text: "Project 3", parent: 0, progress: 65, taskColor: "#56a4fdf2" },\n\n  {\n    id: 10,\n    text: "Project 4",\n    parent: 0,\n    progress: 75,\n    taskColor: "#56a4fdf2",\n  },\n\n  { id: 11, text: "Project 5", progress: 100, taskColor: "#56a4fdf2" },\n\n  {\n    id: 13,\n    text: "Next Milestone",\n    start_date: "06-17-2023",\n    end_date: "06-17-2023",\n    parent: 8,\n    type: "milestone",\n    taskColor: "#56a4fdf2",\n  },\n];\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"id"})," is the task id."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"id"})," should be unique for every task."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"text"})," is the text for displaying text of task."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parent"})," is the id of the parent task, if task is at top level then parent is 0."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"start_date"})," is the start date of the task,"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"end_date"})," is the end date of the task,"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"progress"})," is the percentage of task completion,"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type"})," is the type of the task, it can be milestone or task"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"taskColor"})," is the color of the taskbar"]}),"\n",(0,s.jsx)(n.h2,{id:"taskprogress",children:"taskProgress"}),"\n",(0,s.jsxs)(n.p,{children:["To enable progress in taskbar.\ntype ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="taskProgress"',children:"ztGant.options.taskProgress = true; // default is false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"scales",children:"scales"}),"\n",(0,s.jsx)(n.p,{children:"Scales array of the timeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="scales"',children:'ztGant.options.scales = [\n  {\n    unit: "week",\n    step: 1,\n    format: (t) => {\n      return "%d %F";\n    },\n  },\n  {\n    unit: "day",\n    step: 1,\n    format: "%d %D",\n  },\n];\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unit"})," is the unit of the scale column in which format you want the scale, here are 6 types of units: -"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"hour,"}),"\n",(0,s.jsx)(n.li,{children:"day,"}),"\n",(0,s.jsx)(n.li,{children:"week,"}),"\n",(0,s.jsx)(n.li,{children:"month,"}),"\n",(0,s.jsx)(n.li,{children:"quarter,"}),"\n",(0,s.jsx)(n.li,{children:"year"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"step"})," is the number of steps you want to include in the column."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"format"})," it can be a ",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"function"})," which return the ",(0,s.jsx)(n.code,{children:"string"})," which is the format of the date"]}),"\n",(0,s.jsx)(n.h2,{id:"zoomlevel",children:"zoomLevel"}),"\n",(0,s.jsx)(n.p,{children:"To change the zoom level of the gantt timeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="zoomLevel"',children:'ztGant.options.zoomLevel = "day";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here are 6 levels :-"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"hour,"}),"\n",(0,s.jsx)(n.li,{children:"day,"}),"\n",(0,s.jsx)(n.li,{children:"week,"}),"\n",(0,s.jsx)(n.li,{children:"month,"}),"\n",(0,s.jsx)(n.li,{children:"quarter,"}),"\n",(0,s.jsx)(n.li,{children:"year"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"zoomconfig",children:"zoomConfig"}),"\n",(0,s.jsx)(n.p,{children:"The configuration for different levels of zoom"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="zoomConfig" showLineNumbers',children:'ztGant.options.zoomConfig = {\n  levels: [\n    {\n      name: "day",\n      scale_height: 27,\n      min_col_width: 80,\n      scales: [{ unit: "day", step: 1, format: "%d %M" }],\n    },\n    {\n      name: "week",\n      scale_height: 50,\n      min_col_width: 50,\n      scales: [\n        {\n          unit: "week",\n          step: 1,\n          format: function (date) {\n            var dateToStr = gantt.formatDateToString("%d %M");\n            var endDate = gantt.add(date, 6, "day");\n            var weekNum = gantt.formatDateToString("%W", date);\n            return (\n              "#" +\n              weekNum +\n              ", " +\n              gantt.formatDateToString("%d %M", date) +\n              " - " +\n              gantt.formatDateToString("%d %M", endDate)\n            );\n          },\n        },\n        { unit: "day", step: 1, format: "%j %D" },\n      ],\n    },\n    {\n      name: "month",\n      scale_height: 50,\n      min_col_width: 120,\n      scales: [\n        { unit: "month", format: "%F, %Y" },\n        { unit: "week", format: "Week #%W" },\n      ],\n    },\n    {\n      name: "quarter",\n      scale_height: 50,\n      min_col_width: 90,\n      scales: [\n        { unit: "month", format: "%F, %Y" },\n        { unit: "week", format: "Week #%W" },\n      ],\n    },\n    {\n      name: "year",\n      scale_height: 50,\n      min_col_width: 30,\n      scales: [{ unit: "year", step: 1, format: "%Y" }],\n    },\n  ],\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"})," is name of zoom level."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"scale_hight"})," is hight of scale for the zoom level."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"min_col_width"})," is min column width for the zoom level."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"scales"})," is the scales for the zoom level."]}),"\n",(0,s.jsxs)(n.p,{children:["After setting zoomLevel and zoomConfig run ",(0,s.jsx)(n.code,{children:"ztGantt.zoomInit()"})," for applying your current zoom level"]}),"\n",(0,s.jsx)(n.h2,{id:"addlinks",children:"addLinks"}),"\n",(0,s.jsxs)(n.p,{children:["To show task relation through links in the Gantt",(0,s.jsx)(n.br,{}),"\n","type ",(0,s.jsx)(n.code,{children:"boolean"})," or can be a ",(0,s.jsx)(n.code,{children:"function"})," which return ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="addLinks"',children:"ztGantt.options.addLinks = true;\nOr;\nztGantt.options.addLinks = (task) => {\n  if (task.parent === 0) {\n    return false;\n  }\n  return true;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"links"}),"\n",(0,s.jsxs)(n.p,{children:["Task relations links array",(0,s.jsx)(n.br,{}),"\n","type ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="links"',children:"ztGantt.options.links = [\n  { id: 1, source: 1, target: 2, type: 0 },\n  { id: 2, source: 2, target: 3, type: 1 },\n  { id: 3, source: 3, target: 4, type: 2 },\n  { id: 4, source: 12, target: 15, type: 3 },\n];\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"source"})," is source id"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"target"})," is target id"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"type"})," is type of link"]}),"\n",(0,s.jsx)(n.p,{children:"Links types can be of 4 types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"0"})," is finish_to_start"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1"})," is start_to_start"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2"})," is finish_to_finish"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"3"})," is start_to_finish"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, the link type is 0"}),"\n",(0,s.jsx)(n.h2,{id:"collapse",children:"collapse"}),"\n",(0,s.jsx)(n.p,{children:"To make the tree initially collapse or open"}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="collapse"',children:"ztGantt.options.collapse = false; // default is true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"fullweek",children:"fullWeek"}),"\n",(0,s.jsx)(n.p,{children:"Show the full week or workdays."}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="fullWeek"',children:"ztGantt.options.fullWeek = false; // default is true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"todaymarker",children:"todayMarker"}),"\n",(0,s.jsx)(n.p,{children:"It adds a vertical marker at today\u2019s date column."}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="todayMarker"',children:"ztGantt.options.todayMarker = false; // default is true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"weekends",children:"weekends"}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"Array"}),', array of strings "Sat", "Sun", to set the weekends dynamically.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="weekends"',children:'ztGantt.options.weekends = ["Sat", "Sun"];\n'})}),"\n",(0,s.jsx)(n.h2,{id:"weekstart",children:"weekStart"}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"number"}),', it set the start of the week, by default it is set to 1 means "Monday".']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="weekStart"',children:"ztGantt.options.weekStart = 0; // default is 1\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You can pass weekStart from 0 to 6."})}),"\n",(0,s.jsx)(n.h2,{id:"scale_height",children:"scale_height"}),"\n",(0,s.jsx)(n.p,{children:"To set the height of the scale. You can pass the number value which will apply to all scales or you can pass the Array for different height for different scales respectively."}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"number"})," or ",(0,s.jsx)(n.code,{children:"Array"}),", 30 || [20, 30], set the height of scales, by default, it is 30."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="scale_height"',children:"ztGantt.options.scale_height = [20, 30]; // default is 30\n"})}),"\n",(0,s.jsx)(n.h2,{id:"row_height",children:"row_height"}),"\n",(0,s.jsx)(n.p,{children:"To set the height of the row."}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"number"}),", by default it is 50"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="row_height"',children:"ztGantt.options.row_height = 60; // default is 50\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updatelinkondrag",children:"updateLinkOnDrag"}),"\n",(0,s.jsx)(n.p,{children:"To update the links position live make it true or false if you want to update links positions after task drop it will improve performance if there are many links in the Gantt chart."}),"\n",(0,s.jsxs)(n.p,{children:["By default, it is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="updateLinkOnDrag"',children:"ztGantt.options.updateLinkOnDrag = false; // default is true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"selectareaondrag",children:"selectAreaOnDrag"}),"\n",(0,s.jsx)(n.p,{children:"For selecting start and end range through draging."}),"\n",(0,s.jsxs)(n.p,{children:["type: ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="selectAreaOnDrag"',children:"ztGantt.options.selectAreaOnDrag = true; // default is false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mousescroll",children:"mouseScroll"}),"\n",(0,s.jsxs)(n.p,{children:["With ztGantt, users can efficiently navigate the timeline by clicking and dragging with the mouse, enabling seamless scrolling.\nBy default it is ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="mouseScroll"',children:"ztGantt.options.mouseScroll = true; // default is false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ctrlkeyrequiredformousescroll",children:"ctrlKeyRequiredForMouseScroll"}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether the Ctrl key must be pressed for mouse scrolling functionality.\nBy default it is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="ctrlKeyRequiredForMouseScroll"',children:"ztGantt.options.ctrlKeyRequiredForMouseScroll = true; // default is false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sort",children:"sort"}),"\n",(0,s.jsx)(n.p,{children:"ztGantt offers the capability to sort data within the grid columns on the client side. This functionality can be achieved through two distinct methods:"}),"\n",(0,s.jsxs)(n.p,{children:["I. To enable sorting within the Gantt chart, simply set the ",(0,s.jsx)(n.code,{children:"sort"})," property to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sort"',children:"ztGantt.options.sort = true; // default is false\n"})}),"\n",(0,s.jsx)(n.p,{children:"II. To initiate sorting within the grid based on a specific action or event, such as a button click or page load, simply invoke the sort method."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<button type="button" onclick=\'gantt.sort("text",true);\'>\n  Sort Name Column\n</button>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["here ",(0,s.jsx)(n.strong,{children:"text"})," is the column field name on that basis data will be sorted, and second parameter ",(0,s.jsx)(n.code,{children:"true"})," is ",(0,s.jsx)(n.code,{children:"boolean"})," which is sorting order asc or desc."]}),"\n",(0,s.jsx)(n.h2,{id:"splittask",children:"splitTask"}),"\n",(0,s.jsx)(n.p,{children:"To display a project as a split task."}),"\n",(0,s.jsxs)(n.p,{children:["type ",(0,s.jsx)(n.code,{children:"boolean"}),", by default it is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="splitTask"',children:"ztGantt.options.splitTask = true; // default is false\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
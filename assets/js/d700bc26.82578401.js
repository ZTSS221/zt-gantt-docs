"use strict";(self.webpackChunkzt_gantt_docs=self.webpackChunkzt_gantt_docs||[]).push([[349],{5424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const a={sidebar_position:7},l="Events",o={id:"events",title:"Events",description:"The Events option in the ztGantt library offers a comprehensive framework for managing interactions within the Gantt chart. By attaching events to the ztGantt library, users can set up and customize handlers for key actions such as task creation, updates, deletions, and various user interactions. This allows developers to tailor specific responses to user actions, ensuring the Gantt chart's behavior aligns with project management workflows and requirements. The Events option significantly enhances the chart's interactivity and responsiveness, providing a seamless and intuitive user experience.",source:"@site/docs/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/docs/templates"}},i={},c=[{value:"On Task DblClick",id:"on-task-dblclick",level:2},{value:"On Link DblClick",id:"on-link-dblclick",level:2},{value:"On Before Link Add",id:"on-before-link-add",level:2},{value:"On Link Add",id:"on-link-add",level:2},{value:"On Delete Link",id:"on-delete-link",level:2},{value:"On Before Task Drag",id:"on-before-task-drag",level:2},{value:"On Task Drag",id:"on-task-drag",level:2},{value:"On Before Task Drop",id:"on-before-task-drop",level:2},{value:"On After Task Drag",id:"on-after-task-drag",level:2},{value:"On Task Delete",id:"on-task-delete",level:2},{value:"On After Task Update",id:"on-after-task-update",level:2},{value:"On Scroll",id:"on-scroll",level:2},{value:"On Resize",id:"on-resize",level:2},{value:"On Timeline cell click",id:"on-timeline-cell-click",level:2},{value:"On Request FullScreen",id:"on-request-fullscreen",level:2},{value:"On Exit FullScreen",id:"on-exit-fullscreen",level:2},{value:"On Task Tree Toggle",id:"on-task-tree-toggle",level:2},{value:"On Taskbar Color Change",id:"on-taskbar-color-change",level:2},{value:"On Select\xa0date\xa0range\xa0on drag",id:"on-selectdaterangeon-drag",level:2},{value:"On After Progress Drag",id:"on-after-progress-drag",level:2},{value:"On Before Progress Drag",id:"on-before-progress-drag",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Events"})," option in the ",(0,r.jsx)(n.strong,{children:"ztGantt library"})," offers a comprehensive framework for managing interactions within the Gantt chart. By attaching events to the ztGantt library, users can set up and customize handlers for key actions such as task creation, updates, deletions, and various user interactions. This allows developers to tailor specific responses to user actions, ensuring the Gantt chart's behavior aligns with project management workflows and requirements. The Events option significantly enhances the chart's interactivity and responsiveness, providing a seamless and intuitive user experience."]}),"\n",(0,r.jsx)(n.h2,{id:"on-task-dblclick",children:"On Task DblClick"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when Double clicked on the task"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onTaskDblClick"',children:'ztGantt.attachEvent("onTaskDblClick", (event) => {\n  console.log("onTaskDblClick: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-link-dblclick",children:"On Link DblClick"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when Double clicked on the link"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onLinkDblClick"',children:'ztGantt.attachEvent("onLinkDblClick", (event) => {\n  console.log("onLinkDblClick: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-before-link-add",children:"On Before Link Add"}),"\n",(0,r.jsx)(n.p,{children:"Triggered before the link added"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onBeforeLinkAdd"',children:'ztGantt.attachEvent("onBeforeLinkAdd", (event) => {\n  console.log("onBeforeLinkAdd: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-link-add",children:"On Link Add"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when link added"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onLinkAdd"',children:'ztGantt.attachEvent("onLinkAdd", (event) => {\n  console.log("onLinkAdd: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-delete-link",children:"On Delete Link"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when link deleted"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onDeleteLink"',children:'ztGantt.attachEvent("onDeleteLink", (event) => {\n  console.log("onDeleteLink: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-before-task-drag",children:"On Before Task Drag"}),"\n",(0,r.jsx)(n.p,{children:"Triggered before the task dragging"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onBeforeTaskDrag"',children:'ztGantt.attachEvent("onBeforeTaskDrag", (event) => {\n  console.log("onBeforeTaskDrag: ", event);\n  if (event.task.children.length !== 0) {\n    return false;\n  } else {\n    return true;\n  }\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["return ",(0,r.jsx)(n.code,{children:"flase"})," if you don't want to let the task drag."]})}),"\n",(0,r.jsx)(n.h2,{id:"on-task-drag",children:"On Task Drag"}),"\n",(0,r.jsx)(n.p,{children:"Triggered on the dragging of the task"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onTaskDrag"',children:'ztGantt.attachEvent("onTaskDrag", (event) => {\n  console.log("onTaskDrag: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-before-task-drop",children:"On Before Task Drop"}),"\n",(0,r.jsx)(n.p,{children:"Triggered before task drop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onBeforeTaskDrop"',children:'ztGantt.attachEvent("onBeforeTaskDrop", (event) => {\n  console.log("onBeforeTaskDrop: ", event);\n\n  if (event.parentTask.id == 12) {\n    return false;\n  }\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["return ",(0,r.jsx)(n.code,{children:"flase"})," if you don't want to let the task drop at the current position."]})}),"\n",(0,r.jsx)(n.h2,{id:"on-after-task-drag",children:"On After Task Drag"}),"\n",(0,r.jsx)(n.p,{children:"Triggered after the dragging of the task"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onAfterTaskDrag"',children:'ztGantt.attachEvent("onAfterTaskDrag", (event) => {\n  console.log("onAfterTaskDrag: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-task-delete",children:"On Task Delete"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when the task deleted"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onTaskDelete"',children:'ztGantt.attachEvent("onTaskDelete", (event) => {\n  console.log("onTaskDelete: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-after-task-update",children:"On After Task Update"}),"\n",(0,r.jsx)(n.p,{children:"Triggered after the task updated"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onTaskDelete"',children:'ztGantt.attachEvent("onAfterTaskUpdate", (event) => {\n  console.log("onAfterTaskUpdate: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-scroll",children:"On Scroll"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when you scroll gantt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onScroll"',children:'ztGantt.attachEvent("onScroll", (event) => {\n  console.log("onScroll: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-resize",children:"On Resize"}),"\n",(0,r.jsx)(n.p,{children:"Triggered on window resize"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onResize"',children:'ztGantt.attachEvent("onResize", (event) => {\n  console.log("onResize: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-timeline-cell-click",children:"On Timeline cell click"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when clicked on the timeline cell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onCellClick"',children:'ztGantt.attachEvent("onCellClick", (event) => {\n  console.log("onCellClick: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-request-fullscreen",children:"On Request FullScreen"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when requested Fullscreen"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onRequestFullScreen"',children:'ztGantt.attachEvent("onRequestFullScreen", (event) => {\n  console.log("onRequestFullScreen: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-exit-fullscreen",children:"On Exit FullScreen"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when exited Fullscreen"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onExitFullScreen"',children:'ztGantt.attachEvent("onExitFullScreen", (event) => {\n  console.log("onExitFullScreen: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-task-tree-toggle",children:"On Task Tree Toggle"}),"\n",(0,r.jsx)(n.p,{children:"Triggered when task tree toggled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onTaskToggle"',children:'ztGantt.attachEvent("onTaskToggle", (event) => {\n  console.log("onTaskToggle: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-taskbar-color-change",children:"On Taskbar Color Change"}),"\n",(0,r.jsx)(n.p,{children:"Triggered on taskbar color change"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onColorChange"',children:'ztGantt.attachEvent("onColorChange", (event) => {\n  console.log("onColorChange: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-selectdaterangeon-drag",children:"On Select\xa0date\xa0range\xa0on drag"}),"\n",(0,r.jsx)(n.p,{children:"Select the start & end date through Drag"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="selectAreaOnDrag"',children:'ztGantt.attachEvent("selectAreaOnDrag", (event) => {\n  console.log("selectAreaOnDrag: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-after-progress-drag",children:"On After Progress Drag"}),"\n",(0,r.jsx)(n.p,{children:"Triggered after task progress drag"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onAfterProgressDrag"',children:'ztGantt.attachEvent("onAfterProgressDrag", (event) => {\n  console.log("onAfterProgressDrag: ", event);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"on-before-progress-drag",children:"On Before Progress Drag"}),"\n",(0,r.jsx)(n.p,{children:"Triggered before task progress drag"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="onBeforeProgressDrag"',children:'ztGantt.attachEvent("onBeforeProgressDrag", (event) => {\n  console.log("onBeforeProgressDrag: ", event);\n\n  if (event.task.parent === 0) {\n    return false;\n  } else {\n    return true;\n  }\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["return ",(0,r.jsx)(n.code,{children:"flase"})," if you don't want to let the task progress drag."]})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkzt_gantt_docs=self.webpackChunkzt_gantt_docs||[]).push([[660],{3820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(4848),r=n(8453);const s={sidebar_position:3},i="Create a Gantt Chart",o={id:"create-chart",title:"Create a Gantt Chart",description:"To create a basic Gantt Chart, follow these steps:",source:"@site/docs/create-chart.md",sourceDirName:".",slug:"/create-chart",permalink:"/docs/create-chart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Features",permalink:"/docs/features"}},c={},l=[{value:"Include Library Files",id:"include-library-files",level:2},{value:"Define Container Element",id:"define-container-element",level:2},{value:"Initialize and Configure the Gantt Chart",id:"initialize-and-configure-the-gantt-chart",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-a-gantt-chart",children:"Create a Gantt Chart"}),"\n",(0,a.jsxs)(t.p,{children:["To create a basic ",(0,a.jsx)(t.strong,{children:"Gantt Chart"}),", follow these steps:"]}),"\n",(0,a.jsx)(t.h2,{id:"include-library-files",children:"Include Library Files"}),"\n",(0,a.jsx)(t.p,{children:"Add the necessary JavaScript and CSS files to your HTML or project:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:'title="1. Include Library Files"',children:'<script src="zt-gantt.js"><\/script>\n<link rel="stylesheet" href="zt-gantt.css" type="text/css" />\n'})}),"\n",(0,a.jsx)(t.h2,{id:"define-container-element",children:"Define Container Element"}),"\n",(0,a.jsx)(t.p,{children:"Insert a div element as the container for your Gantt chart:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:'title="2. Insert the element"',children:'<div id="gantt_here"></div>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"initialize-and-configure-the-gantt-chart",children:"Initialize and Configure the Gantt Chart"}),"\n",(0,a.jsx)(t.p,{children:"Use JavaScript to initialize the Gantt chart, configure options, templates, columns, data, scales, and links:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="3. Invoke the Gantt Chart Library"',children:'let element = document.getElementById("gantt_here");\nconst options = {\n  // check the options page\n};\n\nconst teplates = {\n  // check the templates page\n};\n\nlet gantt = new ztGantt(element, options, templates);\n\nztGantt.options.columns = [\n  {\n    name: "text",\n    width: 245,\n    min_width: 80,\n    max_width: 300,\n    tree: true,\n    label: "Name",\n    resize: true,\n    template: (task) => {\n      return `<span>${task.parent == 0 ? task.text : task.subject}</span>`;\n    },\n  },\n  // Add more columns as needed\n];\n\nztGantt.options.data = [\n  { id: 1, text: "Project 1", parent: 0, progress: 50 },\n  {\n    id: 2,\n    text: "Task #1",\n    start_date: "05-05-2023",\n    end_date: "05-05-2023",\n    parent: 1,\n    progress: 60,\n  },\n  // Add more tasks and subtasks\n];\n\nztGantt.options.scales = [\n  {\n    unit: "week",\n    step: 1,\n    format: (t) => {\n      return "%d %F";\n    },\n  },\n  {\n    unit: "day",\n    step: 1,\n    format: "%d %D",\n  },\n  // Define more scales if necessary\n];\n\nztGantt.options.links = [\n  { id: 1, source: 1, target: 2, type: 0 },\n  { id: 2, source: 2, target: 3, type: 1 },\n  // Define task dependencies (links) as needed\n];\n\nztGantt.render();\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," Remember to call ",(0,a.jsx)(t.code,{children:"ztGantt.render();"})," whenever you wish to visualize the updated data."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://zehntech.github.io/zt-gantt/",children:"Live demo"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
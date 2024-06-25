// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ztGantt",
  tagline: "Streamline Your Project Timelines with Ease",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ZTSS221.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/zt-gantt-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zehntech", // Usually your GitHub org/user name.
  projectName: "zt-gantt", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        // api: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "ztGantt",
        logo: {
          alt: "ztGantt Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar2",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/zehntech/zt-gantt",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Installation",
                to: "/docs/installation",
              },
              {
                label: "Features",
                to: "/docs/installation",
              },
            ],
          },
          {
            title: "Configuration",
            items: [
              {
                label: "Options",
                to: "/docs/installation",
              },
              {
                label: "Templates",
                to: "/docs/installation",
              },
              {
                label: "Events",
                to: "/docs/installation",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "API",
                to: "/docs/api",
              },
              {
                label: "GitHub",
                href: "https://github.com/zehntech/zt-gantt",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 ztGantt`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

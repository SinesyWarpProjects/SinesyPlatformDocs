// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4WS.Platform',
  tagline: '4WS.Platform Documentation',
  favicon: 'img/favicon.ico',
  plugins: ["@cmfcmf/docusaurus-search-local"],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://SinesyWarpProjects.github.io',
  baseUrl: '/SinesyPlatformDocs/',
  organizationName: 'SinesyWarpProjects',
  projectName: 'SinesyPlatformDocs',
  trailingSlash: false, // Consigliato per GitHub Pages
  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        //title: '4WS.Platform',
        logo: {
          alt: '4WS.Platform Logo',
          src: 'img/4ws-logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
              {
                label: 'Knowledge Base',
                to: '/docs/knowledge-base',
              },
            ],
          },
          {
            title: 'Most Popular Pages',
            items: [
              {
                label: 'Discover 4WS.Platform',
                href: 'https://4wsplatform.org/',
              },
              {
                label: 'Watch the Video Tutorial',
                href: 'https://4wsplatform.org/video-tutorial/',
              },
              {
                label: 'Choose the Edition',
                href: 'https://4wsplatform.org/licenses/',
              },
              {
                label: 'Try it for free',
                href: 'https://4wsplatform.org/try-4wsplatform/',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Email: 4wsplatform@sinesy.it',
                href: 'mailto:4wsplatform@sinesy.it',
              },
              {
                label: 'Phone: +39 0422 5011711',
                href: 'tel:+390422501711',
              },
            ],
          },
        ],
        copyright: `Sinesy S.r.l. | Via Comunale di Camino, 22/D 31046 Oderzo (TV) | P.I. 04016390264<br/>Powered by <a href="https://www.sinesy.it/" target="_blank" rel="noopener noreferrer">Sinesy</a>`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
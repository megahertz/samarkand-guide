'use strict';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Самарканд',
  tagline: 'руководство для экспатов',
  url: 'https://samarkand-guide.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'megahertz',
  projectName: 'samarkand-guide',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: ['docusaurus-plugin-image-zoom'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
        },
        gtag: {
          trackingID: 'G-6H7SMT618D',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            '**/components/**',
            '**/lib/**',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SamGuide',
        logo: {
          alt: 'Samarkand Guide Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'samarkand/index',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/map', label: 'Map', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              {
                label: 'Руководство',
                to: 'docs/samarkand/',
              },
              {
                label: 'Карта',
                to: 'map',
              },
            ],
          },
          {},
          {
            title: 'Другое',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/megahertz/samarkand-guide',
              },
              {
                label: 'Обсуждение',
                href: 'https://github.com/megahertz/samarkand-guide/discussions',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Samarkand: the expat guide`,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgba(240, 240, 240, 0.9)',
          dark: 'rgb(50, 50, 50, 0.9)',
        },
        config: {},
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { hashed: true, language: ['ru'] },
    ],
  ],
};

module.exports = config;

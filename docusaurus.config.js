'use strict';

// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkIconPlugin = require('./src/plugins/remark/iconPlugin');
const remarkPricePlugin = require('./src/plugins/remark/pricePlugin');
const remarkTelephonePlugin = require('./src/plugins/remark/telephonePlugin');

const remarkPlugins = [
  remarkIconPlugin,
  remarkPricePlugin,
  remarkTelephonePlugin,
];

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Самарканд: справочник релоканта',
  url: 'https://samarkand-guide.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'megahertz',
  projectName: 'samarkand-guide',

  i18n: { defaultLocale: 'ru', locales: ['ru'] },

  plugins: ['docusaurus-plugin-image-zoom'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
          remarkPlugins,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
        },
        gtag: { trackingID: 'G-6H7SMT618D' },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        pages: {
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.spec.{js,jsx,ts,tsx}',
            '**/__specs__/**',
            '**/components/**',
            '**/lib/**',
          ],
          remarkPlugins,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SamGuide',
        logo: { alt: 'Samarkand Guide Logo', src: 'img/logo.svg' },
        items: [
          {
            type: 'doc',
            docId: 'samarkand/index',
            position: 'left',
            label: 'Справочник',
          },
          { to: '/map', label: 'Карта', position: 'left' },
          { to: '/links', label: 'Полезные ссылки', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              { label: 'Справочник', to: 'docs/samarkand/' },
              { label: 'Карта', to: 'map' },
              { label: 'Полезные ссылки', to: 'links' },
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
        copyright: `© ${new Date().getFullYear()} Самарканд: справочник релоканта`,
      },
      zoom: {
        selector: '.markdown :not(a) > img',
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

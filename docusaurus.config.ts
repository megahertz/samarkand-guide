import type { Config } from '@docusaurus/types';
import { ThemeConfig, Options } from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkIconPlugin from './src/plugins/remark/iconPlugin';
import remarkMapPlugin from './src/plugins/remark/mapPlugin';
import remarkPricePlugin from './src/plugins/remark/pricePlugin';
import remarkTelephonePlugin from './src/plugins/remark/telephonePlugin';

const remarkPlugins = [
  remarkIconPlugin,
  remarkMapPlugin,
  remarkPricePlugin,
  remarkTelephonePlugin,
];

export default {
  title: 'в Самарканде',
  titleDelimiter: ' ',
  url: 'https://samarkand-guide.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'megahertz',
  projectName: 'samarkand-guide',

  i18n: { defaultLocale: 'ru', locales: ['ru'] },

  plugins: ['docusaurus-plugin-image-zoom'],

  headTags: [
    {
      tagName: 'link',
      attributes: { href: '/favicon.ico', rel: 'icon', sizes: 'any' },
    },
    {
      tagName: 'link',
      attributes: { href: '/img/logo.svg', rel: 'icon', type: 'image/svg+xml' },
    },
    {
      tagName: 'link',
      attributes: { href: '/img/logo-180.png', rel: 'apple-touch-icon' },
    },
    {
      tagName: 'link',
      attributes: { href: '/manifest.webmanifest', rel: 'manifest' },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/megahertz/samarkand-guide/tree/master/',
          remarkPlugins,
          routeBasePath: '/',
        },
        blog: false,
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
      } satisfies Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'og:image',
        content:
          'https://samarkand-guide.com/assets/images/registan1-37b86e2df0da265624c14400c2940f68.jpg',
      },
      {
        name: 'description',
        content:
          'Вся информация о Самарканде и Узбекистане для релокантов и ' +
          'экспатов в одном месте. Виза, аренда, регистрация, работа, ' +
          'медицина, детский сад и другая информация о Самарканде',
      },
    ],
    navbar: {
      title: 'SamGuide',
      logo: { alt: 'Samarkand Guide Logo', src: 'img/logo.svg' },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Справочник',
          items: [
            { label: 'Самарканд и Узбекистан', to: 'samarkand/about' },
            { label: 'Жилье', to: 'apartment/find' },
            { label: 'Услуги', to: 'services/communication' },
            { label: 'Покупки', to: 'purchases/grocery' },
            { label: 'Работа и бизнес', to: 'occupation/' },
            { label: 'Дети', to: 'children/kindergarten' },
          ],
        },
        {
          title: 'Другое',
          items: [
            { label: 'Карта', to: 'map' },
            { label: 'Полезные ссылки', to: 'other/links' },
          ],
        },
        {
          title: 'SamGuide',
          items: [
            {
              html:
                '<a ' +
                'class="footer__link-item" ' +
                'href="https://t.me/samarkand_guide" ' +
                'target="_blank"' +
                '>' +
                '<img ' +
                'alt="telegram" ' +
                'height="16" ' +
                'src="/img/icons/telegram.svg" ' +
                'width="16"> ' +
                'Чат' +
                '</a>',
            },
            {
              label: 'Github',
              href: 'https://github.com/megahertz/samarkand-guide',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Самарканд: справочник релоканта`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
    zoom: {
      selector: '.markdown :not(a) > img:not(.no-zoom)',
      background: {
        light: 'rgba(240, 240, 240, 0.9)',
        dark: 'rgb(50, 50, 50, 0.9)',
      },
      config: {},
    },
  } satisfies ThemeConfig,

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { docsRouteBasePath: '/', hashed: true, language: ['ru'] },
    ],
  ],
} satisfies Config;

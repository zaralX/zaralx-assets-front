import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'zaralX Assets',
  tagline: 'API For Minecraft Assets',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://assets.zaralx.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zaralX',
  projectName: 'zaralx-assets',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zaralX/zaralx-assets-front/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card-png',
    navbar: {
      title: 'zaralX Assets',
      logo: {
        alt: 'zaralx-assets',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'minecraftSidebar',
          position: 'left',
          label: 'Minecraft Assets',
        },
        {
          href: 'https://github.com/zaralX/zaralx-assets-front',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Minecraft Assets',
              to: '/docs/minecraft',
            },
          ],
        },
        {
          title: 'Developer',
          items: [
            {
              label: 'Website',
              href: 'https://zaralx.ru',
            },
            {
              label: 'Github',
              href: 'https://github.com/zaralX',
            },
            {
              label: 'Telegram Channel',
              href: 'https://underzaral.t.me',
            },
            {
              label: 'Telegram',
              href: 'https://zWork1.t.me',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'API Repository',
              href: 'https://github.com/zaralX/zaralx-assets',
            },
            {
              label: 'DOCS Repository',
              href: 'https://github.com/zaralX/zaralx-assets-front',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} zaralX Assets, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

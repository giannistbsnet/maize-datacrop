import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Datacrop Docs',
  tagline: 'DataCROP — Data Collection Routing & Processing Framework',
  favicon: 'img/logo-icon.png',

  future: {
    v4: true,
  },

  url: 'https://doc.datacrop.eu',
  baseUrl: '/',

  organizationName: 'datacrop',
  projectName: 'datacrop',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          routeBasePath: '/',
          editUrl:
            'https://github.com/datacrop/datacrop/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DataCROP',
      logo: {
        alt: 'DataCROP Logo',
        src: 'img/logo-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Home',
        },
        {
          to: '/Setup',
          label: 'Maize Setup',
          position: 'left',
        },
        {
          to: '/user-guide',
          label: 'User Guide',
          position: 'left',
        },
        {
          to: '/dev-guide',
          label: 'Developer Guide',
          position: 'left',
        },
        {
          href: 'https://github.com/datacrop',
          label: 'GitHub',
          position: 'right',
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
              label: 'Home',
              to: '/home',
            },
            {
              label: 'Maize Setup',
              to: '/Setup',
            },
            {
              label: 'User Guide',
              to: '/user-guide',
            },
            {
              label: 'Developer Guide',
              to: '/dev-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'DataCROP Forum',
              href: 'https://groups.google.com/forum/#!forum/datacrop',
            },
            {
              label: 'Contact DataCROP',
              href: 'mailto:datacrop@googlegroups.com',
            },
            {
              label: 'DockerHub',
              href: 'https://hub.docker.com/u/datacrop',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/datacrop',
            },
            {
              label: 'OpenHUB Stats',
              href: 'https://www.openhub.net/p/datacrop',
            },
            {
              label: 'Website',
              href: 'http://www.datacrop.eu/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DataCROP`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

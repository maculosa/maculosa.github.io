// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Banmao Studio',
  tagline: 'Banmao\'s Blog are cool',
  url: 'https://banmao.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Banmao Studio', // Usually your GitHub org/user name.
  projectName: 'maculosa.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/maculosa/maculosa.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/maculosa/maculosa.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        //   trackingID: 'G-L3BN6286VQ',
        //   anonymizeIP: true,
        // },
        gtag: {
          trackingID: 'G-L3BN6286VQ',
          anonymizeIP: true,
        }
      }),
    ],
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh-CN']
  // },
  themes: [
    '@docusaurus/theme-live-codeblock'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'blog, banmao, web'}
      ],
      navbar: {
        // title: 'Banmao Studio',
        logo: {
          alt: 'Banmao Studio',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left'},
          { label: 'Web', position: 'left', items: [
            { to: '/vue', label: 'Vue' },
            { to: '/react', label: 'React' },
            { to: '/css', label: 'CSS' }
          ] },
          {
            label: '程序员的测试课',
            to: '/developer/test_course'
          },
          // {to: '/design', label: 'Design', position: 'left'},
          {to: '/nodejs', label: 'Node.js', position: 'right'},
          // {to: '/golang', label: 'Golang', position: 'left'},
          // {to: '/rust', label: 'Rust', position: 'left' },
          {to: '/linux', label: 'Linux', position: 'right', items: [
            { to: '/linux/archlinux', label: 'Arch Linux' },
            { to: '/linux/termux', label: 'Termux' }
          ]},
          {  to: '/editor', label: 'Editor', position: 'right', items: [
            { to: '/editor/emacs', label: 'Emacs' },
          ] },
          {
            to: '/tools',
            label: 'Tools',
            position: 'right',
            items: [
              {
                to: '/tools/time',
                label: '留观时间',
                description: '哈哈'
              },
              {
                to: '/tools/explanation',
                label: '名词解释',
                description: '不懂就看看(o゜▽゜)o☆[BINGO!]'
              },
              {
                to: '/git',
                label: 'Git'
              },
              {
                to: 'https://cn.sli.dev/',
                label: 'Slidev'
              }
            ]
          },
          {
            href: 'https://github.com/maculosa/maculosa.github.io',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/LMaculosa',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/maculosa/maculosa.github.io',
              },
            ],
          },
        ],
        logo: {
          alt: 'Banmao Logo',
          src: 'img/logo.svg',
          width: 160,

        },
        copyright: `Copyright © ${new Date().getFullYear()} Banmao Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'java', 'lisp', 'vim', 'toml', 'protobuf', 'nginx'],
      },
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，可位于编辑器上方或下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: 'top',
      },
    }),
  scripts: [
    {
      src: 'baidu-analytics.js',
      async: true,
    }
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-mini.svg'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgba(255,255,255,0)'
          }
        ]
      }
    ]
  ]
};

module.exports = config;

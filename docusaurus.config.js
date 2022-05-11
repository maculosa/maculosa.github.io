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
  projectName: 'docusaurus', // Usually your repo name.
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
      }),
    ],
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh-CN']
  // },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          ] },
          {to: '/design', label: 'Design', position: 'left'},
          {to: '/nodejs', label: 'Node.js', position: 'right'},
          {to: '/golang', label: 'Golang', position: 'left'},
          {to: '/rust', label: 'Rust', position: 'left' },
          {to: '/linux', label: 'Linux', position: 'right', items: [
            { to: '/linux/archlinux', label: 'Arch Linux' },
            { to: '/linux/ubuntu', label: 'Ubuntu' },
            { to: '/linux/termux', label: 'Termux' }
          ]},
          {  to: '/editor', label: 'Editor', position: 'right', items: [
            { to: '/editor/vim', label: 'Vim'},
            { to: '/editor/emacs', label: 'Emacs' },
            { to: '/editor/vscode', label: 'VS Code'}
          ] },
          {
            to: '/tools',
            label: 'Tools',
            position: 'right',
            items: [
              {
                to: '/tools/time',
                label: '留观时间',
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
        copyright: `Copyright © ${new Date().getFullYear()} Banmao Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

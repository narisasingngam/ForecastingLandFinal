/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Forecasting land price',
  tagline: 'The tagline of my site',
  url: 'https://narisasingngam.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/house.gif',
  organizationName: 'narisasingngam', // Usually your GitHub org/user name.
  projectName: 'ForecastingLandFinal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Forecasting land price',
      logo: {
        alt: 'Home Logo',
        src: 'img/house.gif',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'reflot', label: 'Reference land', position: 'left'},
        {to: 'parcel', label: 'Parcel land lot', position: 'left'},
        {
          href: 'https://github.com/narisasingngam/ForecastingLandFinal',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/narisasingngam/ForecastingLandFinal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Forecasting land price, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

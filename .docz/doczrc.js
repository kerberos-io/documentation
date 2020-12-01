export default {
  menu: [
    'Introduction',
    'How it works',
    'Architectures',
    { name: 'Open Source', menu: ['First things first', 'Get Started', 'Installation', 'Installation - advanced', 'Releases', 'License', 'Upgrade', 'Contribute','Machinery', 'Web'] },
    { name: 'Enterprise', menu: ['First things first', 'Get Started', 'Installation', 'Installation - Cloud', 'Installation - Edge', 'Releases'] },
    { name: 'Storage', menu: ['First things first', 'Get Started', 'Installation', 'Installation - Cloud', 'Installation - Edge', 'License'] },
    'Cloud'
  ],
  repository: "https://github.com/kerberos-io",
  themeConfig: {
    colors: {
      primary: '#943733',
      secondary: '#9e9e9e',
      h5: {
        color: '#943733',
      },
      header: {
        bg: '#943733',
      },
      sidebar: {
        bg: '#f9f9f9',
        navLinkActive: '#943733',
      },
      modes: {
        dark: {
          primary: '#9e9e9e',
          secondary: '#943733',
          header: {
            bg: '#943733',
          },
          sidebar: {
            navLinkActive: '#fff',
          },
        },
      },
    },
  },
  gatsbyRemarkPlugins: [
    {
      resolve: 'gatsby-remark-vscode',
    },
    {
      resolve: 'gatsby-remark-grid-tables',
    }
  ],
}

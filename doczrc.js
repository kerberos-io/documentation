export default {
  menu: [
    'Introduction',
    'Architectures',
    { name: 'Open Source', menu: ['First things first', 'Releases', 'Upgrade', 'Installation', 'Contribute', 'License', 'Machinery', 'Web'] },
    { name: 'Enterprise', menu: ['Introduction', 'Installation', 'License'] },
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

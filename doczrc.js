export default {
  menu: [
    'Introduction',
    'How it works',
    'Architectures',
    { name: 'Open Source (v2)', menu: ['First things first', 'Get Started', 'Installation', 'Installation - Advanced', 'Releases', 'License', 'Upgrade', 'Contribute','Machinery', 'Web'] },
    'Open Source (v3)',
    { name: 'Enterprise', menu: ['First things first', 'Get Started', 'Installation', 'Installation - Cloud', 'Installation - Edge', 'Releases'] },
    { name: 'Storage', menu: ['First things first', 'Get Started', 'Installation', 'Installation - Cloud', 'Installation - Edge', 'Installation - Recycle', 'Installation - Providers', 'License'] },
    'Cloud'
  ],
  repository: "https://github.com/kerberos-io",
  themeConfig: {
    colors: {
      primary: '#943733',
      secondary: '#772824',
      //text: '#6D6666',
      h5: {
        color: '#943733',
      },
      header: {
        bg: '#943733',
        button: {
          bg: '#fff',
          color: '#943733',
        }
      },
      sidebar: {
        bg: '#f9f9f9',
        navLinkActive: '#943733',
      },
      modes: {
        dark: {
          primary: '#AF79CE',
          secondary: '#9F4DCE',
          //text: '#D9D6D6',
          header: {
            bg: '#57356B',
            button: {
              bg: '#1D2330',
              color: '#AF79CE',
            }
          },
          sidebar: {
            navLinkActive: '#AF79CE',
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
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-53584355-3", // Google Analytics / GA
        ],
      },
    }
  ],
}

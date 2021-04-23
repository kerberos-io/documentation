# [Kerberos Docs](https://doc.kerberos.io)


## Installation

Make sure you have Node JS and Yarn installed.

Grab the dependencies:

    $ yarn install


## Development

Run the docs locally for development:

    $ yarn dev

For a static site build:

    $ yarn build


## Notes

**Theme colors** are defined in `/doczrc.js` > `themeConfig > colors`, which can then be used in `styles.js` of underlying components.

**Inherited layout files** in `node_modules/gatsby-theme-docz/src/components/`.
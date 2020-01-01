import * as mixins from '~utils/mixins'
import { media } from '~theme/breakpoints'

export const wrapper = {
  bg: 'header.bg',
  color: "#fff",
  position: 'relative',
  zIndex: 1,
  borderBottom: t => `1px solid ${t.colors.border}`,
  padding: '15px 0',
}

export const innerContainer = {
  ...mixins.centerAlign,
  px: 4,
  position: 'relative',
  justifyContent: 'space-between',
  height: 80,
  [media.tablet]: {
    height: 51,
  },
}

export const menuIcon = {
  display: 'none',
  position: 'absolute',
  //top: 'calc(100% + 15px)',
  top: '38px',
  left: 30,
  zIndex: 10000,
  [media.tablet]: {
    top: '28px',
    display: 'block',
  },
}

export const menuButton = {
  ...mixins.ghostButton,
  color: 'header.text',
  opacity: 0.5,
  cursor: 'pointer',
}

export const headerButton = {
  ...mixins.centerAlign,
  outline: 'none',
  p: '12px',
  border: 'none',
  borderRadius: 9999,
  bg: '#fff', //'header.button.bg',
  color: '#943733', //'header.button.color',
  fontSize: 0,
  fontWeight: 600,
  cursor: 'pointer',
  [media.mobile]: {
    display: "none",
  }
}

export const editButton = {
  ...mixins.centerAlign,
  position: 'absolute',
  bottom: -40,
  right: 30,
  bg: 'transparent',
  color: 'muted',
  fontSize: 1,
  textDecoration: 'none',
  borderRadius: 'radius',
}

export const primary = {
    background: '#fff',
    borderBottom: '1px solid #e5e5e5',
    boxShadow: '0 -5px 0 rgba(0,0,0,.03)',
    float: 'left',
    minHeight: '2.35em',
    position: 'relative',
    zIndex: '999',
    width: '100%',
}

export const branches = {
    float: 'left',
    background: '0 0',
    border: '0',
    boxShadow: 'none',
    display: 'block',
    margin: '0px !important',
}

export const branchesli = {
  padding: '25px 0',
  width: 'auto',
  float: 'left',
  listStyle: 'none',
}

export const branchesa = {
  borderBottom: '0',
  fontSize: '12px',
  margin: '0 25px 0 0',
  width: 'auto',
  fontFamily: 'Source Sans Pro,sans-serif',
  color: '#943633',
  display: 'block',
  fontWeight: '600',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

export const links = {
    float: 'right',
    background: '0 0',
    border: '0',
    boxShadow: 'none',
    display: 'block',
    margin: '0px !important',
}

export const linksli = {
  padding: '25px 0',
  width: 'auto',
  float: 'left',
  listStyle: 'none',
}

export const linksli2 = {
  padding: '25px 0',
  width: 'auto',
  float: 'left',
  listStyle: 'none',
  [media.mobile]: {
    display: 'none',
  },
}

export const linksa = {
  borderBottom: '0',
  fontSize: '12px',
  margin: '0 25px 0 0',
  width: 'auto',
  fontFamily: 'Source Sans Pro,sans-serif',
  color: '#943633',
  display: 'block',
  fontWeight: '600',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

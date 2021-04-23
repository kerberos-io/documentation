import { media } from '~theme/breakpoints'

export const logo = {
  letterSpacing: '-0.02em',
  fontWeight: 600,
  fontSize: 4,
  display: 'flex',
  alignItems: 'center',
  [media.tablet]: {
    left: '45px',
    position: 'relative',
  },
}

export const link = {
  fontWeight: 600,
  color: '#fff',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
}

export const img = {
  display: 'block',
  position: 'relative',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  width: '45px',
  height: '45px',
}

export const circle = {
  margin: '0 16px 0 0',
  /*
  margin: '-10px 20px 0 0',
  display: 'table',
  background: '#fff',
  borderRadius: '50%',
  padding: '10px',
  float: 'left',
  */
}
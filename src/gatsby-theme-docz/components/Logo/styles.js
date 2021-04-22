import { media } from '~theme/breakpoints'

export const logo = {
  letterSpacing: '-0.02em',
  fontWeight: 600,
  fontSize: 4,
  [media.tablet]: {
    left: '45px',
    top: '5px',
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
  width: '35px',
  height: '35px',
}

export const circle = {
  display: 'table',
  background: '#fff',
  margin: '-10px 20px 0 0',
  borderRadius: '50%',
  padding: '10px',
  float: 'left',
}

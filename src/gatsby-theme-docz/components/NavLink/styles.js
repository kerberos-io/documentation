export const link = {
  my: 2,
  display: 'block',
  color: 'sidebar.navGroup',
  textDecoration: 'none',
  fontSize: 2,
  '&.active': {
    color: 'sidebar.navLinkActive',
    fontWeight: '700',
  },
}

export const smallLink = {
  ...link,
  ml: 3,
  fontSize: 1,
  position: 'relative',
  color: 'sidebar.tocLink',
  '&.active': {
    color: 'sidebar.tocLinkActive',
    fontWeight: '500',
  },
  '&.active::before': {
    content: '""',
    position: 'absolute',
    display: 'block',
    top: '2px',
    left: '-12px',
    height: '1rem',
    backgroundColor: 'primary',
    transition: 'width 200ms ease 0s',
    width: '2px',
    borderRadius: 1,
  },
}

import React from 'react'

const Link = ({ children, href }) => {
  return <a href={href} target="_blank">{children}</a>
}

export default Link

const ReplaceVersion = ({ children, url }) => {
  return children.replace(/VERSION/g, "2.8.0")
}

export default ReplaceVersion

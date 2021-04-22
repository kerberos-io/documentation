/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { Edit, Menu, Sun, Github, Help } from '../Icons'
import { Logo } from '../Logo'

export const Header = props => {
  const { onOpen } = props
  const {
    repository,
    themeConfig: { showDarkModeSwitch },
  } = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <div sx={styles.wrapper} data-testid="header">
        <Box sx={styles.menuIcon}>
          <button sx={styles.menuButton} onClick={onOpen}>
            <Menu size={25} color="white"/>
          </button>
        </Box>
        <div sx={styles.innerContainer}>
          <Logo />
          <Flex>
            {repository && (
              <Box sx={{ mr: 2 }}>
                <a
                  href={repository}
                  sx={styles.headerButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} />
                </a>
              </Box>
            )}
              <Box sx={{ mr: 2 }}>
              <a
                href="https://kerberosio.zendesk.com"
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Help size={15} />
              </a>
            </Box>
            {showDarkModeSwitch && (
              <button sx={styles.headerButton} onClick={toggleColorMode}>
                <Sun size={15} />
              </button>
            )}
          </Flex>
          {edit && doc.link && (
            <a
              sx={styles.editButton}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Edit width={14} />
              <Box sx={{ pl: 2 }}>Edit page</Box>
            </a>
          )}
        </div>
      </div>
      <div>

      <div>
        <nav sx={styles.external_links}>
          <div class="box">
            <ul sx={styles.links}>
              <li sx={styles.linksli}>
                <a sx={styles.linksa} href="http://kerberos.io" title="Homepage">Homepage</a>
              </li>
              <li sx={styles.linksli}>
                <a sx={styles.linksa} href="http://cloud.kerberos.io" title="Cloud">Cloud</a>
              </li>
              <li sx={styles.linksli2}>
                <a sx={styles.linksa} target="_blank" href="https://github.com/kerberos-io" rel="noopener noreferrer" title="Github">Github</a>
              </li>
              <li sx={styles.linksli2}>
                <a sx={styles.linksa} target="_blank" href="https://kerberosio.zendesk.com/" rel="noopener noreferrer" title="Zendesk">Help</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  )
}

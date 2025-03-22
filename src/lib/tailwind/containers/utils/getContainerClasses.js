import CONTAINERS from '../containers-config'

function getContainerClasses(api) {
  const { addComponents, theme, addUtilities } = api

  const containers = CONTAINERS
  const components = {}

  Object.keys(containers).forEach((containerName) => {
    const containerConfig = containers[containerName]

    const baseStyles = {
      width: '100%',
    }

    // Center the container if specified
    if (containerConfig.center) {
      baseStyles.marginLeft = 'auto'
      baseStyles.marginRight = 'auto'
    }

    // Handle padding
    const containerPadding = containerConfig.padding || {}
    if (typeof containerPadding === 'string') {
      baseStyles.paddingLeft = containerPadding
      baseStyles.paddingRight = containerPadding
    } else if (typeof containerPadding === 'object') {
      baseStyles.paddingLeft = containerPadding.DEFAULT || '0rem'
      baseStyles.paddingRight = containerPadding.DEFAULT || '0rem'
    }

    // Generate the class name, e.g., '.container-large'
    const className = `.container-${containerName}`

    // Add base styles
    components[className] = baseStyles

    // Get global breakpoints from theme.screens
    const screens = theme('screens', {}) /* as { [key: string]: string } */
    const screenEntries = Object.entries(screens)

    // Generate responsive styles
    screenEntries.forEach(([screen, minWidth]) => {
      const mediaQuery = `@media (min-width: ${minWidth})`

      let screenPadding
      if (typeof containerPadding === 'object') {
        screenPadding = containerPadding[screen]
      }

      // Use the maxWidth from containerConfig.maxWidth if specified
      const screenMaxWidth = containerConfig.maxWidth?.[screen] || minWidth

      const screenStyles = {
        maxWidth: screenMaxWidth,
      }

      if (screenPadding) {
        screenStyles.paddingLeft = screenPadding
        screenStyles.paddingRight = screenPadding
      }

      if (!components[mediaQuery]) {
        components[mediaQuery] = {}
      }

      if (!components[mediaQuery][className]) {
        components[mediaQuery][className] = {}
      }

      Object.assign(components[mediaQuery][className], screenStyles)
    })
  })

  return components
}

export default getContainerClasses

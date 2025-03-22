import CONTAINERS from '../containers-config'

function getContainerVariables(api) {
  const { addBase, theme } = api

  // Base variables on :root (for small screens)
  const containerVarsBase = {}
  Object.keys(CONTAINERS).forEach((containerName) => {
    const varName = containerName === 'default' ? '--container' : `--container-${containerName}`
    const containerConfig = CONTAINERS[containerName]
    const containerPadding = containerConfig.padding || {}

    // Determine the base padding (left/right)
    let basePadding
    if (typeof containerPadding === 'string') {
      basePadding = containerPadding
    } else if (typeof containerPadding === 'object') {
      basePadding = containerPadding.DEFAULT || '0rem'
    } else {
      basePadding = '0rem'
    }

    containerVarsBase[varName] =
      basePadding === '0rem' || basePadding === '0' ? '100%' : `calc(100% - (${basePadding} + ${basePadding}))`
  })

  addBase({
    ':root': containerVarsBase,
  })

  // Adjust variables at each breakpoint
  const screens = theme('screens', {})
  Object.entries(screens).forEach(([screen, minWidth]) => {
    const containerVarsMedia = {}
    Object.keys(CONTAINERS).forEach((containerName) => {
      const varName = containerName === 'default' ? '--container' : `--container-${containerName}`
      const containerConfig = CONTAINERS[containerName]
      const containerPadding = containerConfig.padding || {}

      // Use the container's maxWidth for this breakpoint or fallback to the breakpoint's min-width
      const screenValue = containerConfig.maxWidth?.[screen] || minWidth

      // Determine screen-specific padding
      let screenPadding
      if (typeof containerPadding === 'object') {
        screenPadding = containerPadding[screen] || containerPadding.DEFAULT || '0rem'
      } else if (typeof containerPadding === 'string') {
        screenPadding = containerPadding
      } else {
        screenPadding = '0rem'
      }

      containerVarsMedia[varName] =
        screenPadding === '0rem' || screenPadding === '0'
          ? screenValue
          : `calc(${screenValue} - (${screenPadding} + ${screenPadding}))`
    })

    const mediaQuery = `@media (min-width: ${minWidth})`
    addBase({
      [mediaQuery]: {
        ':root': containerVarsMedia,
      },
    })
  })
}

export default getContainerVariables

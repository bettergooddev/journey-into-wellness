// containers-plugin.js
import plugin from 'tailwindcss/plugin'
import getContainerClasses from './utils/getContainerClasses'
import getContainerExtensions from './utils/getContainerExtensions'
import getContainerVariables from './utils/getContainerVariables' // new import

export default plugin(
  function scalableContainersPlugin(api) {
    const { addComponents, addUtilities } = api

    const components = getContainerClasses(api)
    addComponents(components)

    const utilities = getContainerExtensions(api)
    addUtilities(utilities)

    getContainerVariables(api)
  },
  {
    theme: {
      extend: {},
    },
  },
)

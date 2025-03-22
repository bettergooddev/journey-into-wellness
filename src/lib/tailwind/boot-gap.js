// plugins/boot-gap.js
import plugin from 'tailwindcss/plugin'

export default plugin(
  function bootGapPlugin({ addUtilities, theme, e }) {
    const spacing = theme('spacing')

    const newUtilities = Object.entries(spacing).reduce((acc, [key, value]) => {
      // Original boot-gap utility
      acc[`.boot-gap-${e(key)}`] = {
        marginLeft: `calc(-${value} / 2)`,
        marginRight: `calc(-${value} / 2)`,
        marginTop: `calc(-${value} / 2)`,
        marginBottom: `calc(-${value} / 2)`,

        '> *': {
          paddingLeft: `calc(${value} / 2)`,
          paddingRight: `calc(${value} / 2)`,
          paddingTop: `calc(${value} / 2)`,
          paddingBottom: `calc(${value} / 2)`,
        },
      }

      acc[`.boot-gap-x-${e(key)}`] = {
        marginLeft: `calc(-${value} / 2)`,
        marginRight: `calc(-${value} / 2)`,
        '> *': {
          paddingLeft: `calc(${value} / 2)`,
          paddingRight: `calc(${value} / 2)`,
        },
      }

      acc[`.boot-gap-y-${e(key)}`] = {
        marginTop: `calc(-${value} / 2)`,
        marginBottom: `calc(-${value} / 2)`,
        '> *': {
          paddingTop: `calc(${value} / 2)`,
          paddingBottom: `calc(${value} / 2)`,
        },
      }

      return acc
    }, {})

    // Finally, add these utilities
    addUtilities(newUtilities, ['responsive'])
  },
  {
    theme: {
      // You can extend your theme here if needed, or leave empty
      extend: {},
    },
  },
)

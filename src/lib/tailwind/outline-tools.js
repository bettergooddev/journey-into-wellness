/** @file src/lib/tailwind/outline-tools.js */
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    //
    // 1) outline-x-* utilities (left + right)
    //
    matchUtilities(
      {
        "outline-x": (value) => ({
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
          },
          "&::before": {
            left: 0,
            top: 0,
            bottom: 0,
            width: value,
            // Center the "border" width
            transform: `translateX(calc(-1 * ${value} / 2))`,
          },
          "&::after": {
            right: 0,
            top: 0,
            bottom: 0,
            width: value,
            transform: `translateX(calc(${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 2) outline-y-* utilities (top + bottom)
    //
    matchUtilities(
      {
        "outline-y": (value) => ({
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
          },
          "&::before": {
            top: 0,
            left: 0,
            right: 0,
            height: value,
            transform: `translateY(calc(-1 * ${value} / 2))`,
          },
          "&::after": {
            bottom: 0,
            left: 0,
            right: 0,
            height: value,
            transform: `translateY(calc(${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 3) outline-top-* utilities (top only)
    //
    matchUtilities(
      {
        "outline-top": (value) => ({
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            height: value,
            transform: `translateY(calc(-1 * ${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 4) outline-bottom-* utilities (bottom only)
    //
    matchUtilities(
      {
        "outline-bottom": (value) => ({
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
            bottom: 0,
            left: 0,
            right: 0,
            height: value,
            transform: `translateY(calc(${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 5) outline-left-* utilities (left only)
    //
    matchUtilities(
      {
        "outline-left": (value) => ({
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
            left: 0,
            top: 0,
            bottom: 0,
            width: value,
            transform: `translateX(calc(-1 * ${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 6) outline-right-* utilities (right only)
    //
    matchUtilities(
      {
        "outline-right": (value) => ({
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            backgroundColor: "var(--tw-outline-color, currentColor)",
            zIndex: 100,
            right: 0,
            top: 0,
            bottom: 0,
            width: value,
            transform: `translateX(calc(${value} / 2))`,
          },
        }),
      },
      {
        values: theme("borderWidth"),
        type: "length",
        variants: ["responsive", "hover", "focus"],
      },
    );

    //
    // 7) outline-* color utilities
    //
    const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

    matchUtilities(
      {
        outline: (value) => ({
          "--tw-outline-color": value,
          outlineColor: value, // so built-in usage still works
        }),
      },
      {
        values: flattenColorPalette(theme("colors")),
        type: ["color", "any"],
        variants: ["responsive", "hover", "focus"],
      },
    );
  },
  {
    name: "outline-tools",
  },
);

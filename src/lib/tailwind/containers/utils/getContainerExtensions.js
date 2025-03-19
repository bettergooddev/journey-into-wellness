// getContainerExtensions.js
import CONTAINERS from "../containers-config";

function getContainerExtensions(api) {
  const { theme } = api;

  const containers = CONTAINERS;
  const utilities = {};

  const screens = theme("screens", {});
  const screenEntries = Object.entries(screens);

  Object.keys(containers).forEach((containerName) => {
    const containerConfig = containers[containerName];
    const baseClassName = `.grid-cols-container-${containerName}`;

    const containerPadding = containerConfig.padding || {};

    screenEntries.forEach(([screen, minWidth]) => {
      const maxWidth = containerConfig.maxWidth?.[screen];
      if (!maxWidth) {
        return;
      }

      // Get the container padding for this screen
      let screenPadding;
      if (typeof containerPadding === "object") {
        screenPadding =
          containerPadding[screen] || containerPadding.DEFAULT || "0rem";
      } else if (typeof containerPadding === "string") {
        screenPadding = containerPadding;
      } else {
        screenPadding = "0rem";
      }

      const totalSideWidth = `calc((100% - ${maxWidth}) / 2)`;
      const templateColumnsValue = `calc(${totalSideWidth} + ${screenPadding}) 1fr calc(${totalSideWidth} + ${screenPadding})`;

      const columnValues = {
        DEFAULT: templateColumnsValue,
        left: `calc(${totalSideWidth} + ${screenPadding}) 1fr calc(${totalSideWidth} + ${screenPadding}) 50%`,
        right: `50% calc(${totalSideWidth} + ${screenPadding}) 1fr calc(${totalSideWidth} + ${screenPadding})`,
      };

      const mediaQuery = `@media (min-width: ${minWidth})`;

      if (!utilities[mediaQuery]) {
        utilities[mediaQuery] = {};
      }

      // Assign utility classes dynamically for each key in columnValues
      Object.entries(columnValues).forEach(([key, value]) => {
        const className =
          key === "DEFAULT" ? baseClassName : `${baseClassName}-${key}`;

        if (!utilities[mediaQuery][className]) {
          utilities[mediaQuery][className] = {};
        }

        utilities[mediaQuery][className]["gridTemplateColumns"] = value;
      });
    });
  });

  return utilities;
}

export default getContainerExtensions;

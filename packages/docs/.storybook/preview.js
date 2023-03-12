import { themes } from "@storybook/theming";
import { muiTheme } from "storybook-addon-material-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themes.dark,
  },
};

const newTheme = {
  themeName: "Grey Theme",
  palette: {
    primary1Color: "#00bcd4",
    alternateTextColor: "#4a4a4a",
    canvasColor: "#616161",
    textColor: "#bdbdbd ",
    secondTextColor: "rgba(255, 255, 255, 0.54)",
    disabledColor: "#757575",
    cent1Color: "#607d8b",
  },
};

export const decorators = [muiTheme([newTheme])];

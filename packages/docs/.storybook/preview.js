import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { themes } from "@storybook/theming";
import { darkTheme, lightTheme } from '../src/themes.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];

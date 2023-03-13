module.exports = {
  stories: [
    "../src/docs/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-styling",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  // viteFinal: (config, { configType }) => {
  //   if (configType === "PRODUCTION") {
  //     config.base = "/";
  //   }

  //   return config;
  // },
};

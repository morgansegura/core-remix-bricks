import path from "node:path";

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../(app|stories)/**/*.mdx",
    "../(app|stories)/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public", "../app/styles"],
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen", // or false if you don't need docgen at all
  },
  previewHead: (head) => `
    ${head}
  `,
  webpackFinal: async (config) => {
    config.resolve!.alias!["@"] = path.resolve(__dirname, "../app/");

    return config;
  },
};
export default config;

import type { Preview } from "@storybook/react";

// import { sansfont } from "../app/fonts";
import "../app/styles/globals.css";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <html>
        <Story />
      </html>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    chromatic: {
      viewports: [640, 768, 1024, 1280, 1536],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Components/Core",
          "Components/UI",
          "Components/Layout",
          "Components/Pages",
          "Pages",
        ],
      },
    },
  },
};

export default preview;

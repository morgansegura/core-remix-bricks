import { Page } from "~/app/components/core/page/Page";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Page>;

export default {
  title: "Pages/Static",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export const Default: Story = {
  render: () => <Page>Text</Page>,
};

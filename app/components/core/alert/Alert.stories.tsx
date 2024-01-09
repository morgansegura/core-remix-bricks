import { Alert } from "./Alert";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Alert>;

export default {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export const Default: Story = {
  render: () => <Alert>Hello, World!</Alert>,
};

import { Header } from "./Header";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Header>;

export default {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export const Default: Story = {
  render: () => <Header menuItems={ [] } logo={{src: 'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks'}} buttons={ [] } borderTop={ "full" } borderBottom={ "full" } paddingTop={ "0" } paddingBottom={ "0" } />,
};

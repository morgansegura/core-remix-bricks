import { Page } from "~/app/components/core/page/Page";
import Header from "~/app/react-bricks/bricks/react-bricks-ui/layout/Header";
import Footer from "~/app/react-bricks/bricks/react-bricks-ui/layout/Footer";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Page>;

export default {
  title: "Components/Layout/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export const Default: Story = {
  render: () => (
    <Page>
      <Header menuItems={ [] } logo={{src: 'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks'}} buttons={ [] } borderTop={ "full" } borderBottom={ "full" } paddingTop={ "0" } paddingBottom={ "0" } />
      <Page.Body>
        <Page.Section>This is a page section</Page.Section>
      </Page.Body>
      <Footer siteUrl={ "" } borderTop={ "full" } borderBottom={ "full" } paddingTop={ "0" } paddingBottom={ "0" } />
    </Page>
  ),
};

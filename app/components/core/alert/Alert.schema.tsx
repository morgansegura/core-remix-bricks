import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from "~/app/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import blockNames from "~/app/react-bricks/bricks/react-bricks-ui/blockNames";

export default Alert.schema = {
  name: blockNames.Alert,
  label: "Alert",
  category: "layout",
  tags: ["Alert"],
  previewImageUrl: "/bricks-preview-images/...",
  repeaterItems: [
    {
      name: "columns",
      itemType: blockNames.FooterColumn,
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.LIGHT_GRAY.value,
    borderTop: "full",
    logo: logos.REACT_BRICKS,
    siteUrl: "",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
};

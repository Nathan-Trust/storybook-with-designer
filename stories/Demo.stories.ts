import type { Meta, StoryObj } from "@storybook/nextjs";
import Demo from "../components/ui/demo";

const meta = {
  title: "Pages/Demo",
  component: Demo,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

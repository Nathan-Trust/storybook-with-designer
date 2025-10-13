import type { Meta, StoryObj } from "@storybook/nextjs";
import Navfull from "../components/ui/navfull";

const meta = {
  title: "Components/Navigation/Navfull",
  component: Navfull,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navfull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

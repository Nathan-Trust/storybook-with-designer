import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer1 from "../components/shared/footer";

const meta: Meta<typeof Footer1> = {
  title: "Components/Footer",
  component: Footer1,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

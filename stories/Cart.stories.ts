import type { Meta, StoryObj } from "@storybook/nextjs";
import Cart from "../components/ui/cart";

const meta = {
  title: "Components/Cart",
  component: Cart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    itemCount: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    itemCount: 0,
  },
};

export const WithItems: Story = {
  args: {
    itemCount: 3,
  },
};

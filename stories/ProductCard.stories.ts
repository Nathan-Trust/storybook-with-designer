import type { Meta, StoryObj } from "@storybook/nextjs";
import ProductCard from "../components/ui/productcard";

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["basic", "detailed"],
    },
    showFollowButton: {
      control: { type: "boolean" },
    },
    isFollowing: {
      control: { type: "boolean" },
    },
    showCallout: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
    farmName: "Sampson Farms",
    timeAgo: "3 hours ago",
    productName: "Product Name",
    price: "N12,050",
    priceUnit: "Per portion",
    availability: "3 / 5 Portions Available",
    deliveryDate: "25 Nov 2024",
    showFollowButton: true,
    isFollowing: false,
    showCallout: false,
  },
};

export const Detailed: Story = {
  args: {
    variant: "detailed",
    farmName: "Sampson Farms",
    timeAgo: "3 hours ago",
    productName: "Product Name",
    price: "N12,050",
    priceUnit: "Per portion",
    availability: "3 / 5 Portions Available",
    deliveryDate: "25 Nov 2024",
    description:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
    showFollowButton: true,
    isFollowing: false,
    showCallout: true,
    calloutText:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
  },
};

export const Following: Story = {
  args: {
    variant: "detailed",
    farmName: "Sampson Farms",
    timeAgo: "3 hours ago",
    productName: "Product Name",
    price: "N12,050",
    priceUnit: "Per portion",
    availability: "3 / 5 Portions Available",
    deliveryDate: "25 Nov 2024",
    description:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
    showFollowButton: true,
    isFollowing: true,
    showCallout: true,
    calloutText:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
  },
};

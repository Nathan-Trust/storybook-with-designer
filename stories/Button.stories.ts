import Button from "../components/ui/button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Heart } from "lucide-react";
import React from "react";

import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: { type: "select" }, options: [1, 2, 3] },
    color: {
      control: { type: "select" },
      options: ["Neutral", "Accent", "Brand", "Error"],
    },
    variant: {
      control: { type: "select" },
      options: ["Solid", "Outline", "Ghost"],
    },
    button: { control: "text" },
    showLeadingIcon: { control: "boolean" },
    showTrailingIcon: { control: "boolean" },
  },
  // Default args for all stories
  args: {
    onClick: fn(),
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIcon: React.createElement(Heart),
    trailingIcon: React.createElement(Heart),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Size 1 combinations
export const Size1NeutralSolid: Story = {
  args: {
    size: 1,
    color: "Neutral",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size1NeutralOutline: Story = {
  args: {
    size: 1,
    color: "Neutral",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size1NeutralGhost: Story = {
  args: {
    size: 1,
    color: "Neutral",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size1AccentSolid: Story = {
  args: {
    size: 1,
    color: "Accent",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size1AccentOutline: Story = {
  args: {
    size: 1,
    color: "Accent",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size1AccentGhost: Story = {
  args: {
    size: 1,
    color: "Accent",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size1BrandSolid: Story = {
  args: {
    size: 1,
    color: "Brand",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size1BrandOutline: Story = {
  args: {
    size: 1,
    color: "Brand",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size1BrandGhost: Story = {
  args: {
    size: 1,
    color: "Brand",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size1ErrorSolid: Story = {
  args: {
    size: 1,
    color: "Error",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size1ErrorOutline: Story = {
  args: {
    size: 1,
    color: "Error",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size1ErrorGhost: Story = {
  args: {
    size: 1,
    color: "Error",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

// Size 2 combinations
export const Size2NeutralSolid: Story = {
  args: {
    size: 2,
    color: "Neutral",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size2NeutralOutline: Story = {
  args: {
    size: 2,
    color: "Neutral",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size2NeutralGhost: Story = {
  args: {
    size: 2,
    color: "Neutral",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size2AccentSolid: Story = {
  args: {
    size: 2,
    color: "Accent",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size2AccentOutline: Story = {
  args: {
    size: 2,
    color: "Accent",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size2AccentGhost: Story = {
  args: {
    size: 2,
    color: "Accent",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size2BrandSolid: Story = {
  args: {
    size: 2,
    color: "Brand",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size2BrandOutline: Story = {
  args: {
    size: 2,
    color: "Brand",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size2BrandGhost: Story = {
  args: {
    size: 2,
    color: "Brand",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size2ErrorSolid: Story = {
  args: {
    size: 2,
    color: "Error",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size2ErrorOutline: Story = {
  args: {
    size: 2,
    color: "Error",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size2ErrorGhost: Story = {
  args: {
    size: 2,
    color: "Error",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

// Size 3 combinations
export const Size3NeutralSolid: Story = {
  args: {
    size: 3,
    color: "Neutral",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size3NeutralOutline: Story = {
  args: {
    size: 3,
    color: "Neutral",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size3NeutralGhost: Story = {
  args: {
    size: 3,
    color: "Neutral",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size3AccentSolid: Story = {
  args: {
    size: 3,
    color: "Accent",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size3AccentOutline: Story = {
  args: {
    size: 3,
    color: "Accent",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size3AccentGhost: Story = {
  args: {
    size: 3,
    color: "Accent",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size3BrandSolid: Story = {
  args: {
    size: 3,
    color: "Brand",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size3BrandOutline: Story = {
  args: {
    size: 3,
    color: "Brand",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size3BrandGhost: Story = {
  args: {
    size: 3,
    color: "Brand",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

export const Size3ErrorSolid: Story = {
  args: {
    size: 3,
    color: "Error",
    variant: "Solid",
    button: "Process Order of N12,000",
  },
};

export const Size3ErrorOutline: Story = {
  args: {
    size: 3,
    color: "Error",
    variant: "Outline",
    button: "Process Order of N12,000",
  },
};

export const Size3ErrorGhost: Story = {
  args: {
    size: 3,
    color: "Error",
    variant: "Ghost",
    button: "Process Order of N12,000",
  },
};

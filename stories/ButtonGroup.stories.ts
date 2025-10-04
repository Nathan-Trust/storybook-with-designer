import Heart3Line from "@/icon/Heart3Line";
import ButtonGroup from "../components/ui/buttongroup";
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button-Group",
  component: ButtonGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    typeVariant: {
      control: { type: "select" },
      options: ["Single", "Group"],
    },
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
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single Button Stories
export const SingleBrandSolid: Story = {
  args: {
    typeVariant: "Single",
    size: 2,
    color: "Brand",
    variant: "Solid",
    button: "Single Button",
    showLeadingIcon: true,
    leadingIcon: React.createElement(Heart3Line),
  },
};

export const SingleNeutralOutline: Story = {
  args: {
    typeVariant: "Single",
    size: 2,
    color: "Neutral",
    variant: "Outline",
    button: "Single Button",
    showTrailingIcon: true,
    trailingIcon: React.createElement(Heart3Line),
  },
};

export const SingleAccentGhost: Story = {
  args: {
    typeVariant: "Single",
    size: 2,
    color: "Accent",
    variant: "Ghost",
    button: "Single Button",
    showLeadingIcon: true,
    showTrailingIcon: true,
    leadingIcon: React.createElement(Heart3Line),
    trailingIcon: React.createElement(Heart3Line),
  },
};

// Group Button Stories - Size 1
export const GroupSize1BrandSolid: Story = {
  args: {
    typeVariant: "Group",
    size: 1,
    color: "Brand",
    variant: "Solid",
    buttons: [
      {
        id: "download",
        button: "Download",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "share",
        button: "Share",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "settings",
        button: "Settings",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize1NeutralOutline: Story = {
  args: {
    typeVariant: "Group",
    size: 1,
    color: "Neutral",
    variant: "Outline",
    buttons: [
      {
        id: "prev",
        button: "Previous",
        onClick: fn(),
      },
      {
        id: "current",
        button: "Page 1",
        onClick: fn(),
      },
      {
        id: "next",
        button: "Next",
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize1AccentGhost: Story = {
  args: {
    typeVariant: "Group",
    size: 1,
    color: "Accent",
    variant: "Ghost",
    buttons: [
      {
        id: "bold",
        button: "B",
        onClick: fn(),
      },
      {
        id: "italic",
        button: "I",
        onClick: fn(),
      },
      {
        id: "underline",
        button: "U",
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize1ErrorSolid: Story = {
  args: {
    typeVariant: "Group",
    size: 1,
    color: "Error",
    variant: "Solid",
    buttons: [
      {
        id: "delete",
        button: "Delete",
        onClick: fn(),
      },
      {
        id: "remove",
        button: "Remove",
        onClick: fn(),
      },
    ],
  },
};

// Group Button Stories - Size 2
export const GroupSize2BrandSolid: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Brand",
    variant: "Solid",
    buttons: [
      {
        id: "save",
        button: "Save",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "share",
        button: "Share",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize2NeutralOutline: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Neutral",
    variant: "Outline",
    buttons: [
      {
        id: "draft",
        button: "Save as Draft",
        onClick: fn(),
      },
      {
        id: "publish",
        button: "Publish",
        onClick: fn(),
      },
      {
        id: "schedule",
        button: "Schedule",
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize2AccentGhost: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Accent",
    variant: "Ghost",
    buttons: [
      {
        id: "view",
        button: "View",
        onClick: fn(),
      },
      {
        id: "edit",
        button: "Edit",
        onClick: fn(),
      },
      {
        id: "delete",
        button: "Delete",
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize2ErrorOutline: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Error",
    variant: "Outline",
    buttons: [
      {
        id: "cancel",
        button: "Cancel Order",
        onClick: fn(),
      },
      {
        id: "refund",
        button: "Request Refund",
        onClick: fn(),
      },
    ],
  },
};

// Group Button Stories - Size 3
export const GroupSize3BrandSolid: Story = {
  args: {
    typeVariant: "Group",
    size: 3,
    color: "Brand",
    variant: "Solid",
    buttons: [
      {
        id: "create",
        button: "Create New",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "import",
        button: "Import",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize3NeutralOutline: Story = {
  args: {
    typeVariant: "Group",
    size: 3,
    color: "Neutral",
    variant: "Outline",
    buttons: [
      {
        id: "filter",
        button: "Filter Results",
        onClick: fn(),
      },
      {
        id: "sort",
        button: "Sort Options",
        onClick: fn(),
      },
      {
        id: "export",
        button: "Export Data",
        trailingIcon: React.createElement(Heart3Line),
        showTrailingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize3AccentGhost: Story = {
  args: {
    typeVariant: "Group",
    size: 3,
    color: "Accent",
    variant: "Ghost",
    buttons: [
      {
        id: "dashboard",
        button: "Dashboard",
        onClick: fn(),
      },
      {
        id: "analytics",
        button: "Analytics",
        onClick: fn(),
      },
      {
        id: "settings",
        button: "Settings",
        trailingIcon: React.createElement(Heart3Line),
        showTrailingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

export const GroupSize3ErrorSolid: Story = {
  args: {
    typeVariant: "Group",
    size: 3,
    color: "Error",
    variant: "Solid",
    buttons: [
      {
        id: "emergency",
        button: "Emergency Stop",
        onClick: fn(),
      },
      {
        id: "shutdown",
        button: "System Shutdown",
        onClick: fn(),
      },
    ],
  },
};

// Mixed configurations
export const GroupFourButtons: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Brand",
    variant: "Outline",
    buttons: [
      {
        id: "home",
        button: "Home",
        onClick: fn(),
      },
      {
        id: "about",
        button: "About",
        onClick: fn(),
      },
      {
        id: "services",
        button: "Services",
        onClick: fn(),
      },
      {
        id: "contact",
        button: "Contact",
        onClick: fn(),
      },
    ],
  },
};

export const GroupIconsOnly: Story = {
  args: {
    typeVariant: "Group",
    size: 2,
    color: "Neutral",
    variant: "Ghost",
    buttons: [
      {
        id: "heart",
        button: "",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "download",
        button: "",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "share",
        button: "",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
      {
        id: "settings",
        button: "",
        leadingIcon: React.createElement(Heart3Line),
        showLeadingIcon: true,
        onClick: fn(),
      },
    ],
  },
};

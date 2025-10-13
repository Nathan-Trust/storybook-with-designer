import React from "react";
import "../../index.css"; // Import Supernova design tokens
import "../../typography.css"; // Import Supernova typography styles

interface ButtonProps {
  size?: 3 | 2 | 1;
  color?: "Neutral" | "Accent" | "Brand" | "Error";
  leadingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  button?: string;
  variant?: "Solid" | "Outline" | "Ghost";
  onClick?: () => void;
}

const Button = ({
  size = 2,
  color = "Brand",
  leadingIcon,
  showLeadingIcon = false,
  trailingIcon,
  showTrailingIcon = false,
  button = "Button",
  variant = "Solid",
  onClick,
}: ButtonProps) => {
  // Get size-specific classes using CSS variables from measures.css
  const getSizeClasses = () => {
    switch (size) {
      case 1:
        return "h-button-small px-button-small rounded-button-small typography-body-xsmall-md";
      case 3:
        return "h-button-large px-button-large rounded-button-large typography-body-medium-md";
      default: // size 2
        return "h-button-medium px-button-medium rounded-button typography-body-sm-md";
    }
  };

  // Get color and variant specific classes using Supernova component button tokens
  const getColorVariantClasses = () => {
    const colorKey = color.toLowerCase();

    switch (variant) {
      case "Solid":
        switch (colorKey) {
          case "brand":
            return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border-components-button-brand-background-brand-solid hover:bg-brand-10 hover:border-brand-10";
          case "accent":
            return "bg-components-button-accent-background-accent-solid text-components-button-accent-color-text-solid border-components-button-accent-background-accent-solid hover:bg-orange-10 hover:border-orange-10";
          case "error":
            return "bg-components-button-error-background-error-solid text-components-button-error-color-text-solid border-components-button-error-background-error-solid hover:bg-red-10 hover:border-red-10";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-solid text-components-button-neutral-color-text-solid border-components-button-neutral-background-neutral-solid hover:bg-gray-10 hover:border-gray-10";
          default:
            return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border-components-button-brand-background-brand-solid";
        }

      case "Outline":
        switch (colorKey) {
          case "brand":
            return "bg-components-button-brand-background-brand-outline text-components-button-brand-color-text-outline border-components-button-brand-border-brand-outline hover:bg-brand-3 hover:text-brand-11";
          case "accent":
            return "bg-components-button-accent-background-accent-outline text-components-button-accent-color-text-outline border-components-button-accent-border-accent-outline hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-components-button-error-background-error-outline text-components-button-error-color-text-outline border-components-button-error-border-error-outline hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-outline text-components-button-neutral-color-text-outline border-components-button-neutral-border-neutral-outline hover:bg-gray-3 hover:text-gray-11";
          default:
            return "bg-components-button-brand-background-brand-outline text-components-button-brand-color-text-outline border-components-button-brand-border-brand-outline";
        }

      case "Ghost":
        switch (colorKey) {
          case "brand":
            return "bg-components-button-brand-background-brand-ghost text-components-button-brand-color-text-ghost border-transparent hover:bg-brand-3 hover:text-brand-11";
          case "accent":
            return "bg-components-button-accent-background-accent-ghost text-components-button-accent-color-text-ghost border-transparent hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-components-button-error-background-error-ghost text-components-button-error-color-text-ghost border-transparent hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-outline text-components-button-neutral-color-text-ghost border-transparent hover:bg-gray-3 hover:text-gray-11";
          default:
            return "bg-components-button-brand-background-brand-ghost text-components-button-brand-color-text-ghost border-transparent";
        }

      default:
        return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border-components-button-brand-background-brand-solid";
    }
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium leading-none border outline-none transition-all duration-200 ease-in-out cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-default focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5";

  const buttonClasses = `${baseClasses} ${getSizeClasses()} ${getColorVariantClasses()}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {showLeadingIcon && leadingIcon && (
        <span className="flex items-center flex-shrink-0 mr-2">
          {leadingIcon}
        </span>
      )}
      <span className="whitespace-nowrap">{button}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="flex items-center flex-shrink-0 ml-2">
          {trailingIcon}
        </span>
      )}
    </button>
  );
};

export default Button;

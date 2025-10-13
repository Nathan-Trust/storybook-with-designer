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

  // Get color and variant specific classes using Supernova tokens
  const getColorVariantClasses = () => {
    const colorKey = color.toLowerCase();

    switch (variant) {
      case "Solid":
        switch (colorKey) {
          case "brand":
            return "bg-brand-default text-neutral-white border-brand-default hover:bg-brand-10 hover:border-brand-10";
          case "accent":
            return "bg-accent-default text-neutral-white border-accent-default hover:bg-orange-10 hover:border-orange-10";
          case "error":
            return "bg-error-default text-neutral-white border-error-default hover:bg-red-10 hover:border-red-10";
          case "neutral":
            return "bg-neutral-default text-neutral-white border-neutral-default hover:bg-gray-10 hover:border-gray-10";
          default:
            return "bg-brand-default text-neutral-white border-brand-default";
        }

      case "Outline":
        switch (colorKey) {
          case "brand":
            return "bg-transparent text-brand-default border-brand-default hover:bg-brand-3 hover:text-brand-11";
          case "accent":
            return "bg-transparent text-accent-default border-accent-default hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-transparent text-error-default border-error-default hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-transparent text-neutral-default border-neutral-default hover:bg-gray-3 hover:text-gray-11";
          default:
            return "bg-transparent text-brand-default border-brand-default";
        }

      case "Ghost":
        switch (colorKey) {
          case "brand":
            return "bg-transparent text-brand-default border-transparent hover:bg-brand-3 hover:text-brand-11";
          case "accent":
            return "bg-transparent text-accent-default border-transparent hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-transparent text-error-default border-transparent hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-transparent text-neutral-default border-transparent hover:bg-gray-3 hover:text-gray-11";
          default:
            return "bg-transparent text-brand-default border-transparent";
        }

      default:
        return "bg-brand-default text-neutral-white border-brand-default";
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

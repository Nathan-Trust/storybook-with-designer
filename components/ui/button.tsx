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
  // Get size-specific styles using CSS variables from measures.css
  const getSizeStyles = () => {
    switch (size) {
      case 1:
        return {
          height: "var(--measure-dimension-scale-800, 32px)",
          paddingLeft: "var(--measure-dimension-scale-300, 12px)",
          paddingRight: "var(--measure-dimension-scale-300, 12px)",
          borderRadius:
            "var(--measure-border-radius-border-radius-medium, 4px)",
        };
      case 3:
        return {
          height: "calc(var(--measure-dimension-scale-600, 24px) * 2)",
          paddingLeft: "var(--measure-dimension-scale-600, 24px)",
          paddingRight: "var(--measure-dimension-scale-600, 24px)",
          borderRadius:
            "var(--measure-border-radius-border-radius-radius-button, 6px)",
        };
      default: // size 2
        return {
          height: "var(--measure-dimension-scale-900, 40px)",
          paddingLeft: "var(--measure-dimension-scale-400, 16px)",
          paddingRight: "var(--measure-dimension-scale-400, 16px)",
          borderRadius: "var(--measure-border-radius-border-radius-large, 8px)",
        };
    }
  };

  // Get typography classes based on size
  const getTypographyClass = () => {
    switch (size) {
      case 1:
        return "typography-body-xsmall-md";
      case 3:
        return "typography-body-medium-md";
      default: // size 2
        return "typography-body-sm-md";
    }
  };

  // Get color and variant specific classes using Supernova component button tokens
  const getColorVariantClasses = () => {
    const colorKey = color.toLowerCase();

    switch (variant) {
      case "Solid":
        switch (colorKey) {
          case "brand":
            return (
              "text-white border border-transparent hover:opacity-90 active:opacity-80" +
              " bg-[var(--color-green-default,#46a758)]"
            );
          case "accent":
            return "bg-components-button-accent-background-accent-solid text-components-button-accent-color-text-solid border-components-button-accent-background-accent-solid hover:bg-orange-10 hover:border-orange-10";
          case "error":
            return "bg-components-button-error-background-error-solid text-components-button-error-color-text-solid border-components-button-error-background-error-solid hover:bg-red-10 hover:border-red-10";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-solid text-components-button-neutral-color-text-solid border-components-button-neutral-background-neutral-solid hover:bg-gray-10 hover:border-gray-10";
          default:
            return (
              "text-white border border-transparent hover:opacity-90 active:opacity-80" +
              " bg-[var(--color-green-default,#46a758)]"
            );
        }

      case "Outline":
        switch (colorKey) {
          case "brand":
            return (
              "bg-transparent border hover:bg-[var(--color-green-3,#e8f7e9)]" +
              " text-[var(--color-green-default,#46a758)] border-[var(--color-green-default,#46a758)]"
            );
          case "accent":
            return "bg-components-button-accent-background-accent-outline text-components-button-accent-color-text-outline border-components-button-accent-border-accent-outline hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-components-button-error-background-error-outline text-components-button-error-color-text-outline border-components-button-error-border-error-outline hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-outline text-components-button-neutral-color-text-outline border-components-button-neutral-border-neutral-outline hover:bg-gray-3 hover:text-gray-11";
          default:
            return (
              "bg-transparent border hover:bg-[var(--color-green-3,#e8f7e9)]" +
              " text-[var(--color-green-default,#46a758)] border-[var(--color-green-default,#46a758)]"
            );
        }

      case "Ghost":
        switch (colorKey) {
          case "brand":
            return (
              "bg-transparent border-transparent hover:bg-[var(--color-green-3,#e8f7e9)]" +
              " text-[var(--color-green-default,#46a758)]"
            );
          case "accent":
            return "bg-components-button-accent-background-accent-ghost text-components-button-accent-color-text-ghost border-transparent hover:bg-orange-3 hover:text-orange-11";
          case "error":
            return "bg-components-button-error-background-error-ghost text-components-button-error-color-text-ghost border-transparent hover:bg-red-3 hover:text-red-11";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-outline text-components-button-neutral-color-text-ghost border-transparent hover:bg-gray-3 hover:text-gray-11";
          default:
            return (
              "bg-transparent border-transparent hover:bg-[var(--color-green-3,#e8f7e9)]" +
              " text-[var(--color-green-default,#46a758)]"
            );
        }

      default:
        return (
          "text-white border border-transparent hover:opacity-90 active:opacity-80" +
          " bg-[var(--color-green-default,#46a758)]"
        );
    }
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium leading-none border outline-none transition-all duration-200 ease-in-out cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-green-default,#46a758)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5";

  const buttonClasses = `${baseClasses} ${getTypographyClass()} ${getColorVariantClasses()}`;
  const sizeStyles = getSizeStyles();

  return (
    <button className={buttonClasses} style={sizeStyles} onClick={onClick}>
      {showLeadingIcon && leadingIcon && (
        <span className="flex items-center flex-shrink-0">{leadingIcon}</span>
      )}
      <span className="whitespace-nowrap">{button}</span>
      {showTrailingIcon && trailingIcon && (
        <span className="flex items-center flex-shrink-0">{trailingIcon}</span>
      )}
    </button>
  );
};

export default Button;

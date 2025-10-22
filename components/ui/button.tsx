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
  // Get size-specific classes using your exact spacing tokens
  const getSizeClasses = () => {
    switch (size) {
      case 1:
        return "h-800 px-300 rounded-radius-inputs"; // scale-800 = 32px, scale-300 = 12px
      case 3:
        return "h-1200 px-600 rounded-radius-button"; // scale-1200 = 48px, scale-600 = 24px
      default: // size 2
        return "h-900 px-400 rounded-radius-inputs-large"; // scale-900 = 40px, scale-400 = 16px
    }
  };

  // Get typography classes based on size
  const getTypographyClass = () => {
    switch (size) {
      case 1:
        return "text-paragraph-xs leading-paragraph-xs font-medium";
      case 3:
        return "text-paragraph-md leading-paragraph-md font-medium";
      default: // size 2
        return "text-paragraph-sm leading-paragraph-sm font-medium";
    }
  };

  // Get color and variant specific classes using components.button tokens
  const getColorVariantClasses = () => {
    const colorKey = color.toLowerCase();

    switch (variant) {
      case "Solid":
        switch (colorKey) {
          case "brand":
            return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border border-transparent hover:bg-brand-7 active:bg-brand-8";
          case "accent":
            return "bg-components-button-accent-background-accent-solid text-components-button-accent-color-text-solid border border-transparent hover:bg-accent-7 active:bg-accent-8";
          case "error":
            return "bg-components-button-error-background-error-solid text-components-button-error-color-text-solid border border-transparent hover:bg-error-7 active:bg-error-8";
          case "neutral":
            return "bg-components-button-neutral-background-neutral-solid text-components-button-neutral-color-text-solid border border-transparent hover:bg-neutral-7 active:bg-neutral-8";
          default:
            return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border border-transparent hover:bg-brand-7 active:bg-brand-8";
        }

      case "Outline":
        switch (colorKey) {
          case "brand":
            return "bg-transparent border border-components-button-brand-border-brand-outline text-components-button-brand-color-text-outline hover:bg-brand-1";
          case "accent":
            return "bg-transparent border border-components-button-accent-border-accent-outline text-components-button-accent-color-text-outline hover:bg-accent-1";
          case "error":
            return "bg-transparent border border-components-button-error-border-error-outline text-components-button-error-color-text-outline hover:bg-error-1";
          case "neutral":
            return "bg-transparent border border-components-button-neutral-border-neutral-outline text-components-button-neutral-color-text-outline hover:bg-neutral-1";
          default:
            return "bg-transparent border border-components-button-brand-border-brand-outline text-components-button-brand-color-text-outline hover:bg-brand-1";
        }

      case "Ghost":
        switch (colorKey) {
          case "brand":
            return "bg-components-button-brand-background-brand-ghost border border-transparent text-components-button-brand-color-text-ghost hover:bg-brand-1";
          case "accent":
            return "bg-components-button-accent-background-accent-ghost border border-transparent text-components-button-accent-color-text-ghost hover:bg-accent-1";
          case "error":
            return "bg-components-button-error-background-error-ghost border border-transparent text-components-button-error-color-text-ghost hover:bg-error-1";
          case "neutral":
            return "bg-transparent border border-transparent text-components-button-neutral-color-text-ghost hover:bg-neutral-1";
          default:
            return "bg-components-button-brand-background-brand-ghost border border-transparent text-components-button-brand-color-text-ghost hover:bg-brand-1";
        }

      default:
        return "bg-components-button-brand-background-brand-solid text-components-button-brand-color-text-solid border border-transparent hover:bg-brand-7 active:bg-brand-8";
    }
  };

  // Get icon color based on variant and color using components.button.icon tokens
  const getIconColor = () => {
    const colorKey = color.toLowerCase();

    switch (variant) {
      case "Solid":
        switch (colorKey) {
          case "brand":
            return "text-components-button-brand-icon-brand-solid";
          case "accent":
            return "text-components-button-accent-icon-accent-solid";
          case "error":
            return "text-components-button-error-icon-error-solid";
          case "neutral":
            return "text-components-button-neutral-icon-neutral-solid";
          default:
            return "text-components-button-brand-icon-brand-solid";
        }
      case "Outline":
        switch (colorKey) {
          case "brand":
            return "text-components-button-brand-icon-brand-outline";
          case "accent":
            return "text-components-button-accent-icon-accent-outline";
          case "error":
            return "text-components-button-error-icon-error-outline";
          case "neutral":
            return "text-components-button-neutral-icon-neutral-outline";
          default:
            return "text-components-button-brand-icon-brand-outline";
        }
      case "Ghost":
        switch (colorKey) {
          case "brand":
            return "text-components-button-brand-icon-brand-ghost";
          case "accent":
            return "text-components-button-accent-icon-accent-ghost";
          case "error":
            return "text-components-button-error-icon-error-ghost";
          case "neutral":
            return "text-components-button-neutral-icon-neutral-ghost";
          default:
            return "text-components-button-brand-icon-brand-ghost";
        }
      default:
        return "text-components-button-brand-icon-brand-solid";
    }
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-200 font-medium leading-none border outline-none transition-all duration-200 ease-in-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5";

  const sizeClasses = getSizeClasses();
  const typographyClass = getTypographyClass();
  const colorVariantClasses = getColorVariantClasses();
  const iconColorClass = getIconColor();

  const buttonClasses = `${baseClasses} ${sizeClasses} ${typographyClass} ${colorVariantClasses}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {showLeadingIcon && leadingIcon && (
        <span className={`flex items-center flex-shrink-0 ${iconColorClass}`}>
          {leadingIcon}
        </span>
      )}
      <span className="whitespace-nowrap">{button}</span>
      {showTrailingIcon && trailingIcon && (
        <span className={`flex items-center flex-shrink-0 ${iconColorClass}`}>
          {trailingIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
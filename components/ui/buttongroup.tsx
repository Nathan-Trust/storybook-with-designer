import React from "react";
import Button from "./button";
import "../../index.css"; // Import Supernova design tokens
import "../../typography.css"; // Import Supernova typography styles

interface ButtonConfig {
  id: string;
  button: string;
  leadingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  onClick?: () => void;
}

interface ButtonGroupProps {
  typeVariant?: "Single" | "Group";
  size?: 3 | 2 | 1;
  color?: "Neutral" | "Accent" | "Brand" | "Error";
  variant?: "Solid" | "Outline" | "Ghost";
  buttons?: ButtonConfig[];
  // Single button props (when typeVariant is "Single")
  button?: string;
  leadingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  onClick?: () => void;
}

const ButtonGroup = ({
  typeVariant = "Single",
  size = 2,
  color = "Brand",
  variant = "Solid",
  buttons = [],
  button = "Process Order of N12,000",
  leadingIcon,
  showLeadingIcon = false,
  trailingIcon,
  showTrailingIcon = false,
  onClick,
}: ButtonGroupProps) => {
  if (typeVariant === "Single") {
    return (
      <Button
        size={size}
        color={color}
        variant={variant}
        button={button}
        leadingIcon={leadingIcon}
        showLeadingIcon={showLeadingIcon}
        trailingIcon={trailingIcon}
        showTrailingIcon={showTrailingIcon}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="inline-flex gap-[30px]" role="group">
      {buttons.map((btnConfig, index) => (
        <Button
          key={btnConfig.id}
          size={size}
          color={color}
          variant={variant}
          button={btnConfig.button}
          leadingIcon={btnConfig.leadingIcon}
          showLeadingIcon={btnConfig.showLeadingIcon}
          trailingIcon={btnConfig.trailingIcon}
          showTrailingIcon={btnConfig.showTrailingIcon}
          onClick={btnConfig.onClick}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;

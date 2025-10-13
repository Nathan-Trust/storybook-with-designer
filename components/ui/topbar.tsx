import React from "react";
import "../../index.css";
import "../../typography.css";

interface TopBarProps {
  className?: string;
  property1?: "Web" | "Mobile";
}

const TopBar = ({ className, property1 = "Web" }: TopBarProps) => {
  const baseStyles = {
    backgroundColor: "var(--colors-neutral-accent-green, #b6e150)",
    padding: "var(--spacing-2, 8px) var(--spacing-8, 48px)",
  };

  return (
    <div className={className} style={baseStyles}>
      <div className="flex items-center justify-between max-w-[1464px] w-full mx-auto">
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[4px] items-center">
            <p className="typography-body-xsmall-md text-components-nav-items-text-color">
              How to Buy on Boifiok
            </p>
          </div>
          <div className="flex gap-[4px] items-center">
            <p className="typography-body-xsmall-md text-components-nav-items-text-color">
              Sell on Boifiok
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[20px] items-center">
            <div className="flex gap-[4px] items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                About Us
              </p>
            </div>
            <div className="flex gap-[4px] items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                Frequently Asked Questions
              </p>
            </div>
            <div className="flex gap-[4px] items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                Blogs
              </p>
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="w-[18px] h-[18px] overflow-hidden">
              {/* Language Icon placeholder */}
              <div className="w-full h-full bg-components-nav-items-icon-color opacity-60"></div>
            </div>
            <p className="typography-body-xsmall-md text-components-nav-items-text-color">
              English
            </p>
            <div className="w-[18px] h-[18px] overflow-hidden">
              {/* Dropdown Icon placeholder */}
              <div className="w-full h-full bg-components-nav-items-icon-color opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

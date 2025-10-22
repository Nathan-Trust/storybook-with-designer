import React from "react";
import "../../index.css";
import "../../typography.css";

interface TopBarProps {
  className?: string;
  property1?: "Web" | "Mobile";
}

const TopBar = ({ className, property1 = "Web" }: TopBarProps) => {
  return (
    <div
      className={`${className} bg-components-topbar-background py-200 px-400 md:px-800`}
    >
      <div className="flex items-center justify-between max-w-[1464px] w-full mx-auto">
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-100 items-center">
            <p className="typography-body-xsmall-md text-components-nav-items-text-color">
              How to Buy
            </p>
          </div>
          <div className="flex gap-100 items-center">
            <p className="typography-body-xsmall-md text-components-nav-items-text-color">
              Sell on Boifiok
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-[20px] items-center">
          <div className="flex gap-[20px] items-center">
            <div className="flex gap-100 items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                About Us
              </p>
            </div>
            <div className="flex gap-100 items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                FAQs
              </p>
            </div>
            <div className="flex gap-100 items-center">
              <p className="typography-body-xsmall-md text-components-nav-items-text-color">
                Blogs
              </p>
            </div>
          </div>
          <div className="flex gap-100 items-center">
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

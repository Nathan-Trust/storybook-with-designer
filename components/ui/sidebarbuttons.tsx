import React from "react";
import "../../index.css";
import "../../typography.css";
import { ICONS } from "../../figma-assets";

interface SidebarButtonsProps {
  className?: string;
}

const SidebarButtons = ({ className }: SidebarButtonsProps) => {
  const sidebarItemStyles = {
    width: "216px",
    height: "48px",
    borderRadius: "var(--radius-4, 8px)",
    padding: "0 var(--spacing-3, 12px)",
  };

  const activeIndicatorStyles = {
    position: "absolute" as const,
    left: "-36px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "4px",
    height: "20px",
    backgroundColor: "var(--components-sidebar-item-icon-active, #46a758)",
    borderRadius: "0 var(--radius-2, 4px) var(--radius-2, 4px) 0",
  };

  return (
    <div className={className}>
      {/* Home - Active */}
      <div
        className="relative flex gap-[10px] items-center"
        style={sidebarItemStyles}
      >
        <div className="w-[20px] h-[20px] overflow-hidden">
          <img
            src={ICONS.homeIcon}
            alt="Home"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <div className="w-full h-full bg-components-sidebar-item-icon-active hidden"></div>
        </div>
        <p className="typography-body-medium-md text-components-sidebar-item-text-color font-medium">
          Home
        </p>
        <div style={activeIndicatorStyles}></div>
      </div>

      {/* Search */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <img
            src={ICONS.searchIcon}
            alt="Search"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Search
        </p>
      </div>

      {/* Notifications */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <img
            src={ICONS.notificationsIcon}
            alt="Notifications"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Notifications
        </p>
      </div>

      {/* Orders */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <img
            src={ICONS.ordersIcon}
            alt="Orders"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Orders
        </p>
      </div>

      {/* Account */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <img
            src={ICONS.accountIcon}
            alt="Account"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Account
        </p>
      </div>
    </div>
  );
};

export default SidebarButtons;

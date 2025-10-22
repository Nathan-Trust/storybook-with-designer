import React from "react";
import "../../index.css";
import "../../typography.css";
import { ICONS } from "../../figma-assets";
import HomeIcon from "@/public/icon-components/Home";
import SearchIcon from "@/public/icon-components/Search";
import NotificationsIcon from "@/public/icon-components/Notifications";
import OrdersIcon from "@/public/icon-components/Orders";
import AccountIcon from "@/public/icon-components/Account";

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
    borderRadius: "0 var(--radius-2, 4px) var(--radius-2, 4px) 0",
  };

  return (
    <div className={className} style={{ width: "100%" }}>
      {/* Home - Active */}
      <div
        className="relative flex gap-[10px] items-center bg-components-sidebar-item-background-active"
        style={sidebarItemStyles}
      >
        <div className="w-[20px] h-[20px] overflow-hidden ">
          <div className="text-components-sidebar-item-icon-active">
            <HomeIcon />
          </div>{" "}
          <div className="w-full h-full bg-components-sidebar-item-icon-active hidden"></div>
        </div>
        <p className="typography-body-medium-md text-components-sidebar-item-text-active font-medium">
          Home
        </p>
        <div
          className="bg-components-sidebar-item-icon-active"
          style={activeIndicatorStyles}
        ></div>
      </div>

      {/* Search */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <div className="text-components-sidebar-item-icon-inactive">
            <SearchIcon />
          </div>{" "}
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Search
        </p>
      </div>

      {/* Notifications */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <div className="text-components-sidebar-item-icon-inactive">
            <NotificationsIcon />
          </div>{" "}
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Notifications
        </p>
      </div>

      {/* Orders */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <div className="text-components-sidebar-item-icon-inactive">
            <OrdersIcon />
          </div>{" "}
          <div className="w-full h-full bg-components-sidebar-item-icon-inactive hidden"></div>
        </div>
        <p className="typography-body-medium text-components-sidebar-item-text-color">
          Orders
        </p>
      </div>

      {/* Account */}
      <div className="flex gap-[10px] items-center" style={sidebarItemStyles}>
        <div className="w-[20px] h-[20px] overflow-hidden">
          <div className="text-components-sidebar-item-icon-inactive">
            <AccountIcon />
          </div>{" "}
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

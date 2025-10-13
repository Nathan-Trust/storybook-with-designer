import React from "react";
import "../../index.css";
import "../../typography.css";
import TopBar from "./topbar";
import { ICONS } from "../../figma-assets";

const Navfull = ({ className }: { className?: string }) => {
  const navStyles = {
    backgroundColor: "var(--surface-page, #ffffff)",
    padding: "var(--spacing-5, 24px) var(--spacing-8, 48px)",
    borderBottom: "1px solid var(--colors-gray-3, #f0f0f0)",
  };

  const searchStyles = {
    backgroundColor:
      "var(--components-inputs-background-default-surface, rgba(0, 0, 85, 0.02))",
    borderRadius: "var(--radius-2, 4px)",
    padding: "var(--spacing-1, 4px)",
    width: "432px",
    height: "32px",
  };

  const locationStyles = {
    backgroundColor:
      "var(--components-select-trigger-background-default, rgba(0, 0, 85, 0.02))",
    borderRadius: "var(--radius-2, 4px)",
    padding: "0 var(--spacing-3, 12px)",
    height: "32px",
  };

  const buttonStyles = {
    height: "var(--tokens-space-button-height-3, 40px)",
    borderRadius: "var(--border-radius-radius-button, 32px)",
    padding: "0 var(--spacing-4, 16px)",
  };

  return (
    <div className={className}>
      <div style={navStyles}>
        <div className="flex items-center justify-between max-w-[1464px] w-full mx-auto">
          <div className="flex gap-[24px] items-center">
            {/* Logo */}
            <div className="h-[24px] w-[96.297px] overflow-hidden">
              <img
                src={ICONS.logoSvg}
                alt="Boifiok Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to colored div if image fails to load
                  e.currentTarget.style.display = "none";
                //   e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="w-full h-full bg-components-nav-items-text-color opacity-80 hidden"></div>
            </div>

            {/* Location Selector */}
            <div style={locationStyles} className="flex gap-[8px] items-center">
              <div className="w-[16px] h-[16px] overflow-hidden">
                <img
                  src={ICONS.locationIcon}
                  alt="Location"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    // e.currentTarget.nextElementSibling.style.display = "block";
                  }}
                />
                <div className="w-full h-full bg-components-select-trigger-icon-default hidden"></div>
              </div>
              <p className="typography-body-small text-components-select-trigger-text-default opacity-50">
                Uyo
              </p>
              <div className="w-[16px] h-[16px] overflow-hidden">
                <img
                  src={ICONS.arrowDownIcon}
                  alt="Arrow"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    // e.currentTarget.nextElementSibling.style.display = "block";
                  }}
                />
                <div className="w-full h-full bg-components-select-trigger-icon-default hidden"></div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div style={searchStyles} className="flex items-center">
            <div className="flex items-center justify-center p-[4px]">
              <div className="w-[16px] h-[16px] overflow-hidden">
                <img
                  src={ICONS.searchIcon}
                  alt="Search"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    // e.currentTarget.nextElementSibling.style.display = "block";
                  }}
                />
                <div className="w-full h-full bg-components-inputs-icon hidden"></div>
              </div>
            </div>
            <div className="flex-1 px-[4px]">
              <p className="typography-body-small text-components-inputs-text-placeholder">
                Search Boifiok
              </p>
            </div>
            <div className="p-[4px]">
              <button
                style={{
                  borderRadius: "var(--border-radius-radius-button, 32px)",
                  width: "28px",
                  height: "28px",
                }}
                className="flex items-center justify-center"
              >
                <div className="w-[16px] h-[16px] overflow-hidden">
                  <img
                    src={ICONS.cancelIcon}
                    alt="Search"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    //   e.currentTarget.nextElementSibling.style.display =
                        "block";
                    }}
                  />
                  <div className="w-full h-full bg-components-nav-items-icon-color hidden"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex gap-[16px] items-center">
            {/* Watchlist Button */}
            <div
              style={{
                ...buttonStyles,
                backgroundColor:
                  "var(--components-cart-button-neutral-surface-neutral, transparent)",
                border:
                  "1px solid var(--components-cart-button-neutral-border-neutral, rgba(0, 6, 51, 0.2))",
              }}
              className="flex gap-[12px] items-center justify-center"
            >
              <div className="w-[18px] h-[18px] overflow-hidden">
                <img
                  src={ICONS.heartLineIcon}
                  alt="Watchlist"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    // e.currentTarget.nextElementSibling.style.display = "block";
                  }}
                />
                <div className="w-full h-full bg-components-cart-button-neutral-icon-neutral hidden"></div>
              </div>
              <p className="typography-body-sm-md text-components-cart-button-neutral-text-neutral">
                Watchlist
              </p>
              <div
                style={{
                  backgroundColor:
                    "var(--components-cart-button-neutral-surface-counter, rgba(0, 16, 64, 0.06))",
                  borderRadius: "var(--radius-1-max, 3px)",
                  padding: "var(--spacing-1, 4px) var(--spacing-2, 8px)",
                }}
              >
                <p className="typography-body-xsmall-md text-components-cart-button-neutral-text-neutral">
                  0
                </p>
              </div>
            </div>

            {/* Ongoing Orders Button */}
            <div
              style={{
                ...buttonStyles,
                backgroundColor:
                  "var(--components-cart-button-primary-surface-primary, rgba(0, 192, 0, 0.02))",
                border:
                  "1px solid var(--components-cart-button-primary-border-primary, rgba(1, 139, 15, 0.42))",
              }}
              className="flex gap-[12px] items-center justify-center"
            >
              <p className="typography-body-sm-md text-components-cart-button-primary-text-primary">
                Ongoing Orders
              </p>
              <div
                style={{
                  backgroundColor:
                    "var(--components-cart-button-primary-surface-counter-primary, rgba(0, 167, 12, 0.09))",
                  borderRadius: "var(--radius-1-max, 3px)",
                  padding: "var(--spacing-1, 4px) var(--spacing-2, 8px)",
                }}
              >
                <p className="typography-body-xsmall-md text-components-cart-button-primary-text-primary">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopBar />
    </div>
  );
};

export default Navfull;

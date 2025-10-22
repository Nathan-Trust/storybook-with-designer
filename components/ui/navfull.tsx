import React from "react";
import "../../index.css";
import "../../typography.css";
import TopBar from "./topbar";
import { ICONS } from "../../figma-assets";

const Navfull = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="bg-surface-page border-b border-gray-3 py-300 md:py-500 px-400 md:px-800">
        <div className="flex items-center justify-between max-w-[1464px] w-full mx-auto">
          <div className="flex gap-600 items-center flex-1">
            {/* Logo */}
            <div className="h-4 md:h-6 w-16 md:w-[96.297px] overflow-hidden">
              <img
                src={ICONS.logoSvg}
                alt="Boifiok Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="w-full h-full bg-components-nav-items-text-color opacity-80 hidden"></div>
            </div>

            {/* Location Selector */}
            <div className="bg-components-select-trigger-background-default rounded-medium px-300 h-8 flex gap-100 items-center">
              <div className="w-4 h-4 overflow-hidden">
                <img
                  src={ICONS.locationIcon}
                  alt="Location"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-components-select-trigger-icon-default hidden"></div>
              </div>
              <p className="typography-body-small text-components-select-trigger-text-default opacity-50">
                Uyo
              </p>
              <div className="w-4 h-4 overflow-hidden">
                <img
                  src={ICONS.arrowDownIcon}
                  alt="Arrow"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-components-select-trigger-icon-default hidden"></div>
              </div>
            </div>
          </div>

          {/* Mobile Search Icon */}
          <div className="md:hidden w-4 h-4 overflow-hidden">
            <img
              src={ICONS.searchIcon}
              alt="Search"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex bg-components-inputs-background-default-surface rounded-medium p-100 w-[432px] h-8 items-center">
            <div className="flex items-center justify-center p-100">
              <div className="w-4 h-4 overflow-hidden">
                <img
                  src={ICONS.searchIcon}
                  alt="Search"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-components-inputs-icon hidden"></div>
              </div>
            </div>
            <div className="flex-1 px-100">
              <p className="typography-body-small text-components-inputs-text-placeholder">
                Search Boifiok
              </p>
            </div>
            <div className="p-100">
              <button className="flex items-center justify-center rounded-radius-button w-7 h-7">
                <div className="w-4 h-4 overflow-hidden">
                  <img
                    src={ICONS.cancelIcon}
                    alt="Search"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="w-full h-full bg-components-nav-items-icon-color hidden"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Actions */}
          <div className="hidden md:flex gap-400 items-center">
            {/* Watchlist Button */}
            <div className="h-10 px-400 rounded-radius-button bg-components-cart-button-neutral-surface-neutral border border-components-cart-button-neutral-border-neutral flex gap-300 items-center justify-center">
              <div className="w-[18px] h-[18px] overflow-hidden">
                <img
                  src={ICONS.heartLineIcon}
                  alt="Watchlist"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-components-cart-button-neutral-icon-neutral hidden"></div>
              </div>
              <p className="typography-body-sm-md text-components-cart-button-neutral-text-neutral">
                Watchlist
              </p>
              <div className="bg-components-cart-button-neutral-surface-counter rounded-radius-badges p-100 px-200">
                <p className="typography-body-xsmall-md text-components-cart-button-neutral-text-neutral">
                  0
                </p>
              </div>
            </div>

            {/* Ongoing Orders Button */}
            <div className="h-10 px-400 rounded-radius-button bg-components-cart-button-primary-surface-primary border border-components-cart-button-primary-border-primary flex gap-300 items-center justify-center">
              <p className="typography-body-sm-md text-components-cart-button-primary-text-primary">
                Ongoing Orders
              </p>
              <div className="bg-components-cart-button-primary-surface-counter-primary rounded-radius-badges p-100 px-200">
                <p className="typography-body-xsmall-md text-components-cart-button-primary-text-primary">
                  0
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-surface-action rounded-radius-button w-8 h-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3.2H14M2 8H14M2 12.8H14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <TopBar />
    </div>
  );
};

export default Navfull;

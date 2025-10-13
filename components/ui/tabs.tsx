"use client";
import React, { useState } from "react";
import "../../index.css";
import "../../typography.css";

interface TabsProps {
  className?: string;
}

const Tabs = ({ className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("Discover");

  const tabs = ["Discover", "Following", "Final Call", "New Sales"];

  const containerStyles = {
    height: "32px",
    width: "100%",
    maxWidth: "774px",
    position: "relative" as const,
    overflow: "hidden",
  };

  const underlineStyles = {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    backgroundColor: "var(--components-tab-outline, rgba(0, 7, 53, 0.15))",
  };

  const tabTriggerStyles = (isActive: boolean) => ({
    flex: "1",
    minWidth: "120px",
    height: "32px",
    padding: "0 var(--spacing-1, 4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    cursor: "pointer",
  });

  const activeIndicatorStyles = {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: "-0.5px",
    height: "2px",
    backgroundColor:
      "var(--components-tab-tab-trigger-color-selector, #46a758)",
  };

  const tabContentStyles = (isActive: boolean) => ({
    padding: "var(--spacing-1, 4px)",
    borderRadius: "var(--radius-1, 3px)",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-2, 8px)",
  });

  return (
    <div className={className} style={containerStyles}>
      <div style={underlineStyles}></div>
      <div className="flex h-full items-center">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            style={tabTriggerStyles(activeTab === tab)}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && <div style={activeIndicatorStyles}></div>}
            <div style={tabContentStyles(activeTab === tab)}>
              <p
                className={`typography-body-xsmall-md ${
                  activeTab === tab
                    ? "text-components-tab-tab-trigger-text-active"
                    : "text-components-tab-tab-trigger-text-default"
                }`}
              >
                {tab}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

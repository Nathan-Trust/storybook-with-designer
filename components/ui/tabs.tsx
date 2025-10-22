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

  return (
    <div
      className={`${className} relative h-8 w-full max-w-full md:max-w-[774px] overflow-hidden`}
    >
      <div className="bg-components-tab-outline absolute bottom-0 left-0 right-0 h-px"></div>
      <div className="flex h-full items-center">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="flex-1 min-w-[80px] md:min-w-[120px] h-8 px-100 flex items-center justify-center relative cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <div className="bg-components-tab-tab-trigger-color-selector absolute bottom-0 left-0 right-[-0.5px] h-[2px]"></div>
            )}
            <div className="p-100 rounded-radius-1 h-5 flex items-center justify-center gap-100">
              <p
                className={`typography-body-xsmall-md whitespace-nowrap ${
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

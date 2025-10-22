"use client";
import React from "react";
import "../../index.css";
import "../../typography.css";
import Navfull from "../ui/navfull";
import SidebarButtons from "../ui/sidebarbuttons";
import CategoryGrid from "../ui/categorygrid";
import Tabs from "../ui/tabs";
import ProductCard from "../ui/productcard";
import Cart from "../ui/cart";
import Footer from "../ui/footer";
import { ICONS } from "../../figma-assets";

const Demo = () => {
  return (
    <div className="bg-surface-page min-h-screen w-full flex flex-col">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navfull />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[276px_1fr_390px] gap-0 w-full max-w-[1440px] mx-auto mt-[98px] md:mt-[126px] h-auto md:h-[calc(100vh-126px)] overflow-visible md:overflow-hidden">
        {/* Sidebar - Desktop Only */}
        <div className="hidden md:flex border-r border-gray-3 py-500 px-300 pl-[36px] h-full overflow-visible items-start">
          <SidebarButtons />
        </div>

        {/* Main Content Area - Scrollable */}
        <div className="flex flex-col w-full h-auto md:h-full overflow-y-visible md:overflow-y-auto overflow-x-hidden">
          {/* Product Categories and Tabs */}
          <div className="bg-components-product-card-background-surface w-full flex flex-col gap-[10px]">
            <CategoryGrid />
            <Tabs />
          </div>

          {/* Product Feed */}
          <div className="flex flex-col gap-[32px] md:gap-[64px] items-center p-[10px_16px] md:p-[10px_24px] w-full">
            {/* Product Cards */}
            <ProductCard
              variant="basic"
              farmName="Sampson Farms"
              timeAgo="3 hours ago"
              productName="Product Name"
              price="N12,050"
              priceUnit="Per portion"
              availability="3 / 5 Portions Available"
              deliveryDate="25 Nov 2024"
              showFollowButton={true}
              isFollowing={false}
            />

            <ProductCard
              variant="basic"
              farmName="Sampson Farms"
              timeAgo="3 hours ago"
              productName="Product Name"
              price="N12,050"
              priceUnit="Per portion"
              availability="3 / 5 Portions Available"
              deliveryDate="25 Nov 2024"
              showFollowButton={true}
              isFollowing={false}
            />

            <ProductCard
              variant="detailed"
              farmName="Sampson Farms"
              timeAgo="3 hours ago"
              productName="Product Name"
              price="N12,050"
              priceUnit="Per portion"
              availability="3 / 5 Portions Available"
              deliveryDate="25 Nov 2024"
              description="Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings."
              showFollowButton={true}
              isFollowing={true}
              showCallout={true}
              calloutText="Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings."
            />

            {/* Load More Button */}
            <div className="bg-gray-alpha-9 rounded-radius-3 p-200 flex gap-200 items-center cursor-pointer">
              <img
                src={ICONS.loadMoreIcon}
                alt=""
                className="w-[20px] h-[20px]"
              />
              <p className="typography-body-small text-text-on-action-white">
                Load More
              </p>
            </div>
          </div>
        </div>

        {/* Cart Sidebar - Desktop Only */}
        <div className="hidden md:block h-full overflow-hidden p-500">
          <Cart />
        </div>
      </div>

      {/* Footer - After scrollable content */}
      <Footer />
    </div>
  );
};

export default Demo;

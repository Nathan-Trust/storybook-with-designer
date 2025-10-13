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
  const mainLayoutStyles = {
    backgroundColor: "var(--surface-page, #ffffff)",
    minHeight: "100vh",
    position: "relative" as const,
    // overflowX: "hidden",
    width: "100%",
  };

  const contentLayoutStyles = {
    display: "flex",
    gap: "var(--spacing-3, 12px)",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "122.67px", // Account for fixed header height
    padding: "0 var(--spacing-4, 16px)",
    maxWidth: "100vw",
    overflow: "hidden",
  };

  const sidebarStyles = {
    borderRight: "1px solid var(--colors-gray-3, #f0f0f0)",
    padding: "var(--spacing-5, 24px)",
    width: "240px",
    minWidth: "240px",
    flexShrink: 0,
  };

  const mainContentStyles = {
    flex: "1",
    maxWidth: "774px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-4, 16px)",
    minWidth: 0, // Allows flex item to shrink below content size
  };

  const productListStyles = {
    backgroundColor:
      "var(--components-product-card-background-surface, #ffffff)",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  };

  const productFeedStyles = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-6, 32px)",
    alignItems: "stretch",
    padding: "var(--spacing-3, 12px)",
    width: "100%",
  };

  const loadMoreStyles = {
    backgroundColor: "var(--overlays-black-alpha-3, rgba(0, 0, 0, 0.45))",
    borderRadius: "var(--radius-3, 6px)",
    padding: "var(--spacing-2, 8px)",
    display: "flex",
    gap: "var(--spacing-2, 8px)",
    alignItems: "center",
  };

  return (
    <div style={mainLayoutStyles}>
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navfull />
      </div>

      {/* Main Content */}
      <div style={contentLayoutStyles}>
        <div className="flex items-start w-full max-w-[1440px] mx-auto">
          {/* Sidebar */}
          <div style={sidebarStyles} className="hidden lg:block">
            <SidebarButtons />
          </div>

          {/* Main Content Area */}
          <div style={mainContentStyles}>
            {/* Product Categories and Tabs */}
            <div style={productListStyles}>
              <CategoryGrid />
              <Tabs />
            </div>

            {/* Product Feed */}
            <div style={productFeedStyles}>
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
              <div style={loadMoreStyles} className="self-center">
                <img
                  src={ICONS.loadMoreIcon}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <p className="typography-body-small text-white">Load More</p>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="hidden xl:block">
            <Cart />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default Demo;

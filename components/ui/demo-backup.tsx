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
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
  };

  const contentContainerStyles = {
    display: "grid",
    gridTemplateColumns: "276px 1fr 390px",
    gap: "0",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    marginTop: "126px", // Account for fixed navbar
    minHeight: "calc(100vh - 126px)",
  };

  const sidebarStyles = {
    borderRight: "1px solid var(--colors-gray-3, #f0f0f0)",
    padding: "var(--spacing-5, 24px) 0",
    height: "100%",
    position: "sticky" as const,
    top: "126px",
    alignSelf: "flex-start",
  };

  const mainContentStyles = {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    maxWidth: "774px",
    margin: "0 auto",
    height: "calc(100vh - 126px)", // Full height minus navbar
    overflow: "hidden" as const, // No scroll on main container
  };

  const productListHeaderStyles = {
    backgroundColor:
      "var(--components-product-card-background-surface, #ffffff)",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    flexShrink: 0, // Don't shrink this section
  };

  const productFeedStyles = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-9, 64px)",
    alignItems: "center",
    padding: "var(--spacing-5, 24px) 47px",
    width: "100%",
    flex: 1, // Take remaining space
    overflowY: "auto" as const, // Only this scrolls
    overflowX: "hidden" as const,
  };

  const loadMoreStyles = {
    backgroundColor: "var(--colors-gray-alpha-9, rgba(0, 0, 0, 0.45))",
    borderRadius: "var(--radius-3, 6px)",
    padding: "var(--spacing-2, 8px)",
    display: "flex",
    gap: "var(--spacing-2, 8px)",
    alignItems: "center",
    cursor: "pointer",
  };

  const cartStyles = {
    height: "100%",
    position: "sticky" as const,
    top: "126px",
    alignSelf: "flex-start",
  };

  return (
    <div style={mainLayoutStyles}>
      {/* Fixed Navigation */}
      <div
        style={{
          position: "fixed" as const,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <Navfull />
      </div>

      {/* Main Content Grid */}
      <div style={contentContainerStyles}>
        {/* Sidebar */}
        <div style={sidebarStyles}>
          <SidebarButtons />
        </div>

        {/* Main Content Area - Scrollable */}
        <div style={mainContentStyles}>
          {/* Product Categories and Tabs */}
          <div style={productListHeaderStyles}>
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
            <div style={loadMoreStyles}>
              <img
                src={ICONS.loadMoreIcon}
                alt=""
                className="w-[20px] h-[20px]"
              />
              <p
                style={{
                  fontFamily:
                    "var(--font-family-paragraph, 'Geist', sans-serif)",
                  fontWeight: 400,
                  fontSize: "var(--typography-font-size-2, 14px)",
                  lineHeight: "var(--typography-line-height-2, 20px)",
                  color: "var(--text-on-action-white, #ffffff)",
                  letterSpacing: "var(--typography-letter-spacing-2, 0px)",
                }}
              >
                Load More
              </p>
            </div>
          </div>
        </div>

        {/* Cart Sidebar */}
        <div style={cartStyles}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Demo;

import React from "react";
import "../../index.css";
import "../../typography.css";
import { IMAGES, ICONS } from "../../figma-assets";

interface CartProps {
  className?: string;
  itemCount?: number;
}

const Cart = ({ className, itemCount = 0 }: CartProps) => {
  const cartStyles = {
    border: "0 0 0 1px solid var(--colors-gray-3, #f0f0f0)",
    padding:
      "var(--spacing-5, 24px) var(--spacing-8, 48px) var(--spacing-5, 24px) var(--spacing-5, 24px)",
    width: "390px",
    height: "848px",
  };

  const emptyStateStyles = {
    padding: "var(--spacing-7, 40px) 0",
  };

  return (
    <div className={className} style={cartStyles}>
      {/* Cart Header */}
      <div className="flex items-center justify-between mb-[25px]">
        <div className="flex gap-[8px] items-center">
          <div className="w-[22px] h-[22px] overflow-hidden">
            <img
              src={ICONS.cartMainIcon}
              alt="Cart"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                // e.currentTarget.nextElementSibling.style.display = "block";
              }}
            />
            <div className="w-full h-full bg-components-product-card-heading-text hidden"></div>
          </div>
          <p className="typography-body-medium-md text-components-product-card-heading-text">
            Cart
          </p>
        </div>
        <p className="typography-body-sm-md text-components-product-card-body-text">
          {itemCount} Items
        </p>
      </div>

      {/* Cart Content - Empty State */}
      {itemCount === 0 && (
        <div
          className="flex flex-col gap-[25px] items-center"
          style={emptyStateStyles}
        >
          {/* Empty Cart Illustration */}
          <div className="w-[117px] h-[100px] overflow-hidden">
            <img
              src={IMAGES.emptyCart}
              alt="Empty Cart"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to placeholder if real image fails
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget
                  .nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <div
              className="w-full h-full hidden"
              style={{
                background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjBGMEYwIiByeD0iMTAiLz4KPHN2ZyB4PSIyNSIgeT0iMjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIj4KPHA+UGxhY2Vob2xkZXIgZm9yIGVtcHR5IGNhcnQgaWxsdXN0cmF0aW9uPC9wPgo8L3N2Zz4KPC9zdmc+")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            ></div>
          </div>

          {/* Empty State Message */}
          <div className="flex flex-col gap-[4px] items-center">
            <p className="typography-body-medium-md text-components-product-card-heading-text">
              Cart is Empty
            </p>
            <p className="typography-body-small text-components-product-card-body-text text-center w-[232px]">
              Your cart is empty try browsing products then add them here
            </p>
          </div>
        </div>
      )}

      {/* Cart Content - With Items (placeholder for future implementation) */}
      {itemCount > 0 && (
        <div className="flex flex-col gap-[16px]">
          <p className="typography-body-small text-components-product-card-body-text">
            Cart items will be displayed here
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React from "react";
import "../../index.css";
import "../../typography.css";
import Button from "./button";
import { ICONS, IMAGES } from "../../figma-assets";

interface ProductCardProps {
  className?: string;
  farmName?: string;
  timeAgo?: string;
  productName?: string;
  price?: string;
  priceUnit?: string;
  availability?: string;
  deliveryDate?: string;
  description?: string;
  variant?: "basic" | "detailed";
  showFollowButton?: boolean;
  isFollowing?: boolean;
  showCallout?: boolean;
  calloutText?: string;
}

const ProductCard = ({
  className,
  farmName = "Sampson Farms",
  timeAgo = "3 hours ago",
  productName = "Product Name",
  price = "N12,050",
  priceUnit = "Per portion",
  availability = "3 / 5 Portions Available",
  deliveryDate = "25 Nov 2024",
  description,
  variant = "basic",
  showFollowButton = true,
  isFollowing = false,
  showCallout = false,
  calloutText = "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
}: ProductCardProps) => {
  const cardStyles = {
    backgroundColor:
      "var(--components-product-card-background-surface, #ffffff)",
    border: "1px solid var(--colors-gray-2, #f9f9f9)",
    borderRadius: "var(--border-radius-radius-product-cards, 8px)",
    padding: "26px var(--spacing-5, 24px) var(--spacing-3, 12px)",
    width: "660px",
  };

  const avatarStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "var(--border-radius-radius-avatars, 6px)",
    backgroundColor: "#f0f0f0",
  };

  const imageStyles = {
    width: "100%",
    height: "410px",
    borderRadius: "var(--radius-3, 6px)",
    backgroundColor: "var(--images-1, #ffffff)",
    background:
      "linear-gradient(135deg, #ff6b9d 0%, #c44569 25%, #778beb 50%, #546de5 75%, #fd79a8 100%)",
    position: "relative" as const,
  };

  const badgeStyles = {
    backgroundColor:
      "var(--components-badge-success-background-success-soft, rgba(0, 167, 12, 0.09))",
    borderRadius: "var(--border-radius-radius-badges, 4px)",
    padding: "var(--spacing-1, 4px) var(--spacing-2, 8px)",
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-2, 8px)",
  };

  const progressBarStyles = {
    backgroundColor:
      "var(--colors-neutral-neutral-alpha-3, rgba(0, 0, 51, 0.06))",
    height: "8px",
    borderRadius: "9999px",
    position: "relative" as const,
    overflow: "hidden" as const,
  };

  const progressFillStyles = {
    backgroundColor: "var(--colors-orange-9, #f76b15)",
    height: "100%",
    width: "75%",
  };

  const calloutStyles = {
    backgroundColor:
      "var(--components-callout-information-background-information, rgba(0, 116, 255, 0.09))",
    border:
      "1px solid var(--components-callout-information-outline-information, rgba(0, 116, 255, 0.09))",
    borderRadius: "var(--border-radius-radius-callouts, 6px)",
    padding: "var(--spacing-3, 12px)",
  };

  const carouselTrackerStyles = {
    position: "absolute" as const,
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "var(--overlays-black-alpha-3, rgba(0, 0, 0, 0.45))",
    borderRadius: "var(--radius-3, 6px)",
    padding: "var(--spacing-2, 8px)",
    display: "flex",
    gap: "var(--spacing-2, 8px)",
  };

  return (
    <div className={className} style={cardStyles}>
      {/* Header */}
      <div className="flex items-center justify-between mb-[12px]">
        <div className="flex gap-[7px] items-start w-[357px]">
          <div className="flex gap-[8px] items-center flex-1">
            <div style={avatarStyles}>
              <img
                src="/images/grains.png"
                alt="Sampson Farms"
                className="w-full h-full object-cover rounded-[6px]"
                onError={(e) => {
                  // Fallback to background color if image fails to load
                  e.currentTarget.style.display = "none";
                //   e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="w-full h-full bg-gray-300 rounded-[6px] hidden"></div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center w-full">
                <div className="flex flex-col">
                  <p className="typography-body-medium-md text-components-product-card-heading-text">
                    {farmName}
                  </p>
                  <p className="typography-body-small text-components-product-card-body-text">
                    {timeAgo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showFollowButton && (
          <Button
            size={1}
            variant="Ghost"
            color="Neutral"
            button={isFollowing ? "Unfollow" : "Follow"}
          />
        )}
      </div>

      {/* Product Details for detailed variant */}
      {variant === "detailed" && (
        <div className="flex flex-col gap-[16px] mb-[16px]">
          <div className="flex flex-col gap-[4px]">
            <p className="typography-body-large-semibold text-components-product-card-heading-text w-full">
              {productName}
            </p>
            {description && (
              <p className="typography-body-small text-components-product-card-body-text w-full">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[4px] items-center">
              <p className="typography-body-medium text-components-product-card-heading-text">
                {price}
              </p>
              <p className="typography-body-xsmall text-components-product-card-body-text">
                {priceUnit}
              </p>
            </div>

            <div className="flex gap-[48px] items-center">
              <div className="flex gap-[8px] items-center flex-1">
                <div style={progressBarStyles} className="flex-1">
                  <div style={progressFillStyles}></div>
                </div>
                <p className="typography-body-medium text-components-product-card-body-text">
                  {availability}
                </p>
              </div>
              <div style={badgeStyles}>
                <div className="w-[12px] h-[12px] bg-components-badge-success-icon-success-brand"></div>
                <p className="typography-body-xsmall-md text-components-badge-success-text-success-brand">
                  Estimated Delivery: {deliveryDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Callout */}
      {showCallout && (
        <div style={calloutStyles} className="mb-[10px]">
          <div className="flex gap-[4px] items-center mb-[8px]">
            <div className="w-[20px] h-[20px] bg-components-callout-information-icon-information"></div>
            <p className="typography-body-sm-md text-components-callout-information-header-text-information flex-1">
              What is in a Portion
            </p>
          </div>
          <p className="typography-body-small text-components-callout-information-text-information">
            {calloutText}
          </p>
        </div>
      )}

      {/* Product Image */}
      <div className="flex flex-col gap-[10px] mb-[16px]">
        <div style={imageStyles}>
          <div style={carouselTrackerStyles}>
            <img
              src={ICONS.carouselActiveIcon}
              alt=""
              className="w-[8px] h-[8px]"
            />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-[8px] h-[8px] opacity-50"
            />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-[8px] h-[8px] opacity-50"
            />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-[8px] h-[8px] opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Product Details for basic variant */}
      {variant === "basic" && (
        <div className="flex flex-col gap-[16px] mb-[16px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <p className="typography-body-large-semibold text-components-product-card-heading-text">
                {productName}
              </p>
              <div style={badgeStyles}>
                <div className="w-[12px] h-[12px] bg-components-badge-success-icon-success-brand"></div>
                <p className="typography-body-xsmall-md text-components-badge-success-text-success-brand">
                  Estimated Delivery: {deliveryDate}
                </p>
              </div>
            </div>

            <div className="flex gap-[4px] items-center justify-between w-full">
              <div className="flex flex-col gap-[4px] justify-center">
                <div className="flex gap-[4px] items-center">
                  <p className="typography-body-large-semibold text-components-product-card-price-text">
                    {price}
                  </p>
                  <p className="typography-body-xsmall text-components-product-card-body-text">
                    {priceUnit}
                  </p>
                </div>
              </div>

              <div className="flex gap-[16px] items-center flex-1">
                <div className="flex gap-[4px] items-center flex-1">
                  <div className="w-[4px] h-[4px] bg-components-product-card-body-text rounded-full"></div>
                  <p className="typography-body-sm-md text-components-product-card-body-text">
                    {availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-start justify-between pt-[16px]">
        <div className="flex gap-[12px] items-start">
          <Button
            size={1}
            variant="Ghost"
            color="Neutral"
            button="Buy Later"
            leadingIcon={
              <img
                src={ICONS.heartLineIcon}
                alt="Buy Later"
                className="w-[20px] h-[20px]"
              />
            }
            showLeadingIcon={true}
          />
          <Button
            size={1}
            variant="Ghost"
            color="Neutral"
            button="Share"
            leadingIcon={
              <img
                src={ICONS.shareIcon}
                alt="Share"
                className="w-[20px] h-[20px]"
              />
            }
            showLeadingIcon={true}
          />
        </div>
        <Button size={1} variant="Solid" color="Brand" button="Buy" />
      </div>
    </div>
  );
};

export default ProductCard;

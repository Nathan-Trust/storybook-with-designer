import React from "react";
import "../../index.css";
import "../../typography.css";
import Button from "./button";
import { ICONS } from "../../figma-assets";

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
  return (
    <div
      className={`${className} bg-components-product-card-background-surface md:border md:shadow md:shadow-neutral-neutral-alpha-5 md:border-gray-2 rounded-radius-product-cards pt-[26px] pb-300 w-full max-w-[361px] md:max-w-[600px] px-0 md:px-500`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-300 w-full px-0">
        <div className="flex gap-[7px] items-start w-full md:w-[357px]">
          <div className="flex gap-100 items-center flex-1">
            <div className="bg-gray-3 w-10 h-10 rounded-radius-avatars">
              <img
                src="/images/grains.png"
                alt="Sampson Farms"
                className="w-full h-full object-cover rounded-radius-avatars"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="w-full h-full bg-gray-300 rounded-radius-avatars hidden"></div>
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
        <div className="flex flex-col gap-400 mb-400 px-0">
          <div className="flex flex-col gap-100">
            <p className="typography-body-large-semibold text-components-product-card-heading-text w-full">
              {productName}
            </p>
            {description && (
              <p className="typography-body-small text-components-product-card-body-text w-full">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col  gap-100">
            <div className="flex gap-100 items-center">
              <p className="typography-body-medium text-components-product-card-heading-text">
                {price}
              </p>
              <p className="typography-body-xsmall text-components-product-card-body-text">
                {priceUnit}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-[48px] md:items-center">
              <div className="flex gap-100 items-center flex-1 ">
                <div className="bg-neutral-neutral-alpha-3 h-2 rounded-full flex-1 relative overflow-hidden">
                  <div className="bg-orange-9 h-full w-3/4"></div>
                </div>
                <p className="typography-body-xsmall md:typography-body-medium text-components-product-card-body-text">
                  {availability}
                </p>
              </div>
              <div className="bg-components-badge-success-background-success-soft rounded-radius-badges p-100 px-200 flex gap-100 items-center w-fit">
                <div className="w-3 h-3 bg-components-badge-success-icon-success-brand"></div>
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
        <div className="bg-components-callout-information-background-information border border-components-callout-information-outline-information rounded-radius-callouts p-300 mb-[10px] mx-0 md:mx-0">
          <div className="flex gap-100 items-center mb-100">
            <div className="w-5 h-5 bg-components-callout-information-icon-information"></div>
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
      <div className="flex flex-col gap-[10px] mb-400 px-0">
        <div className="bg-gradient-to-br from-[#ff6b9d] via-[#778beb] to-[#fd79a8] w-full h-[251px] md:h-[410px] rounded-medium relative mx-0">
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-45 rounded-medium p-200 flex gap-200">
            <img src={ICONS.carouselActiveIcon} alt="" className="w-2 h-2" />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-2 h-2 opacity-50"
            />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-2 h-2 opacity-50"
            />
            <img
              src={ICONS.carouselInactiveIcon}
              alt=""
              className="w-2 h-2 opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Product Details for basic variant */}
      {variant === "basic" && (
        <div className="flex flex-col gap-400 mb-400 px-0">
          <div className="flex flex-col gap-100">
            <div className="flex flex-row items-center justify-between gap-200">
              <p className="typography-body-medium-md md:typography-body-large-semibold text-components-product-card-heading-text">
                {productName}
              </p>
              <div className="bg-components-badge-success-background-success-soft rounded-radius-badges p-100 px-200 flex flex-wrap md:flex-nowrap gap-200 md:gap-100 items-center">
                <div className="w-3 h-3 bg-components-badge-success-icon-success-brand"></div>
                <p className="typography-body-xsmall-md text-components-badge-success-text-success-brand">
                  Estimated Delivery: {deliveryDate}
                </p>
              </div>
            </div>

            <div className="flex gap-100 items-center justify-between w-full">
              <div className="flex flex-col gap-100 justify-center">
                {/* <div className="flex gap-100 items-center">
                  <p className="typography-body-large-semibold text-components-product-card-price-text">
                    {price}
                  </p>
                  <p className="typography-body-xsmall text-components-product-card-body-text">
                    {priceUnit}
                  </p>
                </div> */}
                <div className="flex gap-100 items-center">
                  <p className="typography-body-medium text-components-product-card-price-text">
                    {price}
                  </p>
                  <p className="typography-body-xsmall text-components-product-card-body-text">
                    {priceUnit}
                  </p>
                </div>
              </div>

              <div className="flex gap-400 items-center flex-1">
                <div className="flex gap-100 items-center flex-1">
                  <div className="w-1 h-1 bg-components-product-card-body-text rounded-full"></div>
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
      <div className="flex items-start justify-between pt-400 md:pt-400 px-0">
        <div className="flex gap-300 items-start">
          <Button
            size={1}
            variant="Ghost"
            color="Neutral"
            button="Buy Later"
            leadingIcon={
              <img
                src={ICONS.heartLineIcon}
                alt="Buy Later"
                className="w-5 h-5"
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
              <img src={ICONS.shareIcon} alt="Share" className="w-5 h-5" />
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

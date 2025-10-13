import React from "react";
import "../../index.css";
import "../../typography.css";
import { IMAGES } from "../../figma-assets";

interface CategoryCardProps {
  name: string;
  bgColor: string;
  borderColor: string;
  imageSrc?: string;
  imagePlaceholder?: string;
}

const CategoryCard = ({
  name,
  bgColor,
  borderColor,
  imageSrc,
  imagePlaceholder,
}: CategoryCardProps) => {
  const cardStyles = {
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    borderRadius: "var(--measure-border-radius-border-radius-large, 8px)", // radius-4 = 8px
    padding: "var(--measure-dimension-scale-400, 16px)", // spacing-4 = 16px
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--measure-dimension-scale-200, 8px)", // spacing-2 = 8px
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0, // shrink-0 from Figma
  };

  return (
    <div style={cardStyles}>
      <div className="w-[70.8px] h-[48px] relative flex-shrink-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              // Fallback to colored placeholder
              e.currentTarget.style.display = "none";
              //   e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />
        ) : null}
        <div
          className={`absolute inset-0 w-full h-full ${
            imageSrc ? "hidden" : "block"
          }`}
          style={{ backgroundColor: imagePlaceholder || "#f0f0f0" }}
        ></div>
      </div>
      <p className="typography-body-xsmall-md text-components-product-card-heading-text text-center whitespace-nowrap">
        {name}
      </p>
    </div>
  );
};

const CategoryGrid = ({ className }: { className?: string }) => {
  const categories = [
    {
      name: "Grains",
      bgColor: "var(--colors-green-alpha-2, rgba(0, 163, 47, 0.04))",
      borderColor: "var(--colors-green-alpha-3, rgba(0, 164, 51, 0.1))",
      imageSrc: IMAGES.grains,
      imagePlaceholder: "#90EE90",
    },
    {
      name: "Tubers",
      bgColor: "var(--colors-gold-alpha-2, rgba(157, 138, 0, 0.05))",
      borderColor: "var(--colors-gold-alpha-3, rgba(117, 96, 0, 0.09))",
      imageSrc: IMAGES.tubers,
      imagePlaceholder: "#DAA520",
    },
    {
      name: "Baking Items",
      bgColor: "var(--colors-brown-alpha-2, rgba(170, 85, 0, 0.04))",
      borderColor: "var(--colors-brown-alpha-3, rgba(160, 75, 0, 0.09))",
      imageSrc: IMAGES.bakingItems,
      imagePlaceholder: "#D2691E",
    },
    {
      name: "Fresh Foods",
      bgColor: "var(--colors-tomato-alpha-2, rgba(255, 32, 0, 0.03))",
      borderColor: "var(--colors-tomato-alpha-3, rgba(245, 43, 0, 0.09))",
      imageSrc: IMAGES.fruitsVeggies,
      imagePlaceholder: "#FF6347",
    },
    {
      name: "Beverage",
      bgColor: "var(--colors-blue-alpha-2, rgba(0, 140, 255, 0.04))",
      borderColor: "var(--colors-blue-alpha-3, rgba(0, 143, 245, 0.1))",
      imageSrc: IMAGES.beveragesDrinks,
      imagePlaceholder: "#1E90FF",
    },
    {
      name: "Fruits",
      bgColor: "var(--colors-pink-alpha-2, rgba(224, 0, 128, 0.03))",
      borderColor: "var(--colors-pink-alpha-3, rgba(244, 0, 140, 0.09))",
      imageSrc: IMAGES.fruitsVeggies,
      imagePlaceholder: "#FF69B4",
    },
    {
      name: "Livestock",
      bgColor: "var(--colors-gray-alpha-2, rgba(0, 0, 0, 0.02))",
      borderColor: "var(--colors-gray-alpha-3, rgba(0, 0, 0, 0.06))",
      imageSrc: IMAGES.livestock,
      imagePlaceholder: "#696969",
    },
    {
      name: "Seafood",
      bgColor: "var(--colors-mauve-alpha-2, rgba(43, 0, 85, 0.02))",
      borderColor: "var(--colors-mauve-alpha-3, rgba(48, 0, 64, 0.06))",
      imageSrc: IMAGES.seafood,
      imagePlaceholder: "#8A2BE2",
    },
  ];

  return (
    <div className={className}>
      <div
        style={{
          backgroundColor:
            "var(--components-product-card-background-surface, #ffffff)",
          border: "0 0 1px solid var(--colors-gray-3, #f0f0f0)",
          padding: "var(--spacing-5, 24px)",
        }}
      >
        <div className="flex gap-[16px] items-center overflow-x-auto w-full">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              bgColor={category.bgColor}
              borderColor={category.borderColor}
              imageSrc={category.imageSrc}
              imagePlaceholder={category.imagePlaceholder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;

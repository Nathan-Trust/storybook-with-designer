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
  return (
    <div
      className={`${bgColor} border ${borderColor} rounded-large p-400 flex flex-col gap-200 items-center justify-center shrink-0`}
    >
      <div className="w-[70.8px] h-[48px] relative shrink-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              e.currentTarget.style.display = "none";
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
      bgColor: "bg-green-alpha-2",
      borderColor: "border-green-alpha-3",
      imageSrc: IMAGES.grains,
      imagePlaceholder: "#90EE90",
    },
    {
      name: "Tubers",
      bgColor: "bg-orange-alpha-2",
      borderColor: "border-orange-alpha-3",
      imageSrc: IMAGES.tubers,
      imagePlaceholder: "#DAA520",
    },
    {
      name: "Baking Items",
      bgColor: "bg-orange-alpha-2",
      borderColor: "border-orange-alpha-3",
      imageSrc: IMAGES.bakingItems,
      imagePlaceholder: "#D2691E",
    },
    {
      name: "Fresh Foods",
      bgColor: "bg-red-alpha-2",
      borderColor: "border-red-alpha-3",
      imageSrc: IMAGES.fruitsVeggies,
      imagePlaceholder: "#FF6347",
    },
    {
      name: "Beverage",
      bgColor: "bg-blue-alpha-2",
      borderColor: "border-blue-alpha-3",
      imageSrc: IMAGES.beveragesDrinks,
      imagePlaceholder: "#1E90FF",
    },
    {
      name: "Fruits",
      bgColor: "bg-red-alpha-2",
      borderColor: "border-red-alpha-3",
      imageSrc: IMAGES.fruitsVeggies,
      imagePlaceholder: "#FF69B4",
    },
    {
      name: "Livestock",
      bgColor: "bg-gray-alpha-2",
      borderColor: "border-gray-alpha-3",
      imageSrc: IMAGES.livestock,
      imagePlaceholder: "#696969",
    },
    {
      name: "Seafood",
      bgColor: "bg-gray-alpha-2",
      borderColor: "border-gray-alpha-3",
      imageSrc: IMAGES.seafood,
      imagePlaceholder: "#8A2BE2",
    },
  ];

  return (
    <div className={className}>
      <div className="bg-components-product-card-background-surface border-b border-gray-3 py-500 px-400 md:px-500">
        <div className="flex gap-400 items-center overflow-x-auto w-full">
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

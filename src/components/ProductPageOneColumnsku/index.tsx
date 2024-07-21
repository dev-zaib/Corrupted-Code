import React from "react";

import { Text } from "components";

type ProductPageOneColumnskuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "sku" | "p1117" | "category" | "category1"
> &
  Partial<{ sku: string; p1117: string; category: string; category1: string }>;

const ProductPageOneColumnsku: React.FC<ProductPageOneColumnskuProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[98px] items-start justify-start w-auto">
          <Text
            className="text-gray-600 text-xs w-auto"
            size="txtInterRegular12Gray600"
          >
            {props?.sku}
          </Text>
          <Text
            className="text-gray-900_02 text-xs w-auto"
            size="txtInterRegular12Gray90002"
          >
            {props?.p1117}
          </Text>
        </div>
        <div className="flex flex-row gap-[58px] items-start justify-start w-auto">
          <Text
            className="text-gray-600 text-xs w-auto"
            size="txtInterRegular12Gray600"
          >
            {props?.category}
          </Text>
          <Text
            className="text-gray-900_02 text-xs w-auto"
            size="txtInterRegular12Gray90002"
          >
            {props?.category1}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductPageOneColumnsku.defaultProps = {
  sku: "SKU",
  p1117: "1117",
  category: "CATEGORY",
  category1: "Living Room, Bedroom",
};

export default ProductPageOneColumnsku;

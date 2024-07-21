import React from "react";

import { Img, Text } from "components";

type ProductPageOneRowlinkThreeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "hometext"
  | "shoptext"
  | "shoparrow"
  | "livingroomtext"
  | "livingroomarrow"
  | "producttext"
> &
  Partial<{
    hometext: string;
    shoptext: string;
    shoparrow: string;
    livingroomtext: string;
    livingroomarrow: string;
    producttext: string;
  }>;

const ProductPageOneRowlinkThree: React.FC<ProductPageOneRowlinkThreeProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          <Text
            className="text-gray-700 text-sm w-auto"
            size="txtInterMedium14Gray700"
          >
            {props?.hometext}
          </Text>
          <Img
            className="h-3 w-3"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          {!!props?.shoptext ? (
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtInterMedium14Gray700"
            >
              {props?.shoptext}
            </Text>
          ) : null}
          {!!props?.shoparrow ? (
            <Img
              className="h-3 w-3"
              alt="arrowright_One"
              src={props?.shoparrow}
            />
          ) : null}
        </div>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          {!!props?.livingroomtext ? (
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtInterMedium14Gray700"
            >
              {props?.livingroomtext}
            </Text>
          ) : null}
          {!!props?.livingroomarrow ? (
            <Img
              className="h-3 w-3"
              alt="arrowright_Two"
              src={props?.livingroomarrow}
            />
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-gray-900_01 text-sm w-auto"
            size="txtInterMedium14"
          >
            {props?.producttext}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductPageOneRowlinkThree.defaultProps = {
  hometext: "Home",
  producttext: "Product",
};

export default ProductPageOneRowlinkThree;

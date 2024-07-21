import React from "react";

import { Text } from "components";

type ProductPageOneTabsmenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "additionalinfo" | "questions" | "reviews"
> &
  Partial<{ additionalinfo: string; questions: string; reviews: string }>;

const ProductPageOneTabsmenu: React.FC<ProductPageOneTabsmenuProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-gray-600_01 text-lg tracking-[-0.40px] w-auto"
            size="txtInterMedium18Gray60001"
          >
            {props?.additionalinfo}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-gray-600_01 text-lg tracking-[-0.40px] w-auto"
            size="txtInterMedium18Gray60001"
          >
            {props?.questions}
          </Text>
        </div>
        <Text
          className="border-b border-gray-900_01 border-solid py-1 text-gray-900_01 text-lg tracking-[-0.40px] w-auto"
          size="txtInterMedium18"
        >
          {props?.reviews}
        </Text>
      </div>
    </>
  );
};

ProductPageOneTabsmenu.defaultProps = {
  additionalinfo: "Additional Info",
  questions: "Questions",
  reviews: "Reviews",
};

export default ProductPageOneTabsmenu;

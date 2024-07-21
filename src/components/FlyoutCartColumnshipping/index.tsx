import React from "react";

import { Text } from "components";

type FlyoutCartColumnshippingProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subtotaltext" | "pricetext"
> &
  Partial<{ subtotaltext: string; pricetext: string }>;

const FlyoutCartColumnshipping: React.FC<FlyoutCartColumnshippingProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-gray-900_02 w-auto"
                size="txtInterRegular16Gray90002"
              >
                {props?.subtotaltext}
              </Text>
            </div>
            <Text
              className="text-base text-gray-900_02 text-right"
              size="txtInterSemiBold16Gray90002"
            >
              {props?.pricetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

FlyoutCartColumnshipping.defaultProps = {
  subtotaltext: "Subtotal",
  pricetext: "$99.00",
};

export default FlyoutCartColumnshipping;

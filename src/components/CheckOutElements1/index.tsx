import React from "react";

import { Text } from "components";

type CheckOutElements1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "paymenttext"
> &
  Partial<{ paymenttext: string }>;

const CheckOutElements1: React.FC<CheckOutElements1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="h-[18px] outline outline-[0.5px] outline-gray-900_02 rounded-[50%] w-[18px]"></div>
            <Text
              className="text-base text-gray-900_02 w-auto"
              size="txtInterRegular16Gray90002"
            >
              {props?.paymenttext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CheckOutElements1.defaultProps = { paymenttext: "Paypal" };

export default CheckOutElements1;

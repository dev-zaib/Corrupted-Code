import React from "react";

import { Img, Text } from "components";

type CheckOutElementsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "paybycardcredit"
> &
  Partial<{ paybycardcredit: string }>;

const CheckOutElements: React.FC<CheckOutElementsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="flex flex-col h-[18px] items-center justify-start outline outline-[0.5px] outline-gray-900_02 p-1 rounded-[50%] w-[18px]">
              <div className="bg-gray-900_02 h-2.5 rounded-[50%] w-2.5"></div>
            </div>
            <Text
              className="text-base text-gray-900_02 w-auto"
              size="txtInterRegular16Gray90002"
            >
              {props?.paybycardcredit}
            </Text>
          </div>
          <Img
            className="h-6 w-6"
            src="images/img_financeandpay.svg"
            alt="financeandpay"
          />
        </div>
      </div>
    </>
  );
};

CheckOutElements.defaultProps = { paybycardcredit: "Pay by Card Credit" };

export default CheckOutElements;

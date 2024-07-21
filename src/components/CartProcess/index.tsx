import React from "react";

import { Button, Text } from "components";

type CartProcessProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordernumber"
  | "carttext"
  | "stepnumber"
  | "steptext"
  | "buttonlabel"
  | "completiontext"
> &
  Partial<{
    ordernumber: string;
    carttext: string;
    stepnumber: string;
    steptext: string;
    buttonlabel: string;
    completiontext: string;
  }>;

const CartProcess: React.FC<CartProcessProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-b-2 border-gray-900_02 border-solid flex flex-col items-start justify-start pb-[26px] w-64">
          <div className="flex flex-row gap-[17px] items-center justify-start w-full">
            <Text
              className="bg-gray-900_04 flex h-[42px] items-center justify-center rounded-[50%] text-base text-center text-gray-50 w-[42px]"
              size="txtInterSemiBold16Gray50"
            >
              {props?.ordernumber}
            </Text>
            <Text
              className="flex-1 text-base text-gray-900_04 w-auto"
              size="txtInterSemiBold16Gray90004"
            >
              {props?.carttext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pb-[26px] w-64">
          <div className="flex flex-row gap-[17px] items-center justify-start w-full">
            <Text
              className="bg-blue_gray-200_01 flex h-10 items-center justify-center rounded-[50%] text-base text-center text-gray-50 w-10"
              size="txtInterSemiBold16Gray50"
            >
              {props?.stepnumber}
            </Text>
            <Text
              className="flex-1 text-base text-blue_gray-200_01 w-auto"
              size="txtInterSemiBold16Bluegray20001"
            >
              {props?.steptext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pb-[26px] w-64">
          <div className="flex flex-row gap-[17px] items-center justify-start w-full">
            <Button
              className="!text-gray-50 cursor-pointer font-inter font-semibold h-[42px] rounded-[20px] text-base text-center w-[41px]"
              color="blue_gray_200_01"
              size="lg"
              variant="fill"
            >
              {props?.buttonlabel}
            </Button>
            <Text
              className="flex-1 text-base text-blue_gray-200_01 w-auto"
              size="txtInterSemiBold16Bluegray20001"
            >
              {props?.completiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CartProcess.defaultProps = {
  ordernumber: "1",
  carttext: "Shopping cart",
  stepnumber: "2",
  steptext: "Checkout details",
  buttonlabel: "3",
  completiontext: "Order complete",
};

export default CartProcess;

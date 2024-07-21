import React from "react";

import { Button, Img, Input, Text } from "components";

type CheckOutProcessProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "frameseventythree" | "checkoutdetailsOne" | "three" | "ordercomplete"
> &
  Partial<{
    frameseventythree: string;
    checkoutdetailsOne: string;
    three: string;
    ordercomplete: string;
  }>;

const CheckOutProcess: React.FC<CheckOutProcessProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="process"
          placeholder="Shopping cart"
          className="!placeholder:text-teal-400 !text-teal-400 font-inter font-semibold p-0 text-base text-left w-full"
          wrapClassName="flex w-full"
          prefix={
            <Img
              className="h-6 w-[24pxpx] my-auto"
              src="images/img_checkmark_gray_50.svg"
              alt="checkmark"
            />
          }
          shape="square"
          color="teal_400"
          size="sm"
          variant="outline"
        ></Input>
        <div className="border-b-2 border-gray-900_02 border-solid flex flex-col items-start justify-start pb-[26px] w-full">
          <div className="flex flex-row gap-[17px] items-center justify-start w-full">
            <Text
              className="bg-gray-900_04 flex h-10 items-center justify-center rounded-[50%] text-base text-center text-gray-50 w-10"
              size="txtInterSemiBold16Gray50"
            >
              {props?.frameseventythree}
            </Text>
            <Text
              className="flex-1 text-base text-gray-900_04 w-auto"
              size="txtInterSemiBold16Gray90004"
            >
              {props?.checkoutdetailsOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pb-[26px] w-full">
          <div className="flex flex-row gap-[17px] items-center justify-start w-full">
            <Button
              className="!text-gray-50 cursor-pointer font-inter font-semibold h-10 rounded-[20px] text-base text-center w-[41px]"
              color="blue_gray_200_01"
              size="md"
              variant="fill"
            >
              {props?.three}
            </Button>
            <Text
              className="flex-1 text-base text-blue_gray-200_01 w-auto"
              size="txtInterSemiBold16Bluegray20001"
            >
              {props?.ordercomplete}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CheckOutProcess.defaultProps = {
  frameseventythree: "2",
  checkoutdetailsOne: "Checkout details",
  three: "3",
  ordercomplete: "Order complete",
};

export default CheckOutProcess;

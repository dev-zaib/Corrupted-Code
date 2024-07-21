import React from "react";

import { Button, Img, Input, Text } from "components";

type OrderCompleteProcessProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "buttonthree" | "ordercompletetext"
> &
  Partial<{ buttonthree: string; ordercompletetext: string }>;

const OrderCompleteProcess: React.FC<OrderCompleteProcessProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="process"
          placeholder="Shopping cart"
          className="!placeholder:text-green-500 !text-green-500 font-inter font-semibold p-0 text-base text-left w-full"
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
        <Input
          name="process_One"
          placeholder="Checkout details"
          className="!placeholder:text-green-500 !text-green-500 font-inter font-semibold p-0 text-base text-left w-full"
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
            <Button
              className="!text-gray-50 cursor-pointer font-inter font-semibold h-10 rounded-[20px] text-base text-center w-[41px]"
              color="gray_900_04"
              size="md"
              variant="fill"
            >
              {props?.buttonthree}
            </Button>
            <Text
              className="flex-1 text-base text-gray-900_04 w-auto"
              size="txtInterSemiBold16Gray90004"
            >
              {props?.ordercompletetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

OrderCompleteProcess.defaultProps = {
  buttonthree: "3",
  ordercompletetext: "Order complete",
};

export default OrderCompleteProcess;

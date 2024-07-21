import React from "react";

import { Button, List, Text } from "components";

type CartColumncartsummaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "cartsummary"
  | "freeshipping"
  | "price"
  | "freeshipping1"
  | "price1"
  | "freeshipping2"
  | "zero"
  | "label"
  | "priceSeven"
  | "labelOne"
  | "priceEight"
  | "checkout"
> &
  Partial<{
    cartsummary: string;
    freeshipping: string;
    price: string;
    freeshipping1: string;
    price1: string;
    freeshipping2: string;
    zero: string;
    label: string;
    priceSeven: string;
    labelOne: string;
    priceEight: string;
    checkout: string;
  }>;

const CartColumncartsummary: React.FC<CartColumncartsummaryProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-gray-900_02 text-xl w-full"
          size="txtPoppinsMedium20Gray90002"
        >
          {props?.cartsummary}
        </Text>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pb-8 w-full">
            <div className="flex flex-col items-start justify-start pb-4 w-full">
              <List
                className="flex flex-col gap-3 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-100_01 border border-gray-900_02 border-solid flex flex-col items-center justify-start px-4 py-[13px] rounded w-[365px]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <div className="flex flex-col h-[18px] items-center justify-start outline outline-[0.5px] outline-gray-900_01 p-1 rounded-[50%] w-[18px]">
                        <div className="bg-gray-900_01 h-2.5 rounded-[50%] w-2.5"></div>
                      </div>
                      <Text
                        className="text-base text-gray-900_02 w-auto"
                        size="txtInterRegular16Gray90002"
                      >
                        {props?.freeshipping}
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-900_02 text-right"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700_01 border border-gray-600 border-solid flex flex-col items-center justify-start px-4 py-[13px] rounded w-[365px]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <div className="h-[18px] outline outline-[0.5px] outline-gray-900_01 rounded-[50%] w-[18px]"></div>
                      <Text
                        className="text-base text-gray-900_02 w-auto"
                        size="txtInterRegular16Gray90002"
                      >
                        {props?.freeshipping1}
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-900_02 text-right"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.price1}
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700_01 border border-gray-600 border-solid flex flex-col items-center justify-start px-4 py-[13px] rounded w-[365px]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <div className="h-[18px] outline outline-[0.5px] outline-gray-900_01 rounded-[50%] w-[18px]"></div>
                      <Text
                        className="text-base text-gray-900_02 w-auto"
                        size="txtInterRegular16Gray90002"
                      >
                        {props?.freeshipping2}
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-900_02 text-right"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.zero}
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="border-b border-gray-200 border-solid flex flex-col items-start justify-start py-[13px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.label}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-gray-900_02 text-right"
                    size="txtInterSemiBold16Gray90002"
                  >
                    {props?.priceSeven}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[13px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                  <Text
                    className="text-gray-900_02 text-xl"
                    size="txtInterSemiBold20Gray90002"
                  >
                    {props?.labelOne}
                  </Text>
                  <Text
                    className="text-gray-900_02 text-right text-xl"
                    size="txtInterSemiBold20Gray90002"
                  >
                    {props?.priceEight}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-inter font-medium text-center text-lg tracking-[-0.40px] w-[365px]"
            shape="round"
            color="gray_900_02"
            size="xl"
            variant="fill"
          >
            {props?.checkout}
          </Button>
        </div>
      </div>
    </>
  );
};

CartColumncartsummary.defaultProps = {
  cartsummary: "Cart summary",
  freeshipping: "Free shipping",
  price: "$0.00",
  freeshipping1: "Express shipping",
  price1: "+$15.00",
  freeshipping2: "Pick Up",
  zero: "%21.00",
  label: "Subtotal",
  priceSeven: "$1234.00",
  labelOne: "Total",
  priceEight: "$1345.00",
  checkout: "Checkout",
};

export default CartColumncartsummary;

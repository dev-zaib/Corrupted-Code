import React from "react";

import { Button, Img, Input, List, Text } from "components";

type CheckOutColumnordersummaryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordersummary"
  | "producttitleone"
  | "productcolorone"
  | "productquantityone"
  | "productpriceone"
  | "producttitletwo"
  | "productcolortwo"
  | "productquantitytwo"
  | "productpricetwo"
  | "producttitlethree"
  | "productcolorthree"
  | "productquantitythree"
  | "productpricethree"
  | "applybutton"
  | "jenkatemw"
  | "priceThree"
  | "shipping"
  | "free"
  | "shipping1"
  | "price"
  | "shipping2"
  | "price1"
> &
  Partial<{
    ordersummary: string;
    producttitleone: string;
    productcolorone: string;
    productquantityone: string;
    productpriceone: string;
    producttitletwo: string;
    productcolortwo: string;
    productquantitytwo: string;
    productpricetwo: string;
    producttitlethree: string;
    productcolorthree: string;
    productquantitythree: string;
    productpricethree: string;
    applybutton: string;
    jenkatemw: string;
    priceThree: string;
    shipping: string;
    free: string;
    shipping1: string;
    price: string;
    shipping2: string;
    price1: string;
  }>;

const CheckOutColumnordersummary: React.FC<CheckOutColumnordersummaryProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 tracking-[-0.60px] w-full"
          size="txtPoppinsMedium28"
        >
          {props?.ordersummary}
        </Text>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="border-b border-blue_gray-50 border-solid flex flex-col items-center justify-between py-6 w-[376px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-[376px] sm:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[363px]">
                <div className="flex flex-col items-center justify-start w-[23%]">
                  <Img
                    className="h-24 md:h-auto object-cover w-full"
                    src="images/img_pasteimage_96x80.png"
                    alt="pasteimage"
                  />
                </div>
                <div className="flex flex-row gap-4 h-24 md:h-auto items-start justify-between w-[267px]">
                  <div className="flex flex-col gap-2 items-start justify-center w-[200px]">
                    <Text
                      className="text-gray-900_02 text-sm w-[70px]"
                      size="txtInterSemiBold14Gray90002"
                    >
                      {props?.producttitleone}
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      {props?.productcolorone}
                    </Text>
                    <div className="border border-gray-600 border-solid flex flex-col h-8 md:h-auto items-center justify-center px-2 py-3 rounded w-20">
                      <div className="flex flex-row gap-3 items-start justify-between py-0.5 w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowleft_gray_900_01_16x16.svg"
                          alt="arrowleft"
                        />
                        <Text
                          className="text-center text-gray-900_01 text-xs"
                          size="txtInterSemiBold12Gray90001"
                        >
                          {props?.productquantityone}
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-center w-auto">
                    <Text
                      className="text-gray-900_01 text-right text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      {props?.productpriceone}
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconscloseline.svg"
                      alt="iconscloseline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-blue_gray-50 border-solid flex flex-col items-center justify-between py-6 w-[376px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-[376px] sm:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[363px]">
                <div className="flex flex-col items-center justify-start w-[23%]">
                  <Img
                    className="h-24 md:h-auto object-cover w-full"
                    src="images/img_pasteimage_62.png"
                    alt="pasteimage_One"
                  />
                </div>
                <div className="flex flex-row gap-4 h-24 md:h-auto items-start justify-between w-[267px]">
                  <div className="flex flex-col gap-2 items-start justify-center w-[200px]">
                    <Text
                      className="text-gray-900_02 text-sm w-[70px]"
                      size="txtInterSemiBold14Gray90002"
                    >
                      {props?.producttitletwo}
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      {props?.productcolortwo}
                    </Text>
                    <div className="border border-gray-600 border-solid flex flex-col h-8 md:h-auto items-center justify-center px-2 py-3 rounded w-20">
                      <div className="flex flex-row gap-3 items-start justify-between py-0.5 w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowleft_gray_900_01_16x16.svg"
                          alt="arrowleft_One"
                        />
                        <Text
                          className="text-center text-gray-900_01 text-xs"
                          size="txtInterSemiBold12Gray90001"
                        >
                          {props?.productquantitytwo}
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_plus.svg"
                          alt="plus_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-center w-auto">
                    <Text
                      className="text-gray-900_01 text-right text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      {props?.productpricetwo}
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconscloseline.svg"
                      alt="iconscloseline_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-blue_gray-50 border-solid flex flex-col items-center justify-between py-6 w-[376px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-[376px] sm:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[363px]">
                <div className="flex flex-col items-center justify-start w-[23%]">
                  <Img
                    className="h-24 md:h-auto object-cover w-full"
                    src="images/img_pasteimage_63.png"
                    alt="pasteimage_Two"
                  />
                </div>
                <div className="flex flex-row gap-4 h-24 md:h-auto items-start justify-between w-[267px]">
                  <div className="flex flex-col gap-2 items-start justify-center w-[200px]">
                    <Text
                      className="text-gray-900_02 text-sm w-[73px]"
                      size="txtInterSemiBold14Gray90002"
                    >
                      {props?.producttitlethree}
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      {props?.productcolorthree}
                    </Text>
                    <div className="border border-gray-600 border-solid flex flex-col h-8 md:h-auto items-center justify-center px-2 py-3 rounded w-20">
                      <div className="flex flex-row gap-3 items-start justify-between py-0.5 w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowleft_gray_900_01_16x16.svg"
                          alt="arrowleft_Two"
                        />
                        <Text
                          className="text-center text-gray-900_01 text-xs"
                          size="txtInterSemiBold12Gray90001"
                        >
                          {props?.productquantitythree}
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_plus.svg"
                          alt="plus_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end justify-center w-auto">
                    <Text
                      className="text-gray-900_01 text-right text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      {props?.productpricethree}
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconscloseline.svg"
                      alt="iconscloseline_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Input
                name="input_Ten"
                placeholder="Input"
                className="!placeholder:text-gray-700 !text-gray-700 font-inter md:h-auto p-0 sm:h-auto text-base text-left w-full"
                wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-inter font-medium min-w-[95px] text-base text-center tracking-[-0.40px]"
              shape="round"
              color="gray_900_02"
              size="xl"
              variant="fill"
            >
              {props?.applybutton}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="border-b border-blue_gray-50 border-solid flex flex-col items-start justify-start py-[13px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search_gray_900_02_24x24.svg"
                    alt="search_Two"
                  />
                  <Text
                    className="text-base text-gray-900_02 w-auto"
                    size="txtInterRegular16Gray90002"
                  >
                    {props?.jenkatemw}
                  </Text>
                </div>
                <Text
                  className="mt-[3px] text-base text-right text-teal-400"
                  size="txtInterSemiBold16Teal400"
                >
                  {props?.priceThree}
                </Text>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-px items-center w-full"
            orientation="vertical"
          >
            <div className="border-b border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start py-[13px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.shipping}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-gray-900_02 text-right"
                    size="txtInterSemiBold16Gray90002"
                  >
                    {props?.free}
                  </Text>
                </div>
              </div>
            </div>
            <div className="border-b border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start py-[13px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_02 w-auto"
                      size="txtInterRegular16Gray90002"
                    >
                      {props?.shipping1}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-gray-900_02 text-right"
                    size="txtInterSemiBold16Gray90002"
                  >
                    {props?.price}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start py-[13px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-900_02 text-xl w-auto"
                      size="txtPoppinsMedium20Gray90002"
                    >
                      {props?.shipping2}
                    </Text>
                  </div>
                  <Text
                    className="text-gray-900_02 text-right text-xl"
                    size="txtPoppinsMedium20Gray90002"
                  >
                    {props?.price1}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

CheckOutColumnordersummary.defaultProps = {
  ordersummary: "Order summary",
  producttitleone: "Tray Table",
  productcolorone: "Color: Black",
  productquantityone: "2",
  productpriceone: "$38.00",
  producttitletwo: "Tray Table",
  productcolortwo: "Color: Red",
  productquantitytwo: "2",
  productpricetwo: "$38.00",
  producttitlethree: "Table lamp",
  productcolorthree: "Color: gold",
  productquantitythree: "2",
  productpricethree: "$39.00",
  applybutton: "Apply",
  jenkatemw: "JenkateMW",
  priceThree: "-$25.00 [Remove]",
  shipping: "Shipping",
  free: "Free",
  shipping1: "Subtotal",
  price: "$99.00",
  shipping2: "Total",
  price1: "$234.00",
};

export default CheckOutColumnordersummary;

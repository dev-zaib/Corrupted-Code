import React from "react";

import { Button, Img, Text } from "components";

type ShopPageThreeElementscardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "pasteimage"
  | "hello"
  | "helloOne"
  | "offwhitepillow"
  | "price"
  | "priceOne"
  | "supersoftcushioOne"
  | "addToCart"
  | "getstarted"
> &
  Partial<{
    pasteimage: string;
    hello: string;
    helloOne: string;
    offwhitepillow: string;
    price: string;
    priceOne: string;
    supersoftcushioOne: string;
    addToCart: string;
    getstarted: string;
  }>;

const ShopPageThreeElementscard: React.FC<ShopPageThreeElementscardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[49%] sm:w-full">
          <div className="h-[349px] relative w-[99%]">
            <Img
              className="absolute h-[349px] inset-[0] justify-center m-auto object-cover w-full"
              alt="pasteimage"
              src={props?.pasteimage}
            />
            <div className="absolute flex flex-col h-14 md:h-auto inset-x-[0] items-start justify-start mx-auto top-[5%] w-[233px]">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="bg-white-A700 flex flex-col items-center justify-center px-4 py-1 rounded w-[71px]">
                  <div className="flex flex-col items-center justify-start w-auto">
                    {!!props?.hello ? (
                      <Text
                        className="text-base text-center text-gray-900_01 uppercase w-auto"
                        size="txtInterBold16Gray90001"
                      >
                        {props?.hello}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <div className="bg-teal-400 flex flex-col items-center justify-center px-3.5 py-1 rounded w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    {!!props?.helloOne ? (
                      <Text
                        className="text-base text-center text-white-A700 uppercase w-auto"
                        size="txtInterBold16WhiteA700"
                      >
                        {props?.helloOne}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-6 h-[349px] md:h-auto items-start justify-start p-6 sm:px-5 w-[282px]">
          <div className="flex flex-col gap-4 items-start justify-start w-[230px]">
            <div className="flex flex-row items-center justify-start w-[39%] md:w-full">
              <div className="flex flex-col h-4 items-center justify-start w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_333.svg"
                  alt="ratingstarfill"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_334.svg"
                  alt="ratingstarfill_One"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_335.svg"
                  alt="ratingstarfill_Two"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_336.svg"
                  alt="ratingstarfill_Three"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_337.svg"
                  alt="ratingstarfill_Four"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-[230px]">
              <Text
                className="text-base text-gray-900_02 w-full"
                size="txtInterSemiBold16Gray90002"
              >
                {props?.offwhitepillow}
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtInterSemiBold14Gray90001"
                >
                  {props?.price}
                </Text>
                {!!props?.priceOne ? (
                  <Text
                    className="line-through text-gray-600 text-sm w-auto"
                    size="txtInterRegular14Gray600"
                  >
                    {props?.priceOne}
                  </Text>
                ) : null}
              </div>
            </div>
            <Text
              className="leading-[22.00px] max-w-[230px] md:max-w-full text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              {props?.supersoftcushioOne}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-[230px]">
            <Button
              className="!text-white-A700_01 cursor-pointer font-inter font-medium h-[46px] shadow-bs text-base text-center tracking-[-0.40px] w-[230px]"
              shape="round"
              color="gray_900_02"
              size="lg"
              variant="fill"
            >
              {props?.addToCart}
            </Button>
            <div className="flex flex-row gap-1 items-center justify-start py-1 w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_iconsheartline.svg"
                alt="iconsheartline"
              />
              <Text
                className="text-center text-gray-900_02 text-sm w-auto"
                size="txtInterMedium14Gray90002"
              >
                {props?.getstarted}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ShopPageThreeElementscard.defaultProps = {
  pasteimage: "images/img_pasteimage_81.png",
  offwhitepillow: "Off-white Pillow",
  price: "$7.99",
  supersoftcushioOne:
    "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
  addToCart: "Add to cart",
  getstarted: "Wishlist",
};

export default ShopPageThreeElementscard;

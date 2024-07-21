import React from "react";

import { Button, Img, Text } from "components";

type HomepageOneProductcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "pasteimage"
  | "badgemedium"
  | "badgemediumOne"
  | "addToCart"
  | "loveseatsofa"
  | "price"
  | "priceOne"
> &
  Partial<{
    pasteimage: string;
    badgemedium: string;
    badgemediumOne: string;
    addToCart: string;
    loveseatsofa: string;
    price: string;
    priceOne: string;
  }>;

const HomepageOneProductcard: React.FC<HomepageOneProductcardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[349px] relative w-full">
            <Img
              className="absolute h-[349px] inset-[0] justify-center m-auto object-cover w-full"
              alt="pasteimage"
              src={props?.pasteimage}
            />
            <div className="absolute flex flex-col md:gap-10 gap-[215px] h-max inset-[0] items-center justify-center m-auto w-[88%]">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-white-A700 justify-center px-3.5 rounded text-base text-center text-gray-900_02 uppercase w-auto"
                    size="txtInterBold16Gray90002"
                  >
                    {props?.badgemedium}
                  </Text>
                  <Text
                    className="bg-teal-400 justify-center px-3.5 rounded text-base text-center text-white-A700_01 uppercase w-auto"
                    size="txtInterBold16WhiteA70001"
                  >
                    {props?.badgemediumOne}
                  </Text>
                </div>
                <Button
                  className="flex h-8 items-center justify-center mb-6 rounded-[50%] w-8"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_favorite.svg" alt="favorite" />
                </Button>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-inter font-medium h-[46px] shadow-bs text-base text-center tracking-[-0.40px] w-[230px]"
                shape="round"
                color="gray_900_02"
                size="lg"
                variant="fill"
              >
                {props?.addToCart}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[72px] md:h-auto items-start justify-start w-[262px] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                <div className="flex flex-col h-4 items-center justify-start w-4">
                  <Img
                    className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                    src="images/img_ratingstarfill.svg"
                    alt="ratingstarfill"
                  />
                </div>
                <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                  <Img
                    className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                    src="images/img_ratingstarfill_16x16.svg"
                    alt="ratingstarfill_One"
                  />
                </div>
                <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                  <Img
                    className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                    src="images/img_ratingstarfill_1.svg"
                    alt="ratingstarfill_Two"
                  />
                </div>
                <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                  <Img
                    className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                    src="images/img_ratingstarfill_2.svg"
                    alt="ratingstarfill_Three"
                  />
                </div>
                <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                  <Img
                    className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                    src="images/img_ratingstarfill_3.svg"
                    alt="ratingstarfill_Four"
                  />
                </div>
              </div>
              <Text
                className="text-base text-gray-900_02 w-full"
                size="txtInterSemiBold16Gray90002"
              >
                {props?.loveseatsofa}
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-900_02 text-sm w-auto"
                  size="txtInterSemiBold14Gray90002"
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
          </div>
        </div>
      </div>
    </>
  );
};

HomepageOneProductcard.defaultProps = {
  pasteimage: "images/img_pasteimage_349x262.png",
  badgemedium: "NEW",
  badgemediumOne: "-50%",
  addToCart: "Add to cart",
  loveseatsofa: "Loveseat Sofa",
  price: "$199.00",
};

export default HomepageOneProductcard;

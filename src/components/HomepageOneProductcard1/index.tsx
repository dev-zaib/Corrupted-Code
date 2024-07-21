import React from "react";

import { Img, Text } from "components";

type HomepageOneProductcard1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "pasteimage"
  | "badgemedium"
  | "badgemediumOne"
  | "loveseatsofa"
  | "price"
  | "priceOne"
> &
  Partial<{
    pasteimage: string;
    badgemedium: string;
    badgemediumOne: string;
    loveseatsofa: string;
    price: string;
    priceOne: string;
  }>;

const HomepageOneProductcard1: React.FC<HomepageOneProductcard1Props> = (
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
            <div className="absolute flex flex-col gap-2 items-start justify-start left-[6%] top-[5%] w-auto">
              <Text
                className="bg-white-A700 justify-center px-3.5 rounded text-base text-center text-gray-900_01 uppercase w-auto"
                size="txtInterBold16Gray90001"
              >
                {props?.badgemedium}
              </Text>
              {!!props?.badgemediumOne ? (
                <Text
                  className="bg-teal-400 justify-center px-3.5 rounded text-base text-center text-white-A700_01 uppercase w-auto"
                  size="txtInterBold16WhiteA70001"
                >
                  {props?.badgemediumOne}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[262px] md:w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
              <div className="flex flex-col h-4 items-center justify-start w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_228.svg"
                  alt="ratingstarfill"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_229.svg"
                  alt="ratingstarfill_One"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_230.svg"
                  alt="ratingstarfill_Two"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_231.svg"
                  alt="ratingstarfill_Three"
                />
              </div>
              <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                <Img
                  className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                  src="images/img_ratingstarfill_232.svg"
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
        </div>
      </div>
    </>
  );
};

HomepageOneProductcard1.defaultProps = {
  pasteimage: "images/img_pasteimage_349x262.png",
  badgemedium: "NEW",
  loveseatsofa: "Loveseat Sofa",
  price: "$199.00",
};

export default HomepageOneProductcard1;

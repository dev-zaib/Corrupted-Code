import React from "react";

import { Img, Text } from "components";

type FlyoutCartColumntraytableProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "image" | "traytabletext" | "colortext" | "getstartedtext" | "pricetext"
> &
  Partial<{
    image: string;
    traytabletext: string;
    colortext: string;
    getstartedtext: string;
    pricetext: string;
  }>;

const FlyoutCartColumntraytable: React.FC<FlyoutCartColumntraytableProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[376px] md:w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-[363px]">
            <div className="flex flex-col items-center justify-start w-[23%]">
              <Img
                className="h-24 md:h-auto object-cover w-full"
                alt="pasteimage"
                src={props?.image}
              />
            </div>
            <div className="flex flex-row gap-4 h-24 md:h-auto items-start justify-between w-[267px]">
              <div className="flex flex-col gap-2 items-start justify-center w-[200px]">
                <Text
                  className="text-gray-900_02 text-sm w-[70px]"
                  size="txtInterSemiBold14Gray90002"
                >
                  {props?.traytabletext}
                </Text>
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtInterRegular12Gray600"
                >
                  {props?.colortext}
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
                      {props?.getstartedtext}
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
                  {props?.pricetext}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_iconscloseline_gray_600.svg"
                  alt="iconscloseline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FlyoutCartColumntraytable.defaultProps = {
  image: "images/img_pasteimage_96x80.png",
  traytabletext: "Tray Table",
  colortext: "Color: Black",
  getstartedtext: "2",
  pricetext: "$19.19",
};

export default FlyoutCartColumntraytable;

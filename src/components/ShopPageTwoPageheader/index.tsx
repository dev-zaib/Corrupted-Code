import React from "react";

import { Img, Text } from "components";

type ShopPageTwoPageheaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "image" | "homelink" | "shoplink" | "shoppage" | "letsdesignthe"
> &
  Partial<{
    image: string;
    homelink: string;
    shoplink: string;
    shoppage: string;
    letsdesignthe: string;
  }>;

const ShopPageTwoPageheader: React.FC<ShopPageTwoPageheaderProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="relative w-full">
          <Img
            className="h-[392px] m-auto object-cover w-full"
            alt="pasteimage"
            src={props?.image}
          />
          <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto w-auto">
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtInterMedium14Gray700"
                >
                  {props?.homelink}
                </Text>
                <Img
                  className="h-3 w-3"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  {props?.shoplink}
                </Text>
              </div>
            </div>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              {props?.shoppage}
            </Text>
            <Text
              className="text-center text-gray-900_01 text-xl w-auto"
              size="txtInterRegular20Gray90001"
            >
              {props?.letsdesignthe}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ShopPageTwoPageheader.defaultProps = {
  image: "images/img_pasteimage_392x1120.png",
  homelink: "Home",
  shoplink: "Shop",
  shoppage: "Shop Page",
  letsdesignthe: "Let’s design the place you always imagined.",
};

export default ShopPageTwoPageheader;

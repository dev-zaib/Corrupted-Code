import React from "react";

import { Img, Text } from "components";

type ShopPageOneStacklinkProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "homelinktext" | "shoplinktext" | "shoppagetext" | "designtext"
> &
  Partial<{
    homelinktext: string;
    shoplinktext: string;
    shoppagetext: string;
    designtext: string;
  }>;

const ShopPageOneStacklink: React.FC<ShopPageOneStacklinkProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[392px] m-auto object-cover w-full"
          src="images/img_pasteimage_392x1120.png"
          alt="pasteimage"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto w-auto">
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtInterMedium14Gray700"
              >
                {props?.homelinktext}
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
                {props?.shoplinktext}
              </Text>
            </div>
          </div>
          <Text
            className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
            size="txtPoppinsMedium54Black900"
          >
            {props?.shoppagetext}
          </Text>
          <Text
            className="text-center text-gray-900_01 text-xl w-auto"
            size="txtInterRegular20Gray90001"
          >
            {props?.designtext}
          </Text>
        </div>
      </div>
    </>
  );
};

ShopPageOneStacklink.defaultProps = {
  homelinktext: "Home",
  shoplinktext: "Shop",
};

export default ShopPageOneStacklink;

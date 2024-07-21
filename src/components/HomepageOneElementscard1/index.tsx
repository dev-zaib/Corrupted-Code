import React from "react";

import { Button, Img, Text } from "components";

type HomepageOneElementscard1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "bedroom" | "shopnowtext"
> &
  Partial<{ userimage: string; bedroom: string; shopnowtext: string }>;

const HomepageOneElementscard1: React.FC<HomepageOneElementscard1Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[319px] relative w-full">
          <Img
            className="absolute h-[319px] inset-[0] justify-center m-auto object-cover w-full"
            alt="pasteimage"
            src={props?.userimage}
          />
          <div className="absolute bottom-[13%] flex flex-col gap-3 items-start justify-start left-[6%] w-[420px] sm:w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02 tracking-[-0.60px] w-auto"
              size="txtPoppinsMedium34Gray90002"
            >
              {props?.bedroom}
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[100px]"
              rightIcon={
                <Img
                  className="h-5 ml-1"
                  src="images/img_arrowleft_gray_900_02.svg"
                  alt="arrow_left"
                />
              }
              shape="square"
              color="gray_900_02"
              size="xs"
              variant="outline"
            >
              <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                {props?.shopnowtext}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageOneElementscard1.defaultProps = {
  userimage: "images/img_pasteimage_319x548.png",
  bedroom: "Bedroom",
  shopnowtext: "Shop Now",
};

export default HomepageOneElementscard1;

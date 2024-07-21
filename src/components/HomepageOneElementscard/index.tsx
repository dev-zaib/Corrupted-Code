import React from "react";

import { Button, Img, Text } from "components";

type HomepageOneElementscardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "productname" | "shopnowbutton"
> &
  Partial<{ productname: string; shopnowbutton: string }>;

const HomepageOneElementscard: React.FC<HomepageOneElementscardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[664px] relative w-full">
          <Img
            className="h-[664px] m-auto object-cover w-full"
            src="images/img_pasteimage_664x548.png"
            alt="pasteimage"
          />
          <div className="absolute flex flex-col gap-3 items-start justify-start left-[9%] top-[7%] w-auto">
            <div className="flex flex-col items-start justify-start w-[360px]">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02 tracking-[-0.60px] w-full"
                size="txtPoppinsMedium34Gray90002"
              >
                {props?.productname}
              </Text>
            </div>
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
                {props?.shopnowbutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageOneElementscard.defaultProps = {
  productname: "Living Room",
  shopnowbutton: "Shop Now",
};

export default HomepageOneElementscard;

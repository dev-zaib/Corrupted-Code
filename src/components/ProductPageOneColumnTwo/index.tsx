import React from "react";

import { Button, Img, Text } from "components";

type ProductPageOneColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "getstartedtext" | "wishlistbutton" | "addtocartbutton"
> &
  Partial<{
    getstartedtext: string;
    wishlistbutton: string;
    addtocartbutton: string;
  }>;

const ProductPageOneColumnTwo: React.FC<ProductPageOneColumnTwoProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100_03 flex flex-col h-[52px] md:h-auto items-center justify-center px-4 py-3 rounded-lg w-[127px]">
            <div className="flex flex-row items-center justify-between py-[3px] w-full">
              <Img
                className="h-5 w-5"
                src="images/img_arrowleft_gray_900_01_16x16.svg"
                alt="arrowleft_Two"
              />
              <Text
                className="text-base text-center text-gray-900_01"
                size="txtInterSemiBold16Gray90001"
              >
                {props?.getstartedtext}
              </Text>
              <Img className="h-5 w-5" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[357px]"
            leftIcon={
              <Img
                className="h-6 mr-2"
                src="images/img_iconsheartline.svg"
                alt="icons/Heart/Line"
              />
            }
            shape="round"
            color="gray_900_02"
            size="xl"
            variant="outline"
          >
            <div className="font-inter font-medium text-center text-lg tracking-[-0.40px]">
              {props?.wishlistbutton}
            </div>
          </Button>
        </div>
        <Button
          className="cursor-pointer font-inter font-medium text-center text-lg tracking-[-0.40px] w-[508px]"
          shape="round"
          color="gray_900_02"
          size="xl"
          variant="fill"
        >
          {props?.addtocartbutton}
        </Button>
      </div>
    </>
  );
};

ProductPageOneColumnTwo.defaultProps = {
  getstartedtext: "1",
  wishlistbutton: "Wishlist",
  addtocartbutton: "Add to Cart",
};

export default ProductPageOneColumnTwo;

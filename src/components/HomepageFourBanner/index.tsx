import React from "react";

import { Button, Img, Text } from "components";

type HomepageFourBannerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "offerOne" | "title" | "phosfluorescent" | "shopNowOne"
> &
  Partial<{
    offerOne: string;
    title: JSX.Element | string;
    phosfluorescent: string;
    shopNowOne: string;
  }>;

const HomepageFourBanner: React.FC<HomepageFourBannerProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
            <Img
              className="h-[532px] md:h-auto object-cover w-full"
              src="images/img_pasteimage_57.png"
              alt="pasteimage_One"
            />
          </div>
          <div className="bg-gray-100_02 flex flex-1 flex-col gap-6 h-[532px] md:h-auto items-start justify-center max-w-[720px] pl-[72px] pr-40 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-blue-A400 uppercase w-full"
                size="txtInterBold16BlueA400"
              >
                {props?.offerOne}
              </Text>
              <Text
                className="leading-[44.00px] max-w-[452px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 tracking-[-0.40px]"
                size="txtPoppinsMedium40Gray90002"
              >
                {props?.title}
              </Text>
              <Text
                className="text-gray-900_02 text-xl w-auto"
                size="txtInterRegular20Gray90002"
              >
                {props?.phosfluorescent}
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[100px]"
              rightIcon={
                <Img
                  className="h-5 mb-px ml-1"
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
                {props?.shopNowOne}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageFourBanner.defaultProps = {
  offerOne: "SALE UP TO 35% OFF",
  title: (
    <>
      HUNDREDS of <br />
      New lower prices!
    </>
  ),
  phosfluorescent: "Hurry up!!! Winter is coming!",
  shopNowOne: "Shop Now",
};

export default HomepageFourBanner;

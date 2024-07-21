import React from "react";

import { Button, Img, Text } from "components";

type HomepageTwoRowshopNowProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "search" | "offer" | "shopNow" | "close"
> &
  Partial<{ search: string; offer: string; shopNow: string; close: string }>;

const HomepageTwoRowshopNow: React.FC<HomepageTwoRowshopNowProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-3 items-start justify-center w-auto sm:w-full">
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Img className="h-6 w-6" alt="search" src={props?.search} />
            <Text
              className="text-center text-sm text-white-A700 w-auto"
              size="txtInterSemiBold14WhiteA700"
            >
              {props?.offer}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[91px]"
            rightIcon={
              <Img
                className="h-[18px] mb-px ml-1"
                src="images/img_arrowleft_amber_a700.svg"
                alt="arrow_left"
              />
            }
            shape="square"
            color="amber_A700"
            size="xs"
            variant="outline"
          >
            <div className="!text-amber-A700 font-inter font-medium text-left text-sm">
              {props?.shopNow}
            </div>
          </Button>
        </div>
        <Img className="h-5 mr-2 w-5" alt="close" src={props?.close} />
      </div>
    </>
  );
};

HomepageTwoRowshopNow.defaultProps = {
  search: "images/img_search_white_a700_01.svg",
  offer: "30% off storewide — Limited time! ",
  shopNow: "Shop Now",
  close: "images/img_close.svg",
};

export default HomepageTwoRowshopNow;

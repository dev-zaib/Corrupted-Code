import React from "react";

import { Button, Img, List, Text } from "components";
import FlyoutCartColumnshipping from "components/FlyoutCartColumnshipping";
import FlyoutCartColumntraytable from "components/FlyoutCartColumntraytable";

const FlyoutCartPage: React.FC = () => {
  const flyoutCartColumntraytablePropList = [
    {},
    { colortext: "Color: Red", image: "images/img_pasteimage_62.png" },
    {
      traytabletext: "Table lamp",
      pricetext: "$39.00",
      colortext: "Color: gold",
      image: "images/img_pasteimage_63.png",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-poppins h-[1024px] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1027px] w-full"
        style={{ backgroundImage: "url('images/img_flyoutcart.png')" }}
      >
        <div className="bg-white-A700 flex flex-col gap-4 h-[1024px] md:h-auto items-center justify-between md:px-5 px-6 py-10 w-[413px] sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              <Text
                className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 tracking-[-0.60px] w-auto"
                size="txtPoppinsMedium28"
              >
                Cart
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_iconscloseline.svg"
                alt="iconscloseline"
              />
            </div>
            <List
              className="flex flex-col font-inter gap-6 items-start w-full"
              orientation="vertical"
            >
              {flyoutCartColumntraytablePropList.map((props, index) => (
                <React.Fragment key={`FlyoutCartColumntraytable${index}`}>
                  <FlyoutCartColumntraytable
                    className="border-b border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-between my-0 py-6 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <div className="flex flex-col font-inter gap-4 h-[210px] md:h-auto items-center justify-between w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <FlyoutCartColumnshipping className="border-b border-blue_gray-50 border-solid flex flex-col items-start justify-start py-[13px] w-full" />
              <FlyoutCartColumnshipping
                className="flex flex-col font-poppins items-start justify-start py-[13px] w-full"
                subtotaltext="Total"
                pricetext="$234.00"
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Button
                className="cursor-pointer font-medium rounded-md text-center text-lg tracking-[-0.40px] w-full"
                shape="round"
                color="gray_900_02"
                size="xl"
                variant="fill"
              >
                Checkout
              </Button>
              <Text
                className="border-b border-gray-900_01 border-solid py-0.5 text-gray-900_01 text-sm w-auto"
                size="txtInterSemiBold14Gray90001"
              >
                View Cart
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyoutCartPage;

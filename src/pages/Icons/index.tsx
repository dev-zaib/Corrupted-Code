import React from "react";

import { Button, Img, Line, Text } from "components";

const IconsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bevietnampro items-center justify-start mx-auto pb-[407px] w-full">
        <div className="flex flex-col md:gap-10 gap-[76px] justify-start w-full">
          <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[75px] py-[100px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1290px] mx-auto w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtBeVietnamProSemiBold48"
                >
                  Icons
                </Text>
                <Line className="bg-white-A700 h-0.5 w-[9%]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-start justify-start md:ml-[0] ml-[75px] md:px-5 w-[33%] md:w-full">
            <div className="flex flex-row items-center justify-start w-[41%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_search.svg"
                alt="search"
              />
              <Img
                className="h-6 ml-6 w-6"
                src="images/img_search_gray_900_02.svg"
                alt="search_One"
              />
              <div className="flex flex-row items-center justify-center ml-6 w-[27%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Text
                  className="bg-gray-900_02 flex h-5 items-center justify-center ml-[5px] my-[3px] rounded-[50%] text-center text-white-A700 text-xs w-5"
                  size="txtInterBold12WhiteA700"
                >
                  2
                </Text>
              </div>
              <Img
                className="h-6 ml-[19px] w-6"
                src="images/img_iconsheartline.svg"
                alt="iconsheartline"
              />
            </div>
            <div className="flex flex-row items-center justify-between mt-1 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_refresh.svg"
                alt="refresh_One"
              />
              <Img
                className="h-6 w-6"
                src="images/img_search_gray_900_02_24x24.svg"
                alt="search_Two"
              />
              <Img
                className="h-6 w-6"
                src="images/img_shippingandde.svg"
                alt="shippingandde"
              />
              <Img
                className="h-6 w-6"
                src="images/img_financeandpay.svg"
                alt="financeandpay"
              />
              <Img className="h-6 w-6" src="images/img_call.svg" alt="call" />
              <Img
                className="h-6 w-6"
                src="images/img_outlinelock01.svg"
                alt="outlinelockOne"
              />
              <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
              <Img
                className="h-6 w-6"
                src="images/img_user_gray_900_02.svg"
                alt="user_One"
              />
              <div className="h-16 md:h-[53px] p-[5px] relative w-16">
                <Img
                  className="h-[53px] m-auto"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Button
                  className="absolute flex h-10 inset-x-[0] items-center justify-center mx-auto top-[14%] w-10"
                  shape="circle"
                  color="gray_900_02"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-1 w-[26%] md:w-full">
              <Img className="h-6 w-6" src="images/img_info.svg" alt="info" />
              <Img
                className="h-6 ml-[22px] w-6"
                src="images/img_socialoutlinefacebook.svg"
                alt="socialoutlinefa"
              />
              <Img
                className="h-6 ml-[26px] w-6"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            <div className="flex flex-row items-center justify-start mt-6 w-[37%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_search_gray_900_02.svg"
                alt="search_Three"
              />
              <Img
                className="h-6 ml-[22px] w-6"
                src="images/img_timeanddateo.svg"
                alt="timeanddateo"
              />
              <Img
                className="h-6 ml-[26px] w-6"
                src="images/img_outlinecamera.svg"
                alt="outlinecamera"
              />
              <Img
                className="h-6 ml-6 w-6"
                src="images/img_edit.svg"
                alt="edit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsPage;

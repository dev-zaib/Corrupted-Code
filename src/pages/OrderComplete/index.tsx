import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import OrderCompleteProcess from "components/OrderCompleteProcess";

const OrderCompletePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 sm:px-5 px-[304px] py-20 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              Complete!
            </Text>
            <OrderCompleteProcess className="font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full" />
          </div>
          <div className="bg-white-A700 flex flex-col gap-10 items-center justify-start md:px-5 px-[95px] py-20 rounded-lg shadow-bs3 w-auto md:w-full">
            <div className="flex flex-col font-poppins gap-4 items-center justify-start w-[546px] sm:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-600 tracking-[-0.60px] w-auto"
                size="txtPoppinsMedium28Gray600"
              >
                Thank you! 🎉
              </Text>
              <Text
                className="leading-[44.00px] max-w-[492px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_04 tracking-[-0.40px]"
                size="txtPoppinsMedium40Gray90004"
              >
                Your order has been received
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-inter gap-10 grid sm:grid-cols-1 grid-cols-3 justify-center w-[546px] sm:w-full"
              orientation="horizontal"
            >
              <div className="md:h-24 h-28 relative w-full">
                <HomepageOneStackcreateyourmessa
                  className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[84%]"
                  pasteimageTwo="images/img_pasteimage_96x80.png"
                />
                <Text
                  className="absolute bg-gray-900_02 flex h-8 items-center justify-center right-[0] rounded-[50%] text-base text-center text-gray-50 top-[0] w-8"
                  size="txtInterSemiBold16Gray50"
                >
                  2
                </Text>
              </div>
              <div className="md:h-24 h-28 relative w-full">
                <HomepageOneStackcreateyourmessa
                  className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[84%]"
                  pasteimageTwo="images/img_pasteimage_83.png"
                />
                <Text
                  className="absolute bg-gray-900_02 flex h-8 items-center justify-center right-[0] rounded-[50%] text-base text-center text-gray-50 top-[0] w-8"
                  size="txtInterSemiBold16Gray50"
                >
                  2
                </Text>
              </div>
              <div className="md:h-24 h-28 relative w-full">
                <HomepageOneStackcreateyourmessa
                  className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[84%]"
                  pasteimageTwo="images/img_pasteimage_63.png"
                />
                <Text
                  className="absolute bg-gray-900_02 flex h-8 items-center justify-center right-[0] rounded-[50%] text-base text-center text-gray-50 top-[0] w-8"
                  size="txtInterSemiBold16Gray50"
                >
                  1
                </Text>
              </div>
            </List>
            <div className="flex flex-row font-inter gap-8 items-center justify-center w-[548px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterSemiBold14Gray600"
                  >
                    Order code:
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterSemiBold14Gray600"
                  >
                    Date:
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterSemiBold14Gray600"
                  >
                    Total:
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterSemiBold14Gray600"
                  >
                    Payment method:
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-gray-900_02 text-sm w-auto"
                  size="txtInterSemiBold14Gray90002"
                >
                  #0123_45678
                </Text>
                <Text
                  className="text-gray-900_02 text-sm w-auto"
                  size="txtInterSemiBold14Gray90002"
                >
                  October 19, 2023
                </Text>
                <Text
                  className="text-gray-900_02 text-sm w-auto"
                  size="txtInterSemiBold14Gray90002"
                >
                  $1,345.00
                </Text>
                <Text
                  className="text-gray-900_02 text-sm w-auto"
                  size="txtInterSemiBold14Gray90002"
                >
                  Credit Card
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-inter font-medium min-w-[203px] rounded-[26px] text-base text-center tracking-[-0.40px]"
              color="gray_900_02"
              size="xl"
              variant="fill"
            >
              Purchase history
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default OrderCompletePage;

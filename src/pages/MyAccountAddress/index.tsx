import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import MyAccountStackplay from "components/MyAccountStackplay";

const MyAccountAddressPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-20 md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start py-20 w-auto">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              My Account
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[7px] items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="bg-gray-100_01 flex flex-col gap-10 items-center justify-start px-4 py-10 rounded-lg w-auto">
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                <MyAccountStackplay className="md:h-20 h-[82px] pr-0.5 relative w-[82px]" />
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterSemiBold20Black900"
                >
                  Sofia Havertz
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="border-b border-gray-900_02 border-solid h-[42px] sm:pr-5 pr-[35px] py-2.5 text-base text-gray-900_02 w-auto"
                  size="txtInterSemiBold16Gray90002"
                >
                  Account
                </Text>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Address
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Orders
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Wishlist
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <a
                    href="javascript:"
                    className="text-base text-gray-600 w-full"
                  >
                    <Text size="txtInterSemiBold16Gray600">Log Out</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:px-10 sm:px-5 px-[72px] w-auto md:w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterSemiBold20Black900"
              >
                Address
              </Text>
              <List
                className="sm:flex-col flex-row gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="border border-gray-600 border-solid flex flex-col gap-2 items-center justify-start p-4 rounded-lg w-[342px]">
                  <div className="flex flex-row gap-[127px] items-start justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtInterSemiBold16Black900"
                    >
                      Billing Address
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_edit_gray_600.svg"
                        alt="edit"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtInterSemiBold16Gray600"
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-[293px]">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      Sofia Havertz
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      (+1) 234 567 890
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      345 Long Island, NewYork, United States
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-600 border-solid flex flex-col gap-2 items-center justify-start p-4 rounded-lg w-[342px]">
                  <div className="flex flex-row items-start justify-between w-[291px]">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtInterSemiBold16Black900"
                    >
                      Shipping Address
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_edit_gray_600.svg"
                        alt="edit"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtInterSemiBold16Gray600"
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-[293px]">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      Sofia Havertz
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      (+1) 234 567 890
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterRegular14Black900"
                    >
                      345 Long Island, NewYork, United States
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default MyAccountAddressPage;

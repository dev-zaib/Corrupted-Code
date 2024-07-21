import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import MyAccountStackplay from "components/MyAccountStackplay";

const MyAccountPage: React.FC = () => {
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
            <div className="flex md:flex-1 flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[72px] w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterSemiBold20Black900"
                >
                  Account Details
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    First name *
                  </Text>
                  <Input
                    name="input"
                    placeholder="First name"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    last name *
                  </Text>
                  <Input
                    name="input_One"
                    placeholder="Last name"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    Display name *
                  </Text>
                  <Input
                    name="input_Two"
                    placeholder="Display name"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Text
                    className="text-gray-600 text-xs w-auto"
                    size="txtInterRegular12Gray600_1"
                  >
                    This will be how your name will be displayed in the account
                    section and in reviews
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    Email *
                  </Text>
                  <Input
                    name="input_Three"
                    placeholder="Email"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterSemiBold20Black900"
                >
                  Password
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    Old password
                  </Text>
                  <Input
                    name="input_Four"
                    placeholder="Old password"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="password"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    new password
                  </Text>
                  <Input
                    name="input_Five"
                    placeholder="New password"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="password"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start max-w-[707px] w-full">
                  <Text
                    className="text-gray-600 text-xs uppercase w-auto"
                    size="txtInterBold12Gray600"
                  >
                    rEPEAT NEW PASSWORD
                  </Text>
                  <Input
                    name="input_Six"
                    placeholder="Repeat new password"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                    type="password"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[183px] text-base text-center tracking-[-0.40px]"
                  shape="round"
                  color="gray_900_02"
                  size="xl"
                  variant="fill"
                >
                  Save changes
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default MyAccountPage;

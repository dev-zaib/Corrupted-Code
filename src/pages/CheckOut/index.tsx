import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import CheckOutColumnordersummary from "components/CheckOutColumnordersummary";
import CheckOutElements from "components/CheckOutElements";
import CheckOutElements1 from "components/CheckOutElements1";
import CheckOutProcess from "components/CheckOutProcess";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const inputThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckOutPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start md:px-10 px-40 sm:px-5 py-20 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              Check Out
            </Text>
            <CheckOutProcess className="font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start py-20 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="border border-gray-600 border-solid flex flex-col font-poppins gap-6 items-start justify-start max-w-[643px] sm:px-5 px-6 py-10 rounded w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtPoppinsMedium20Black900"
                  >
                    Contact Infomation
                  </Text>
                  <List
                    className="sm:flex-col flex-row font-inter md:gap-6 grid sm:grid-cols-1 grid-cols-2 justify-between w-[595px] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                      <Text
                        className="text-gray-600 text-xs uppercase w-auto"
                        size="txtInterBold12Gray600"
                      >
                        fIRST Name
                      </Text>
                      <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-10 md:h-auto items-center justify-start px-4 rounded-md w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtInterRegular16Gray600"
                          >
                            First name
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                      <Text
                        className="text-gray-600 text-xs uppercase w-auto"
                        size="txtInterBold12Gray600"
                      >
                        lAST Name
                      </Text>
                      <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-10 md:h-auto items-center justify-start px-4 rounded-md w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtInterRegular16Gray600"
                          >
                            Last name
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col font-inter gap-3 items-start justify-start w-[595px] md:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Phone Number
                    </Text>
                    <Input
                      name="input"
                      placeholder="Phone number"
                      className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                      type="number"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col font-inter gap-3 items-start justify-start w-[595px] md:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Email address
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="Your Email"
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
                <div className="border border-gray-600 border-solid flex flex-col font-poppins gap-6 items-start justify-start max-w-[643px] sm:px-5 px-6 py-10 rounded w-full">
                  <Text
                    className="text-gray-900_02 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90002"
                  >
                    Shipping Address
                  </Text>
                  <div className="flex flex-col font-inter gap-3 items-start justify-start w-[595px] md:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Street Address *
                    </Text>
                    <Input
                      name="input_Two"
                      placeholder="Stress Address"
                      className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col font-inter gap-3 items-start justify-start w-[595px] md:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Country *
                    </Text>
                    <SelectBox
                      className="border border-gray-600 border-solid h-10 text-base text-left w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="input_Three"
                      options={inputThreeOptionsList}
                      isSearchable={false}
                      placeholder="Country"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-col font-inter gap-3 items-start justify-start w-[595px] md:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Town / City *
                    </Text>
                    <Input
                      name="input_Four"
                      placeholder="Town / City"
                      className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-between w-[595px] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                      <Text
                        className="text-gray-600 text-xs uppercase w-auto"
                        size="txtInterBold12Gray600"
                      >
                        State
                      </Text>
                      <Input
                        name="input_Five"
                        placeholder="State"
                        className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                      <Text
                        className="text-gray-600 text-xs uppercase w-auto"
                        size="txtInterBold12Gray600"
                      >
                        Zip Code
                      </Text>
                      <Input
                        name="input_Six"
                        placeholder="Zip Code"
                        className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                        type="number"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-row font-inter gap-3 items-center justify-start w-auto">
                    <div className="bg-gray-50 border border-gray-600 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtInterRegular16Gray600"
                    >
                      Use a different billing address (optional)
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-600 border-solid flex flex-col font-poppins gap-6 items-start justify-start max-w-[643px] sm:px-5 px-6 py-10 rounded w-full">
                  <Text
                    className="text-gray-900_02 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90002"
                  >
                    Payment method
                  </Text>
                  <div className="flex flex-col font-inter gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="border-b border-gray-600 border-solid flex flex-col gap-6 items-start justify-start pb-8 w-auto sm:w-full">
                      <CheckOutElements className="bg-gray-100_01 border border-gray-900_02 border-solid flex flex-col gap-[395px] items-center justify-start px-4 py-[13px] rounded w-[595px] md:w-full" />
                      <CheckOutElements1 className="bg-white-A700_01 border border-gray-600 border-solid flex flex-col gap-[395px] items-center justify-start px-4 py-[13px] rounded w-[595px] md:w-full" />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[595px] md:w-full">
                      <Text
                        className="text-gray-600 text-xs uppercase w-auto"
                        size="txtInterBold12Gray600"
                      >
                        Card Number
                      </Text>
                      <Input
                        name="input_Seven"
                        placeholder="1234 1234 1234"
                        className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                        shape="round"
                        color="white_A700_01"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-[595px] md:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                        <Text
                          className="text-gray-600 text-xs uppercase w-auto"
                          size="txtInterBold12Gray600"
                        >
                          Expiration date
                        </Text>
                        <Input
                          name="input_Eight"
                          placeholder="MM/YY"
                          className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                          shape="round"
                          color="white_A700_01"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-[285px]">
                        <Text
                          className="text-gray-600 text-xs uppercase w-auto"
                          size="txtInterBold12Gray600"
                        >
                          CVC
                        </Text>
                        <Input
                          name="input_Nine"
                          placeholder="CVC code"
                          className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-gray-600 border-solid rounded-md w-full"
                          shape="round"
                          color="white_A700_01"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-inter font-medium max-w-[643px] text-base text-center tracking-[-0.40px] w-full"
                  shape="round"
                  color="gray_900_02"
                  size="xl"
                  variant="fill"
                >
                  Place Order
                </Button>
              </div>
              <CheckOutColumnordersummary className="bg-white-A700 border border-gray-600 border-solid flex flex-col gap-4 items-start justify-start sm:px-5 px-6 py-4 rounded-md w-[413px] sm:w-full" />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default CheckOutPage;

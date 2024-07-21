import React from "react";

import { Line, List, Text } from "components";

const ColorLibraryPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bevietnampro sm:gap-10 md:gap-10 gap-20 items-center justify-start mx-auto pb-48 w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[75px] py-[100px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtBeVietnamProSemiBold48"
              >
                Color Library
              </Text>
              <Line className="bg-white-A700 h-0.5 w-[11%]" />
            </div>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-right text-white-A700 w-auto"
              size="txtBeVietnamProSemiBold48"
            >
              Desktop
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-inter items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
          <div className="bg-gray-100 flex flex-col items-start justify-start max-w-7xl p-[50px] md:px-10 sm:px-5 w-full">
            <Text
              className="text-black-900 text-xl uppercase w-auto"
              size="txtInterMedium20"
            >
              Primary Color
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-10 pb-[22px] rounded-[15px] w-[22%] md:w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="bg-black-900 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
              <div className="flex flex-row items-center justify-between w-[87%] md:w-full">
                <Text
                  className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22Bluegray80001"
                >
                  Primary 1
                </Text>
                <Text
                  className="text-base text-blue_gray-200 text-right"
                  size="txtInterSemiBold16Bluegray200"
                >
                  #000000
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-start justify-start max-w-7xl mt-20 p-[50px] md:px-10 sm:px-5 w-full">
            <Text
              className="text-black-900 text-xl uppercase w-auto"
              size="txtInterMedium20"
            >
              sECONDARY Color
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-8 w-[93%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-6 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-blue-A400 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                  <Text
                    className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                    size="txtInterSemiBold22Bluegray80001"
                  >
                    Blue
                  </Text>
                  <Text
                    className="mt-[5px] text-base text-blue_gray-200 text-right"
                    size="txtInterSemiBold16Bluegray200"
                  >
                    #377DFF
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-6 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-teal-400 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                  <Text
                    className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                    size="txtInterSemiBold22Bluegray80001"
                  >
                    Green
                  </Text>
                  <Text
                    className="mt-[5px] text-base text-blue_gray-200 text-right"
                    size="txtInterSemiBold16Bluegray200"
                  >
                    #38CB89
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-[22px] rounded-[15px] w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <div className="bg-amber-A700 h-40 rounded-tl-[12px] rounded-tr-[12px] w-full"></div>
                <div className="flex flex-row items-center justify-between w-[87%] md:w-full">
                  <Text
                    className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                    size="txtInterSemiBold22Bluegray80001"
                  >
                    Orange
                  </Text>
                  <Text
                    className="text-base text-blue_gray-200 text-right"
                    size="txtInterSemiBold16Bluegray200"
                  >
                    #FFAB00
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start pb-6 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-deep_orange-500 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                  <Text
                    className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                    size="txtInterSemiBold22Bluegray80001"
                  >
                    Red
                  </Text>
                  <Text
                    className="mt-[5px] text-base text-blue_gray-200 text-right"
                    size="txtInterSemiBold16Bluegray200"
                  >
                    #FF5630
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-gray-100 flex flex-col items-start justify-start max-w-7xl mt-20 p-[50px] md:px-10 sm:px-5 w-full">
            <Text
              className="text-black-900 text-xl uppercase w-auto"
              size="txtInterMedium20"
            >
              Neutral
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-8 w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-gray-900_02 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="h-[27px] text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        07
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #141718
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-gray-900_03 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        06
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #232627
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-blue_gray-900 h-40 rounded-tl-[12px] rounded-tr-[12px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        05
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #343839
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-gray-600 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        04
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #6C7275
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-blue_gray-50 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        03
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #E8ECEF
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-gray-100_01 h-40 rounded-tl-[15px] rounded-tr-[15px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        02
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #F3F5F7
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-6 rounded-[15px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-white-A700_01 h-40 rounded-tl-[12px] rounded-tr-[12px] w-full"></div>
                    <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                      <Text
                        className="text-[22px] text-blue_gray-800_01 sm:text-lg md:text-xl"
                        size="txtInterSemiBold22Bluegray80001"
                      >
                        01
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-blue_gray-200 text-right"
                        size="txtInterSemiBold16Bluegray200"
                      >
                        #FEFEFE
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorLibraryPage;

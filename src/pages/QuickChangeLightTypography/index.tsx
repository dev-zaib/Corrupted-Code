import React from "react";

import { Line, List, Text } from "components";

const QuickChangeLightTypographyPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[70px] w-full">
        <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
          <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[75px] py-[100px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1290px] mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtInterSemiBold48"
                >
                  Typography
                </Text>
                <Line className="bg-white-A700 h-0.5 w-[10%]" />
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-right text-white-A700 w-auto"
                size="txtInterSemiBold48"
              >
                Desktop
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-poppins md:gap-10 gap-[119px] items-start justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-9 items-start justify-start w-auto">
                <Text
                  className="md:text-5xl text-8xl text-gray-900_01 tracking-[-1.92px] w-auto"
                  size="txtPoppinsMedium96"
                >
                  Hero
                </Text>
                <Text
                  className="md:text-5xl text-[80px] text-gray-900_01 tracking-[-3.00px] w-auto"
                  size="txtPoppinsMedium80"
                >
                  Heading 1
                </Text>
                <Text
                  className="md:text-5xl text-7xl text-gray-900_01 tracking-[-2.00px] w-auto"
                  size="txtPoppinsMedium72"
                >
                  Heading 2
                </Text>
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-gray-900_01 tracking-[-1.00px] w-auto"
                  size="txtPoppinsMedium54"
                >
                  Heading 3
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.40px] w-auto"
                  size="txtPoppinsMedium40"
                >
                  Heading 4
                </Text>
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_01 tracking-[-0.60px] w-auto"
                  size="txtPoppinsMedium34"
                >
                  Heading 5
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 tracking-[-0.60px] w-auto"
                  size="txtPoppinsMedium28"
                >
                  Heading 6
                </Text>
                <Text
                  className="text-gray-900_01 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Heading 7
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row font-inter md:gap-10 gap-[200px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[59%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-end w-full">
                    <Text
                      className="mt-1 md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-800"
                      size="txtInterRegular26"
                    >
                      Text 26px
                    </Text>
                    <Text
                      className="text-[22px] text-blue_gray-800 sm:text-lg md:text-xl"
                      size="txtInterRegular22"
                    >
                      Text 22px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterRegular20"
                    >
                      Text 20px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Text 18px
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800"
                      size="txtInterRegular16"
                    >
                      Text 16px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtInterRegular14"
                    >
                      Text 14px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xs"
                      size="txtInterRegular12"
                    >
                      Text 12px
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-end w-full">
                    <Text
                      className="mt-1 md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-800"
                      size="txtInterSemiBold26"
                    >
                      Text 26px
                    </Text>
                    <Text
                      className="text-[22px] text-blue_gray-800 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Text 22px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Text 20px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtInterSemiBold18"
                    >
                      Text 18px
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800"
                      size="txtInterSemiBold16"
                    >
                      Text 16px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtInterSemiBold14"
                    >
                      Text 14px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xs"
                      size="txtInterSemiBold12"
                    >
                      Text 12px
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-end w-full">
                    <Text
                      className="mt-1 md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-800"
                      size="txtInterBold26"
                    >
                      Text 26px
                    </Text>
                    <Text
                      className="text-[22px] text-blue_gray-800 sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Text 22px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterBold20"
                    >
                      Text 20px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtInterBold18"
                    >
                      Text 18px
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800"
                      size="txtInterBold16"
                    >
                      Text 16px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtInterBold14"
                    >
                      Text 14px
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xs"
                      size="txtInterBold12"
                    >
                      Text 12px
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-5 items-end justify-start w-[72%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900_01"
                  size="txtInterMedium26"
                >
                  Button XLarge
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[83px] md:mt-0 mt-1 text-[22px] text-gray-900_01 sm:text-lg md:text-xl"
                size="txtInterMedium22"
              >
                Button Large
              </Text>
              <Text
                className="md:ml-[0] ml-[77px] md:mt-0 my-1 text-gray-900_01 text-lg tracking-[-0.40px]"
                size="txtInterMedium18"
              >
                Button Medium
              </Text>
              <Text
                className="md:ml-[0] ml-[84px] md:mt-0 my-[5px] text-base text-gray-900_01 tracking-[-0.40px]"
                size="txtInterMedium16"
              >
                Button Small
              </Text>
              <Text
                className="mb-[9px] md:ml-[0] ml-[76px] md:mt-0 mt-[5px] text-gray-900_01 text-sm"
                size="txtInterMedium14"
              >
                Button XSmall
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickChangeLightTypographyPage;

import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ShopPageTwoPageheader from "components/ShopPageTwoPageheader";

const buttonOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogOnePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <ShopPageTwoPageheader
          className="bg-white-A700 flex flex-col gap-2 items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full"
          image="images/img_pasteimage_84.png"
          shoplink="Blog"
          shoppage="Our Blog"
          letsdesignthe="Home ideas and design inspiration"
        />
        <div className="bg-white-A700 flex flex-col font-inter items-center justify-start pt-6 w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1120px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-10 items-center justify-start w-auto">
              <Text
                className="border-b border-gray-900_01 border-solid py-0.5 text-gray-900_01 text-sm w-auto"
                size="txtInterSemiBold14Gray90001"
              >
                All Blog
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-600_01 text-sm w-auto"
                  size="txtInterSemiBold14Gray60001"
                >
                  Featured
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-center justify-start w-auto">
              <SelectBox
                className="font-semibold text-base text-left w-[28%] sm:w-full"
                placeholderClassName="text-gray-900_01"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_gray_900_01.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="button_One"
                options={buttonOneOptionsList}
                isSearchable={false}
                placeholder="Sort by"
                shape="square"
                color="gray_900_01"
                size="xs"
                variant="outline"
              />
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row items-start justify-start w-auto">
                <div className="bg-gray-100_01 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-start p-[9px] w-1/4">
                  <Img
                    className="h-[21px] w-[21px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid grid-cols-3 w-3/4"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-end p-2.5 w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_grid_gray_600.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-start p-[11px] w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_settings_gray_600.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-end p-2.5 w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_television_gray_600.svg"
                      alt="television"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1121px] mx-auto w-full">
              <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      7 ways to decor your home like a professional
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_325x357.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Inside a beautiful kitchen organization
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_1.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Decor your bedroom for your children
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_13.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_14.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_15.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_16.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_17.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[325px] md:h-auto object-cover w-full"
                      src="images/img_img_18.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                    <Text
                      className="leading-[28.00px] max-w-[352px] md:max-w-full text-gray-900_04 text-xl"
                      size="txtPoppinsMedium20Gray90004"
                    >
                      Modern texas home is beautiful and completely kid-friendly
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-auto"
                      size="txtInterRegular12Gray600"
                    >
                      October 16, 2023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[163px] rounded-[20px] text-base text-center tracking-[-0.40px]"
              color="gray_900_02"
              size="md"
              variant="outline"
            >
              Show more
            </Button>
          </div>
        </div>
        <ProductPageOneNewsletter className="flex flex-col font-inter items-center justify-start w-full" />
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogOnePage;

import React from "react";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageOneProductcard from "components/HomepageOneProductcard";
import HomepageOneProductcard1 from "components/HomepageOneProductcard1";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ShopPageOneStacklink from "components/ShopPageOneStacklink";

const buttonOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPageOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow
          className="bg-gray-100_01 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
          search="images/img_search_gray_900_02_24x24.svg"
        />
        <Header1 className="bg-white-A700 flex sm:flex-col font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="flex flex-col items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <ShopPageOneStacklink className="max-w-[1120px] mx-auto relative w-full" />
        </div>
        <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-start pb-[100px] pt-[60px] md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-[262px]">
              <Img
                className="h-6 w-6"
                src="images/img_hugeiconinter.svg"
                alt="hugeiconinter"
              />
              <Text
                className="text-gray-900_01 text-xl w-auto"
                size="txtInterSemiBold20Gray90001"
              >
                Filter
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[262px]">
              <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                <Text
                  className="text-base text-gray-900_01"
                  size="txtInterSemiBold16Gray90001"
                >
                  CATEGORIES
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      All Rooms
                    </Text>
                  </div>
                  <Text
                    className="border-b border-gray-900_01 border-solid py-0.5 text-gray-900_01 text-sm w-auto"
                    size="txtInterSemiBold14Gray90001"
                  >
                    Living Room
                  </Text>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      Bedroom
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      Kitchen
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      Bathroom
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      Dinning
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-600_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray60001"
                    >
                      Outdoor
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-200 flex flex-col items-center justify-start pb-[46px] rounded w-[4%]">
                  <div className="bg-gray-600 h-[180px] rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[254px]">
              <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-full">
                <Text
                  className="text-base text-gray-900_01"
                  size="txtInterSemiBold16Gray90001"
                >
                  PRICE
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                  name="value"
                  id="value"
                  label="All Price"
                ></CheckBox>
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="h-6 mr-[5px] w-6"
                  name="value_One"
                  id="value_One"
                  label="$0.00 - 99.99"
                  color="gray_900_02"
                ></CheckBox>
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                  name="value_Two"
                  id="value_Two"
                  label="$100.00 - 199.99"
                ></CheckBox>
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                  name="value_Three"
                  id="value_Three"
                  label="$200.00 - 299.99"
                ></CheckBox>
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                  name="value_Four"
                  id="value_Four"
                  label="$300.00 - 399.99"
                ></CheckBox>
                <CheckBox
                  className="font-semibold text-left text-sm"
                  inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                  name="value_Five"
                  id="value_Five"
                  label="$400.00+"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[419px] items-start justify-between w-auto md:w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterSemiBold20Black900"
              >
                Living Room
              </Text>
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
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    badgemediumOne="-50%"
                    priceOne="$400.00"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_72.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Luxury Sofa"
                    price="$299.00"
                    priceOne="$500.00"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_73.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Table Lamp"
                    price="$19.00"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_74.png"
                    badgemediumOne="-50%"
                    loveseatsofa="White Drawer unit"
                    price="$89.99"
                  />
                  <HomepageOneProductcard
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_75.png"
                    loveseatsofa="Black Tray table"
                    price="$19.99"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_76.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Lamp"
                    price="$39.00"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_77.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Light Beige Pillow"
                    price="$3.99"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_78.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Table Lamp"
                    price="$39.99"
                  />
                  <HomepageOneProductcard1
                    className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                    pasteimage="images/img_pasteimage_4.png"
                    badgemediumOne="-50%"
                    loveseatsofa="Bamboo Basket"
                    price="$9.99"
                  />
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
        </div>
        <ProductPageOneNewsletter className="flex flex-col font-inter items-center justify-start w-full" />
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShopPageOnePage;

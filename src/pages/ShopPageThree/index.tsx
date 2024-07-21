import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ShopPageThreeElementscard from "components/ShopPageThreeElementscard";
import ShopPageTwoPageheader from "components/ShopPageTwoPageheader";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPageThreePage: React.FC = () => {
  const shopPageThreeElementscardPropList = [
    { helloOne: "-50%", hello: "NEW", priceOne: "$13.00" },
    {
      hello: "NEW",
      price: "$39.99",
      pasteimage: "images/img_pasteimage_78.png",
      supersoftcushioOne:
        "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
      offwhitepillow: "Table Lamp",
    },
    {
      offwhitepillow: "White Drawer unit",
      pasteimage: "images/img_pasteimage_82.png",
      price: "$89.99",
    },
    {
      hello: "NEW",
      price: "$299.00",
      pasteimage: "images/img_pasteimage_79.png",
      supersoftcushioOne:
        "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
      offwhitepillow: "Cozy Sofa",
    },
    {
      offwhitepillow: "Bamboo Basket",
      supersoftcushioOne:
        "With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.",
      price: "$9.99",
      pasteimage: "images/img_pasteimage_4.png",
    },
    {
      offwhitepillow: "Black Tray table",
      supersoftcushioOne:
        "Easy to love at a price that’s hard to resist. Buy one or buy a few and make every space where you sit more convenient.",
      price: "$19.19",
      pasteimage: "images/img_pasteimage_75.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow
          className="bg-gray-100_01 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
          search="images/img_search_gray_900_02_24x24.svg"
        />
        <Header1 className="bg-white-A700 flex sm:flex-col font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <ShopPageTwoPageheader className="flex flex-col gap-2 items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full" />
        <div className="flex flex-col font-inter items-start justify-start pb-[100px] pt-[60px] md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1120px] w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-[548px] sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[262px]">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtInterSemiBold16Gray600"
                  >
                    CATEGORIES
                  </Text>
                  <Input
                    name="dropdown"
                    placeholder="Living Room"
                    className="!placeholder:text-gray-900_02 !text-gray-900_02 font-semibold p-0 text-base text-left w-full"
                    wrapClassName="border-2 border-gray-600 border-solid flex w-[262px]"
                    suffix={
                      <Img
                        className="h-8 ml-[35px] my-auto"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    shape="round"
                    color="gray_600"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[262px]">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtInterSemiBold16Gray600"
                  >
                    PRICE
                  </Text>
                  <Input
                    name="dropdown_One"
                    placeholder="All Price"
                    className="!placeholder:text-gray-900_02 !text-gray-900_02 font-semibold p-0 text-base text-left w-full"
                    wrapClassName="border-2 border-gray-600 border-solid flex w-[262px]"
                    suffix={
                      <Img
                        className="h-8 ml-[35px] my-auto"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    shape="round"
                    color="gray_600"
                    size="md"
                    variant="fill"
                  ></Input>
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
                  name="button"
                  options={buttonOptionsList}
                  isSearchable={false}
                  placeholder="Sort by"
                  shape="square"
                  color="gray_900_01"
                  size="xs"
                  variant="outline"
                />
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row items-start justify-start w-auto">
                  <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-start p-[9px] w-1/4">
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_grid_gray_600_21x21.svg"
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
                    <div className="bg-gray-100_02 border-blue_gray-50 border-r border-solid flex flex-col items-center justify-start p-[11px] w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_settings_gray_900_02.svg"
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
                <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  {shopPageThreeElementscardPropList.map((props, index) => (
                    <React.Fragment key={`ShopPageThreeElementscard${index}`}>
                      <ShopPageThreeElementscard
                        className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
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

export default ShopPageThreePage;

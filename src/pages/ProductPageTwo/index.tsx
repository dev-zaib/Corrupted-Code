import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageOneRowFour from "components/HomepageOneRowFour";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import ProductPageOneColumnTwo from "components/ProductPageOneColumnTwo";
import ProductPageOneColumnsku from "components/ProductPageOneColumnsku";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ProductPageOneRowlinkThree from "components/ProductPageOneRowlinkThree";
import ProductPageTwoStacknewarrivals from "components/ProductPageTwoStacknewarrivals";

const elementsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const elementsOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const elementsTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductPageTwoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto overflow-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center pr-[252px] md:px-5 w-full">
          <HomepageTwoRowshopNow
            className="bg-gray-100_01 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
            search="images/img_search_gray_900_02_24x24.svg"
          />
          <Header1 className="bg-white-A700 border-b border-gray-100_01 border-solid flex sm:flex-col font-poppins md:gap-10 items-center justify-between md:px-10 px-40 sm:px-5 py-4 w-full" />
          <div className="bg-white-A700 flex flex-col font-inter gap-4 items-start justify-start max-w-[1440px] pb-10 pt-4 w-full">
            <ProductPageOneRowlinkThree
              className="flex flex-row gap-4 items-start justify-start md:pl-10 pl-40 sm:pl-5 w-auto sm:w-full"
              shoptext="Shop"
              shoparrow="images/img_arrowright.svg"
              livingroomtext="Living Room"
              livingroomarrow="images/img_arrowright.svg"
            />
            <div className="flex md:flex-col flex-row md:gap-10 gap-[63px] items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <HomepageOneStackcreateyourmessa
                      className="h-[349px] relative w-full"
                      pasteimageTwo="images/img_pasteimage_729x548.png"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <HomepageOneStackcreateyourmessa
                      className="flex flex-col items-center justify-start w-full"
                      pasteimageTwo="images/img_pasteimage_69.png"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[349px] md:h-auto object-cover w-full"
                        src="images/img_pasteimage_67.png"
                        alt="pasteimage"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[349px] md:h-auto object-cover w-full"
                        src="images/img_pasteimage_70.png"
                        alt="pasteimage"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[349px] md:h-auto object-cover w-full"
                        src="images/img_pasteimage_66.png"
                        alt="pasteimage"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[349px] md:h-auto object-cover w-full"
                        src="images/img_pasteimage_71.png"
                        alt="pasteimage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col sm:h-auto items-start justify-start w-[508px] sm:w-full">
                  <div className="border-b border-blue_gray-50 border-solid flex flex-col gap-4 items-start justify-start pb-4 w-auto sm:w-full">
                    <div className="flex flex-row font-inter gap-2.5 items-center justify-start w-auto">
                      <HomepageOneRowFour className="sm:flex-col flex-row gap-0.5 grid grid-cols-5 w-[56%]" />
                      <Text
                        className="text-gray-900_02 text-xs w-auto"
                        size="txtInterRegular12Gray90002"
                      >
                        11 Reviews
                      </Text>
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 tracking-[-0.40px] w-auto"
                      size="txtPoppinsMedium40Gray90002"
                    >
                      Tray Table
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[508px] md:max-w-full text-base text-gray-600"
                      size="txtInterRegular16Gray600"
                    >
                      Buy one or buy a few and make every space where you sit
                      more convenient. Light and easy to move around with
                      removable tray top, handy for serving snacks.
                    </Text>
                    <div className="flex flex-row font-poppins gap-3 items-center justify-start w-[508px] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 tracking-[-0.60px] w-auto"
                        size="txtPoppinsMedium28"
                      >
                        $199.00
                      </Text>
                      <Text
                        className="line-through text-gray-600 text-xl w-auto"
                        size="txtPoppinsMedium20Gray600"
                      >
                        $400.00
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start py-4 w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtInterSemiBold16Gray600"
                      >
                        Measurements
                      </Text>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtInterRegular20Black900"
                      >
                        <>17 1/2x20 5/8 &quot;</>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtInterSemiBold16Gray600"
                          >
                            Choose Color
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_hugeiconarrow.svg"
                            alt="hugeiconarrow"
                          />
                        </div>
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtInterRegular20Black900"
                        >
                          Black
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-4 grid grid-cols-4 justify-start w-auto"
                        orientation="horizontal"
                      >
                        <div className="border border-gray-900_02 border-solid flex flex-col h-[72px] items-center justify-start w-full">
                          <div className="flex flex-col h-[72px] items-center justify-start w-[72px]">
                            <Img
                              className="h-[72px] md:h-auto object-cover w-[72px]"
                              src="images/img_pasteimage_72x72.png"
                              alt="pasteimage"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-[71px] md:w-full">
                            <Img
                              className="h-[72px] md:h-auto object-cover w-[71px] sm:w-full"
                              src="images/img_pasteimage_72x71.png"
                              alt="pasteimage"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-[71px] md:w-full">
                            <Img
                              className="h-[72px] md:h-auto object-cover w-[71px] sm:w-full"
                              src="images/img_pasteimage_64.png"
                              alt="pasteimage"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col h-[72px] items-center justify-start w-full">
                          <div className="flex flex-col h-[72px] items-center justify-start w-[72px]">
                            <Img
                              className="h-[72px] md:h-auto object-cover w-[72px]"
                              src="images/img_pasteimage_65.png"
                              alt="pasteimage"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <ProductPageOneColumnTwo className="flex flex-col gap-4 items-start justify-start py-6 w-auto sm:w-full" />
                <ProductPageOneColumnsku className="flex flex-col gap-2 items-start justify-start py-4 w-[508px] sm:w-full" />
                <div className="flex flex-col items-start justify-start py-2 w-full">
                  <SelectBox
                    className="font-medium text-left text-lg tracking-[-0.40px] w-full"
                    placeholderClassName="text-gray-900_02"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="elements"
                    options={elementsOptionsList}
                    isSearchable={false}
                    placeholder="Additional Info"
                    shape="square"
                    color="gray_600"
                    size="sm"
                    variant="outline"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start py-2 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtInterSemiBold14Gray600"
                      >
                        Details
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[508px] md:max-w-full text-gray-900_02 text-xs"
                        size="txtInterRegular12Gray90002"
                      >
                        You can use the removable tray for serving. The design
                        makes it easy to put the tray back after use since you
                        place it directly on the table frame without having to
                        fit it into any holes.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtInterSemiBold14Gray600"
                      >
                        Packaging
                      </Text>
                      <Text
                        className="leading-[20.00px] text-gray-900_02 text-xs"
                        size="txtInterRegular12Gray90002"
                      >
                        <>
                          Width: 20 &quot; Height: 1 ½ &quot; Length: 21 ½
                          &quot;
                          <br />
                          Weight: 7 lb 8 oz
                          <br />
                          Package(s): 1
                        </>
                      </Text>
                    </div>
                  </div>
                  <SelectBox
                    className="font-medium text-left text-lg tracking-[-0.40px] w-full"
                    placeholderClassName="text-gray-900_02"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="elements_One"
                    options={elementsOneOptionsList}
                    isSearchable={false}
                    placeholder="Questions"
                    shape="square"
                    color="gray_600"
                    size="sm"
                    variant="outline"
                  />
                  <SelectBox
                    className="font-medium text-left text-lg tracking-[-0.40px] w-full"
                    placeholderClassName="text-gray-900_02"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="elements_Two"
                    options={elementsTwoOptionsList}
                    isSearchable={false}
                    placeholder="Reviews (11)"
                    shape="square"
                    color="gray_600"
                    size="sm"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-5 w-full">
          <ProductPageTwoStacknewarrivals className="sm:h-[2682px] h-[687px] md:h-[878px] pb-20 md:pl-10 pl-40 sm:pl-5 pt-10 relative w-[1692px] md:w-full" />
        </div>
        <div className="flex flex-col items-center pr-[252px] md:px-5 w-full">
          <ProductPageOneNewsletter className="flex flex-col items-center justify-start w-full" />
          <Footer className="bg-gray-900_02 flex gap-[49px] items-center justify-center pb-8 pt-20 md:px-10 px-40 sm:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductPageTwoPage;

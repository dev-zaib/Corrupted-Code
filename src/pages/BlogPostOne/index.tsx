import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ProductPageOneRowlinkThree from "components/ProductPageOneRowlinkThree";

const BlogPostOnePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col font-inter gap-10 items-start justify-start pb-20 pt-4 md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-14 items-start justify-start max-w-[1121px] mx-auto w-full">
            <ProductPageOneRowlinkThree
              className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full"
              livingroomtext="Blog"
              livingroomarrow="images/img_arrowright.svg"
              producttext="How to make a busy bathroom a place to relax"
            />
            <div className="flex flex-col gap-6 items-start justify-start max-w-[1121px] w-full">
              <Text
                className="text-black-900 text-xs uppercase w-auto"
                size="txtInterBold12Black900"
              >
                Article
              </Text>
              <Text
                className="leading-[58.00px] max-w-[834px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-gray-900_02 tracking-[-1.00px]"
                size="txtPoppinsMedium54Gray90002"
              >
                How to make a busy bathroom a place to relax
              </Text>
              <div className="flex flex-row font-inter gap-12 items-start justify-start w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search_gray_600_24x24.svg"
                    alt="search_Two"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtInterRegular16Gray600"
                  >
                    Henrik Annemark
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_timeanddateo_gray_600.svg"
                    alt="timeanddateo"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtInterRegular16Gray600"
                  >
                    October 16, 2023
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[646px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_646x1119.png"
                  alt="pasteimage"
                />
              </div>
              <Text
                className="leading-[26.00px] text-base text-black-900"
                size="txtInterRegular16Black900"
              >
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    Your bathroom serves a string of busy functions on a daily
                    basis. See how you can make all of them work, and still have
                    room for comfort and relaxation.
                    <br />
                  </>
                </span>
                <span className="md:text-[26px] sm:text-2xl text-black-900 tracking-[-0.60px] font-poppins text-left text-[28px] font-medium">
                  <>
                    A cleaning hub with built-in ventilation
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  Use a rod and a shower curtain to create a complement to your
                  cleaning cupboard. Unsightly equipment is stored out of sight
                  yet accessibly close – while the air flow helps dry any
                  dampness.
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <HomepageOneStackcreateyourmessa
                  className="flex flex-col items-center justify-start w-[49%] md:w-full"
                  pasteimageTwo="images/img_pasteimage_85.png"
                />
                <HomepageOneStackcreateyourmessa
                  className="flex flex-col items-center justify-start w-[49%] md:w-full"
                  pasteimageTwo="images/img_pasteimage_86.png"
                />
              </div>
              <Text
                className="leading-[26.00px] text-base text-black-900"
                size="txtInterRegular16Black900"
              >
                <span className="md:text-[26px] sm:text-2xl text-black-900 tracking-[-0.60px] font-poppins text-left text-[28px] font-medium">
                  <>
                    Storage with a calming effect
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    Having a lot to store doesn’t mean it all has to go in a
                    cupboard. Many bathroom items are better kept out in the
                    open – either to be close at hand or are nice to look at.
                    Add a plant or two to set a calm mood for the entire room
                    (and they’ll thrive in the humid air).
                    <br />
                  </>
                </span>
                <span className="md:text-[26px] sm:text-2xl text-black-900 tracking-[-0.60px] font-poppins text-left text-[28px] font-medium">
                  <>
                    Kit your clutter for easy access
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  Even if you have a cabinet ready to swallow the clutter, it’s
                  worth resisting a little. Let containers hold kits for
                  different activities – home spa, make-up, personal hygiene –
                  to bring out or put back at a moment’s notice.
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                <Img
                  className="h-[729px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_87.png"
                  alt="pasteimage_Three"
                />
              </div>
              <Text
                className="leading-[26.00px] text-base text-black-900"
                size="txtInterRegular16Black900"
              >
                <span className="md:text-[26px] sm:text-2xl text-black-900 tracking-[-0.60px] font-poppins text-left text-[28px] font-medium">
                  <>
                    An ecosystem of towels
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    Racks or hooks that allow air to circulate around each towel
                    prolong their freshness. They dry quick and the need for
                    frequent washing is minimized.
                    <br />
                  </>
                </span>
                <span className="md:text-[26px] sm:text-2xl text-black-900 tracking-[-0.60px] font-poppins text-left text-[28px] font-medium">
                  <>
                    Make your mop disappear
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  Having your cleaning tools organized makes them easier to both
                  use and return to. When they’re not needed, close the curtain
                  and feel the peace of mind it brings.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-12 items-start justify-start md:px-10 px-40 sm:px-5 py-20 w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-12 items-end justify-between max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.60px] w-auto"
              size="txtPoppinsMedium28Black900"
            >
              You might also like
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[122px]"
              rightIcon={
                <Img
                  className="h-5 mb-px ml-1"
                  src="images/img_arrowleft_gray_900_01.svg"
                  alt="arrow_left"
                />
              }
              shape="square"
              color="gray_900_01"
              size="xs"
              variant="outline"
            >
              <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                More Articles
              </div>
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1121px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
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
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
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
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
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
          </List>
        </div>
        <ProductPageOneNewsletter className="flex flex-col font-inter items-center justify-start w-full" />
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogPostOnePage;

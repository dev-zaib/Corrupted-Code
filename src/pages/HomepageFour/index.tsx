import React from "react";

import { Button, Img, Input, List, PagerIndicator, Text } from "components";
import Header from "components/Header";
import HomepageFourBanner from "components/HomepageFourBanner";
import HomepageOneProductcard1 from "components/HomepageOneProductcard1";
import HomepageOneRowFour from "components/HomepageOneRowFour";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import HomepageThreeBlogsection from "components/HomepageThreeBlogsection";
import HomepageTwoElementscard from "components/HomepageTwoElementscard";
import HomepageTwoNavigationdots from "components/HomepageTwoNavigationdots";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import HomepageTwoStacklistentotheamazOne from "components/HomepageTwoStacklistentotheamazOne";
import HomepageTwoValues from "components/HomepageTwoValues";

const HomepageFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow
          className="bg-blue-A400 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
          close="images/img_close_white_a700_01.svg"
        />
        <Header className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start w-auto md:w-full">
          <HomepageTwoStacklistentotheamazOne
            className="flex flex-col items-center justify-start md:px-5 w-1/2 md:w-full"
            pasteimage="images/img_pasteimage_820x720.png"
          />
          <div className="bg-gray-900_05 flex flex-col items-start justify-start p-[63px] md:px-5 w-1/2 md:w-full">
            <div className="flex flex-col gap-7 items-start justify-center mb-[204px] mt-[182px] w-[497px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <div className="flex flex-col font-poppins items-start justify-center w-full">
                  <Text
                    className="leading-[76.00px] max-w-[497px] md:max-w-full md:text-5xl text-7xl text-white-A700_01 tracking-[-2.00px]"
                    size="txtPoppinsMedium72WhiteA70001"
                  >
                    Bring the warmth.
                  </Text>
                </div>
                <Text
                  className="leading-[32.00px] text-white-A700_01 text-xl"
                  size="txtInterRegular20WhiteA70001"
                >
                  <>
                    Everyone needs a good winter jacket. <br />
                    Find yours with our collection and more.
                  </>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[234px] text-center text-lg tracking-[-0.40px]"
                shape="round"
                color="blue_A400"
                size="xl"
                variant="fill"
              >
                Shopping Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter gap-4 items-center justify-start pt-10 w-auto md:w-full">
          <Text
            className="text-gray-900_02 text-xl w-auto"
            size="txtInterSemiBold20Gray90002"
          >
            Trending Brands
          </Text>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full">
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo01.png"
              alt="teamlogologoOne"
            />
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo04.png"
              alt="teamlogologoFour"
            />
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo05.png"
              alt="teamlogologoFive"
            />
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo02.png"
              alt="teamlogologoTwo"
            />
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo03.png"
              alt="teamlogologoThree"
            />
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_teamlogologo01.png"
              alt="teamlogologoSix"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] overflow-auto md:pl-10 pl-40 sm:pl-5 py-12 w-full">
          <div className="flex flex-row md:gap-12 items-center justify-between max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Black900"
            >
              Just In
            </Text>
            <HomepageTwoNavigationdots className="flex flex-row gap-2 items-center justify-end w-auto" />
          </div>
          <List
            className="sm:flex-col flex-row font-inter gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start max-w-[1406px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_39.png"
                favoritebutton="images/img_favorite.svg"
                addtocartbutton="Add to cart"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    96 Nuptse Dip Dye Korea Puffers Jacket
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $400.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_40.png"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Paradigm Chilliwack Black Label Jacket
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $349.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_41.png"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    1996 Retro Nuptse Jacket in Black
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $149.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <HomepageOneProductcard1
              className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
              pasteimage="images/img_pasteimage_42.png"
              loveseatsofa="Paul Quilted Nylon Puffer bomber jacket"
              price="$300.00"
            />
            <HomepageOneProductcard1
              className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
              pasteimage="images/img_pasteimage_43.png"
              loveseatsofa="Chilliwack jacket Bomber HUMANATURE"
              price="$1,195"
            />
          </List>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] md:pl-10 pl-40 sm:pl-5 py-12 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_04 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Gray90004"
            >
              Shop by Categories
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-inter gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start max-w-[1122px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_167x167.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Puffers
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_44.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Bombers
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_45.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Lightweight jackets
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_46.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Gilets
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_47.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Coats
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-col h-[167px] items-center justify-start rounded-[83px] w-[167px]">
                <Img
                  className="h-[167px] md:h-auto rounded-[50%] w-[167px]"
                  src="images/img_pasteimage_48.png"
                  alt="pasteimage"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-center text-gray-900_01 text-sm w-full"
                  size="txtInterSemiBold14Gray90001"
                >
                  Rainwear
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-start py-12 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
            <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
                <HomepageOneStackcreateyourmessa
                  className="h-[664px] relative w-full"
                  pasteimageTwo="images/img_pasteimage_49.png"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
                <HomepageOneStackcreateyourmessa
                  className="h-[664px] relative w-full"
                  pasteimageTwo="images/img_pasteimage_50.png"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
                <HomepageOneStackcreateyourmessa
                  className="h-[664px] relative w-full"
                  pasteimageTwo="images/img_pasteimage_51.png"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
                <HomepageOneStackcreateyourmessa
                  className="h-[664px] relative w-full"
                  pasteimageTwo="images/img_pasteimage_52.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] pb-[100px] md:pl-10 pl-40 sm:pl-5 pt-12 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Black900"
            >
              Best Seller
            </Text>
          </div>
          <div className="font-inter md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1120px] min-h-[auto] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_42.png"
                newbadge="Hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Freestyle Crew Racer leather jacket
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $595.00
                    </Text>
                    <Text
                      className="line-through text-gray-600 text-sm w-auto"
                      size="txtInterRegular14Gray600"
                    >
                      $1000.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_41.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    1996 Retro Nuptse Cashmere Jacket in Gray
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $149.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_40.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Chilliwack black Bomber HUMANATURE
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $1195.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_53.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    96 Nuptse Dip Dye bomber Jacket
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $400.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_54.png"
                newbadge="Hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Oversized real leather harrington jacket in black
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $249.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_39.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>Men&#39;s Diamond Quilted Bomber Hoody</>
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $199.95
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_55.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Paradigm Chilliwack coat Black Label
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $1495.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_56.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>Men&#39;s Torrentshell 3L Rain Jacket in Brown</>
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $149.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomepageFourBanner className="flex flex-col font-inter items-center justify-start w-full" />
        <div className="flex flex-col items-center justify-start md:px-10 px-40 sm:px-5 py-10 w-auto md:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto">
            <Text
              className="text-base text-blue-A400 text-center uppercase w-full"
              size="txtInterBold16BlueA400"
            >
              pROMOTION
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40"
            >
              Winter Collections
            </Text>
            <Text
              className="text-center text-gray-900_01 text-xl w-auto"
              size="txtInterRegular20Gray90001"
            >
              Introducing the new winter jackets.
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[544px] md:h-auto items-center justify-center max-w-[1120px] mx-auto md:px-5 px-[280px] py-[180px] rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_video.png')" }}
          >
            <div className="bg-gray-50 flex flex-col h-20 md:h-auto items-center justify-center rounded-[50%] shadow-bs1 w-20">
              <Img
                className="h-6 w-6"
                src="images/img_iconsplayfilled.svg"
                alt="iconsplayfilled"
              />
            </div>
          </div>
        </div>
        <HomepageThreeBlogsection
          className="bg-white-A700 flex flex-col gap-10 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-20 w-full"
          articleimage1="images/img_img_10.png"
          articletitle1="2023 Holiday Gift Guide"
          articleimage2="images/img_img_11.png"
          articletitle2="2023 Holiday Gift Guide"
          articleimage3="images/img_img_12.png"
          articletitle3="2023 Holiday Gift Guide"
        />
        <div className="bg-white-A700 flex flex-col gap-10 items-center justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-10 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="text-base text-center text-gray-600 uppercase w-full"
              size="txtInterBold16Gray600"
            >
              newsfeed
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.40px] w-full"
              size="txtPoppinsMedium40"
            >
              Instagram
            </Text>
            <Text
              className="text-center text-gray-900_01 text-xl w-auto"
              size="txtInterRegular20Gray90001"
            >
              Follow us on social media for more discount & promotions
            </Text>
            <Text
              className="text-center text-gray-600 text-xl w-auto"
              size="txtPoppinsMedium20Gray600"
            >
              @3legant_official
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1120px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_58.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_59.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_60.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_61.png"
                alt="pasteimage"
              />
            </div>
          </List>
        </div>
        <HomepageTwoValues className="flex md:flex-col flex-row font-poppins gap-6 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-4 w-full" />
        <footer className="bg-blue_gray-50 flex font-poppins items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[352px]">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    <span className="text-black-900 font-poppins font-medium">
                      3legant
                    </span>
                    <span className="text-gray-900_02 font-poppins font-medium">
                      <>.</>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-start justify-start w-[161px]">
                  <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-900_02 text-sm"
                        >
                          <Text size="txtInterRegular14Gray90002">
                            43111 Hai Trieu street,
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-900_02 text-sm"
                        >
                          <Text size="txtInterRegular14Gray90002">
                            District 1, HCMC
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-900_02 text-sm"
                        >
                          <Text size="txtInterRegular14Gray90002">Vietnam</Text>
                        </a>
                      </li>
                    </ul>
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterRegular14Gray90002"
                    >
                      84-756-3237
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_socialoutlinefacebook.svg"
                    alt="socialoutlinefa"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-40">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtPoppinsMedium16Gray90002"
                >
                  Page
                </Text>
                <ul className="flex flex-col font-inter gap-6 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Shop</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Product</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Articles</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Contact Us</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-40">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtPoppinsMedium16Gray90002"
                >
                  Info
                </Text>
                <ul className="flex flex-col font-inter gap-6 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">
                        Shipping Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">
                        Return & Refund
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">Support</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-gray-900_02 text-sm">
                      <Text size="txtInterRegular14Gray90002">FAQs</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-inter gap-10 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900_02 w-auto"
                  size="txtInterSemiBold16Gray90002"
                >
                  Join Newsletter
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="leading-[22.00px] max-w-[352px] md:max-w-full text-gray-900_02 text-sm"
                    size="txtInterRegular14Gray90002"
                  >
                    <span className="text-gray-900_02 font-inter text-left font-normal">
                      Subscribe our newsletter to get more
                    </span>
                    <span className="text-gray-900_02 font-inter text-left font-normal">
                      {" "}
                      deals, new products and promotions
                    </span>
                  </Text>
                  <Input
                    name="singleinputfiel"
                    placeholder="Enter your email"
                    className="font-poppins p-0 placeholder:text-gray-600 text-left text-sm w-full"
                    wrapClassName="flex rounded-[24px] w-full"
                    type="email"
                    suffix={
                      <div className="h-8 ml-3 pt-[11px] pb-3 w-8 bg-blue-A400 rounded-[50%] px-[9px]">
                        <Img
                          className="my-auto"
                          src="images/img_arrowleft_gray_50.svg"
                          alt="arrow_left"
                        />
                      </div>
                    }
                    color="gray_600_3f"
                    size="md"
                    variant="outline"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="border-gray-600 border-solid border-t flex flex-col h-24 md:h-auto items-start justify-center py-8 w-auto md:w-full">
              <div className="h-8 sm:h-[54px] relative w-[1120px] md:w-full">
                <div className="absolute flex sm:flex-col flex-row gap-4 h-max inset-[0] items-start justify-start m-auto max-w-[1120px] w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtPoppinsRegular12Gray90002"
                  >
                    Copyright © 2023 3legant. All rights reserved
                  </Text>
                  <div className="border-gray-600 border-l border-solid flex flex-row font-inter gap-4 items-center justify-center pl-4 w-auto">
                    <a
                      href="javascript:"
                      className="text-gray-900_02 text-right text-xs w-auto"
                    >
                      <Text size="txtInterRegular12Gray90002">
                        Privacy Policy
                      </Text>
                    </a>
                    <a
                      href="javascript:"
                      className="text-gray-900_02 text-right text-xs w-auto"
                    >
                      <Text size="txtInterRegular12Gray90002">
                        Terms & Conditions
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-2 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[328px]">
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-[3px] rounded">
                    <Img
                      className="h-[13px] my-1.5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  <Img
                    className="h-8 w-12"
                    src="images/img_thumbsup_white_a700.svg"
                    alt="thumbsup"
                  />
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-1.5 rounded">
                    <Img
                      className="h-[19px]"
                      src="images/img_user_red_a700.svg"
                      alt="user"
                    />
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-[5px] rounded">
                    <Img
                      className="h-[15px] my-0.5"
                      src="images/img_stripe.svg"
                      alt="stripe"
                    />
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-[5px] rounded">
                    <Img
                      className="h-2.5 my-1.5"
                      src="images/img_settings_indigo_800.svg"
                      alt="settings_One"
                    />
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-2 rounded">
                    <Img
                      className="h-[13px]"
                      src="images/img_settings_black_900.svg"
                      alt="settings_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageFourPage;

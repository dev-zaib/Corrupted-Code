import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomepageOneElementscard1 from "components/HomepageOneElementscard1";
import HomepageOneProductcard1 from "components/HomepageOneProductcard1";
import HomepageOneRowFour from "components/HomepageOneRowFour";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import HomepageTwoElementscard from "components/HomepageTwoElementscard";
import HomepageTwoNavigationdots from "components/HomepageTwoNavigationdots";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import HomepageTwoStacklistentotheamazOne from "components/HomepageTwoStacklistentotheamazOne";
import HomepageTwoTimer from "components/HomepageTwoTimer";
import HomepageTwoValues from "components/HomepageTwoValues";

const HomepageTwoPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow className="bg-gray-900_02 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full" />
        <Header className="bg-white-A700 flex md:flex-col font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="flex flex-col font-inter items-center justify-start w-full">
          <HomepageTwoStacklistentotheamazOne className="h-[820px] md:px-5 relative w-full" />
        </div>
        <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start md:px-10 px-40 sm:px-5 py-10 w-auto md:w-full">
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
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] overflow-auto md:pl-10 pl-40 sm:pl-5 py-12 w-full">
          <div className="flex flex-row md:gap-12 items-center justify-between max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Black900"
            >
              New Arrivals
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
                    Skullcandy - Crusher anc 2 wireless headphones
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $299.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_7.png"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>
                      Beats
                      <br />
                      Studio Pro
                    </>
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
                userimage="images/img_pasteimage_8.png"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Sony - WH-CH720N Wireless Noise Canceling
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
              pasteimage="images/img_pasteimage_9.png"
              loveseatsofa="Skullcandy - Rail True Wireless Earbuds"
              price="$79.99"
            />
            <HomepageOneProductcard1
              className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
              pasteimage="images/img_pasteimage_10.png"
              loveseatsofa={
                <>
                  Beats <br />
                  Studio Pro
                </>
              }
              price="$224.99"
            />
          </List>
        </div>
        <div className="flex flex-col font-poppins gap-12 items-center justify-start pt-12 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start max-w-[1120px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Black900"
            >
              Shop Collection
            </Text>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1440px] md:px-10 px-40 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <HomepageOneStackcreateyourmessa
                className="h-[664px] relative w-full"
                pasteimageTwo="images/img_pasteimage_11.png"
              />
            </div>
            <List
              className="flex md:flex-1 flex-col gap-6 h-[662px] items-start w-[548px] md:w-full"
              orientation="vertical"
            >
              <HomepageOneElementscard1
                className="flex flex-col items-center justify-start my-0 w-full"
                userimage="images/img_pasteimage_12.png"
                bedroom="Earbuds"
                shopnowtext="Collection"
              />
              <div className="flex flex-col items-center justify-start my-0 w-full">
                <div className="h-[319px] relative w-full">
                  <Img
                    className="h-[319px] m-auto object-cover w-full"
                    src="images/img_pasteimage_13.png"
                    alt="pasteimage"
                  />
                  <div className="absolute bottom-[13%] flex flex-col gap-3 items-start justify-start left-[6%] w-[420px] sm:w-full">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_01 tracking-[-0.60px] w-auto"
                      size="txtPoppinsMedium34"
                    >
                      Accessories
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[98px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-1"
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
                        Collection
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] pb-[100px] md:pl-10 pl-40 sm:pl-5 pt-12 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1120px] mx-auto w-full">
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
                userimage="images/img_pasteimage_14.png"
                newbadge="Hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Sony - WH-1000XM5 Wireless Noise Canceling
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $299.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_7.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>
                      Beats
                      <br />
                      Studio Pro
                    </>
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
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_8.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Sony - WH-CH720N Wireless Noise Canceling
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
              pasteimage="images/img_pasteimage_9.png"
              badgemedium="hot"
              loveseatsofa="Skullcandy - Rail True Wireless Earbuds"
              price="$79.99"
            />
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_10.png"
                newbadge="Hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>
                      Beats <br />
                      Studio Pro
                    </>
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
                userimage="images/img_pasteimage_15.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $179.95
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_16.png"
                newbadge="hot"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>
                      Bose
                      <br />
                      QuietComfort Headphones
                    </>
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $349.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <HomepageOneProductcard1
              className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
              pasteimage="images/img_pasteimage_17.png"
              badgemedium="hot"
              loveseatsofa={
                <>
                  AKG
                  <br />
                  Y600NC Wireless
                </>
              }
              price="$349.99"
            />
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <HomepageOneStackcreateyourmessa
              className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-1/2 md:w-full"
              pasteimageTwo="images/img_pasteimage_18.png"
            />
            <div className="bg-white-A700 flex flex-1 flex-col gap-6 h-[532px] md:h-auto items-start justify-center max-w-[720px] pl-[72px] pr-40 md:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-blue-A400 uppercase w-full"
                  size="txtInterBold16BlueA400"
                >
                  pROMOTION
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.40px] w-full"
                  size="txtPoppinsMedium40"
                >
                  Hurry up! 40% OFF
                </Text>
                <Text
                  className="text-gray-900_01 text-xl w-auto"
                  size="txtInterRegular20Gray90001"
                >
                  Thousands of high tech are waiting for you
                </Text>
              </div>
              <HomepageTwoTimer className="flex flex-col gap-3 items-start justify-center w-auto" />
              <Button
                className="cursor-pointer font-medium min-w-[154px] text-base text-center tracking-[-0.40px]"
                shape="round"
                color="gray_900_02"
                size="md"
                variant="fill"
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <HomepageTwoValues className="bg-white-A700 flex flex-col font-poppins gap-6 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-10 w-full" />
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
                src="images/img_pasteimage_262x262.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_19.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_20.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-1 flex-col h-[262px] items-center justify-start w-full">
              <Img
                className="h-[262px] md:h-auto object-cover w-[262px]"
                src="images/img_pasteimage_21.png"
                alt="pasteimage"
              />
            </div>
          </List>
        </div>
        <div className="flex flex-col font-inter items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <HomepageOneStackcreateyourmessa
              className="h-[360px] md:px-5 relative w-full"
              pasteimageTwo="images/img_pasteimage_22.png"
            />
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepageTwoPage;

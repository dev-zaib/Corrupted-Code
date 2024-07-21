import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import HomepageOneElementscard1 from "components/HomepageOneElementscard1";
import HomepageOneRowFour from "components/HomepageOneRowFour";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import HomepageThreeBlogsection from "components/HomepageThreeBlogsection";
import HomepageTwoElementscard from "components/HomepageTwoElementscard";
import HomepageTwoNavigationdots from "components/HomepageTwoNavigationdots";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import HomepageTwoStacklistentotheamazOne from "components/HomepageTwoStacklistentotheamazOne";
import HomepageTwoTimer from "components/HomepageTwoTimer";

const HomepageThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow
          className="bg-teal-400 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
          search="images/img_search_black_900.svg"
        />
        <Header className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="flex flex-col font-inter items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <HomepageTwoStacklistentotheamazOne
              className="h-[820px] md:px-5 relative w-full"
              pasteimage="images/img_pasteimage_23.png"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins gap-12 items-start justify-start max-w-[1440px] overflow-auto md:pl-10 pl-40 sm:pl-5 py-12 w-full">
          <div className="flex flex-row md:gap-12 items-center justify-between max-w-[1120px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
              size="txtPoppinsMedium40Black900"
            >
              Featured
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
                userimage="images/img_pasteimage_24.png"
                newbadge="HOT"
                addtocartbutton="Add to cart"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>Shark - Men&#39;s cabretta white golf glove </>
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $19.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_25.png"
                newbadge="HOT"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    <>Greg Norman - Men&#39;s Shark Logo Golf Polo Shirt</>
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $24.99
                    </Text>
                    <Text
                      className="line-through text-gray-600 text-sm w-auto"
                      size="txtInterRegular14Gray600"
                    >
                      $40.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_26.png"
                newbadge="hOT"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    G/FORE - Mens Left Glove Snow 2023
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $30.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_27.png"
                newbadge="hOT"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Utility Rover-R Double Strap Bag All Black - 2023
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $209.99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <HomepageTwoElementscard
                className="flex flex-col items-center justify-start w-full"
                userimage="images/img_pasteimage_28.png"
                newbadge="hOT"
              />
              <div className="flex flex-col items-start justify-start w-[262px]">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                  <Text
                    className="leading-[26.00px] max-w-[262px] md:max-w-full text-base text-gray-900_02"
                    size="txtInterSemiBold16Gray90002"
                  >
                    Air Jordan 1 Low G Black/Black/Iron Grey - SS23
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtInterSemiBold14Gray90001"
                    >
                      $111.99
                    </Text>
                    <Text
                      className="line-through text-gray-600 text-sm w-auto"
                      size="txtInterRegular14Gray600"
                    >
                      $200.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col font-poppins gap-12 items-center justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-20 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_04 tracking-[-0.40px] w-auto"
            size="txtPoppinsMedium40Gray90004"
          >
            Shop by Categories
          </Text>
          <div className="flex flex-col items-center justify-start max-w-[1119px] mx-auto w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_309x357.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Golf Clubs
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_2.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Golf Balls
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_3.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Golf Bags
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_4.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Clothing & Rainwear
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_5.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Footwear
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-full"
                    src="images/img_img_6.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-64">
                  <Text
                    className="text-center text-gray-900_04 text-xl w-full"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Accessories
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <HomepageOneStackcreateyourmessa
              className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-1/2 md:w-full"
              pasteimageTwo="images/img_pasteimage_29.png"
            />
            <div className="bg-gray-900_02 flex flex-1 flex-col gap-6 h-[532px] md:h-auto items-start justify-center max-w-[720px] pl-[72px] pr-40 md:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-teal-400 uppercase w-full"
                  size="txtInterBold16Teal400"
                >
                  Limited Edition
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700_01 tracking-[-0.40px] w-full"
                  size="txtPoppinsMedium40WhiteA70001"
                >
                  Hurry up! 30% OFF
                </Text>
                <Text
                  className="text-white-A700_01 text-xl w-auto"
                  size="txtInterRegular20WhiteA70001"
                >
                  Find clubs that are right for your game
                </Text>
              </div>
              <HomepageTwoTimer className="flex flex-col gap-3 items-start justify-center w-auto" />
              <Button
                className="cursor-pointer font-medium min-w-[154px] text-base text-center tracking-[-0.40px]"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins gap-12 items-center justify-start py-12 w-auto md:w-full">
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
                pasteimageTwo="images/img_pasteimage_30.png"
              />
            </div>
            <List
              className="flex md:flex-1 flex-col gap-6 h-[662px] items-start w-[548px] md:w-full"
              orientation="vertical"
            >
              <HomepageOneElementscard1
                className="flex flex-col items-center justify-start my-0 w-full"
                userimage="images/img_pasteimage_31.png"
                bedroom="Men’s Set"
                shopnowtext="Collections"
              />
              <div className="flex flex-col items-center justify-start my-0 w-full">
                <div className="h-[319px] relative w-full">
                  <Img
                    className="h-[319px] m-auto object-cover w-full"
                    src="images/img_pasteimage_32.png"
                    alt="pasteimage"
                  />
                  <div className="absolute bottom-[13%] flex flex-col gap-3 items-start justify-start left-[6%] w-[420px] sm:w-full">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_01 tracking-[-0.60px] w-auto"
                      size="txtPoppinsMedium34"
                    >
                      Women’s Set
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
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
                        Collections
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <HomepageThreeBlogsection className="bg-white-A700 flex flex-col gap-10 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-20 w-full" />
        <div className="flex flex-col font-inter items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <HomepageOneStackcreateyourmessa
              className="h-[360px] md:px-5 relative w-full"
              pasteimageTwo="images/img_pasteimage_33.png"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-10 items-center justify-start max-w-[1440px] pt-10 md:px-10 px-40 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="text-base text-center text-gray-600 uppercase w-full"
              size="txtInterBold16Gray600"
            >
              newsfeed
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02 tracking-[-0.40px] w-full"
              size="txtPoppinsMedium40Gray90002"
            >
              Instagram
            </Text>
            <Text
              className="text-center text-gray-900_02 text-xl w-auto"
              size="txtInterRegular20Gray90002"
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
            className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_240x240.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_34.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_35.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_36.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_37.png"
                alt="pasteimage"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] md:px-5 w-full">
              <Img
                className="h-60 md:h-auto object-cover w-60"
                src="images/img_pasteimage_38.png"
                alt="pasteimage"
              />
            </div>
          </List>
        </div>
        <footer className="bg-black-900 flex font-poppins items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[544px] sm:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtPoppinsMedium24WhiteA700"
                  >
                    <span className="text-white-A700 font-poppins font-medium">
                      3legant
                    </span>
                    <span className="text-gray-600 font-poppins font-medium">
                      <>.</>
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[28.00px] max-w-[260px] md:max-w-full text-white-A700_01 text-xl"
                  size="txtPoppinsMedium20WhiteA70001"
                >
                  More than just a game. It’s a lifestyle.
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_info_white_a700_01.svg"
                    alt="info"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_socialoutlinefacebook_white_a700_01.svg"
                    alt="socialoutlinefa"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_user_white_a700_01.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-40">
                <Text
                  className="text-base text-white-A700_01 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Page
                </Text>
                <ul className="flex flex-col font-inter gap-6 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Shop</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Product</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Articles</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Contact Us</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-40">
                <Text
                  className="text-base text-white-A700_01 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Info
                </Text>
                <ul className="flex flex-col font-inter gap-6 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">
                        Shipping Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">
                        Return & Refund
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">Support</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtInterRegular14WhiteA700">FAQs</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-[161px]">
                <Text
                  className="text-base text-white-A700_01 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Office
                </Text>
                <div className="flex flex-col font-inter gap-[18px] items-start justify-start w-auto">
                  <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-sm text-white-A700">
                        <Text size="txtInterRegular14WhiteA700">
                          43111 Hai Trieu street,
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-sm text-white-A700">
                        <Text size="txtInterRegular14WhiteA700">
                          District 1, HCMC
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-sm text-white-A700">
                        <Text size="txtInterRegular14WhiteA700">Vietnam</Text>
                      </a>
                    </li>
                  </ul>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtInterRegular14WhiteA700"
                  >
                    84-756-3237
                  </Text>
                </div>
              </div>
            </div>
            <div className="border-gray-600 border-solid border-t flex flex-col h-24 md:h-auto items-start justify-center py-8 w-auto md:w-full">
              <div className="h-8 sm:h-[54px] relative w-[1120px] md:w-full">
                <div className="absolute flex sm:flex-col flex-row gap-4 h-max inset-[0] items-start justify-start m-auto max-w-[1120px] w-full">
                  <Text
                    className="text-blue_gray-50 text-xs w-auto"
                    size="txtPoppinsRegular12"
                  >
                    Copyright © 2023 3legant. All rights reserved
                  </Text>
                  <div className="border-gray-600 border-l border-solid flex flex-row font-inter gap-4 items-center justify-center pl-4 w-auto">
                    <a
                      href="javascript:"
                      className="text-gray-600 text-right text-xs w-auto"
                    >
                      <Text size="txtInterRegular12Gray600">
                        Privacy Policy
                      </Text>
                    </a>
                    <a
                      href="javascript:"
                      className="text-gray-600 text-right text-xs w-auto"
                    >
                      <Text size="txtInterRegular12Gray600">
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
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-start p-1.5 rounded">
                    <Img
                      className="h-[19px]"
                      src="images/img_user_red_a700.svg"
                      alt="user_One"
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

export default HomepageThreePage;

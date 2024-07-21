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
import Header1 from "components/Header1";
import HomepageOneElementscard from "components/HomepageOneElementscard";
import HomepageOneElementscard1 from "components/HomepageOneElementscard1";
import HomepageOneProductcard from "components/HomepageOneProductcard";
import HomepageOneProductcard1 from "components/HomepageOneProductcard1";
import HomepageOneRowFour from "components/HomepageOneRowFour";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";

const HomepageOnePage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState2, setsliderState2] = React.useState(0);

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto overflow-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center pr-[252px] md:px-5 w-full">
          <div className="bg-gray-100_01 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-center w-auto sm:w-full">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_search_gray_900_02_24x24.svg"
                  alt="search"
                />
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtInterSemiBold14Bluegray900"
                >
                  30% off storewide — Limited time!{" "}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[91px]"
                rightIcon={
                  <Img
                    className="h-[18px] mb-px ml-1"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="square"
                color="blue_A400"
                size="xs"
                variant="outline"
              >
                <div className="font-medium text-left text-sm">Shop Now</div>
              </Button>
            </div>
            <Img
              className="h-5 mr-2 w-5"
              src="images/img_close.svg"
              alt="close"
            />
          </div>
          <Header1 className="bg-white-A700 flex sm:flex-col font-poppins md:gap-10 items-center justify-between md:px-10 px-40 sm:px-5 py-4 w-full" />
          <div className="bg-white-A700 flex flex-col font-poppins gap-8 items-center justify-start max-w-[1440px] pb-10 md:px-10 px-40 sm:px-5 w-full">
            <div className="h-[536px] relative w-full">
              <div className="flex flex-row md:gap-10 h-full items-center justify-between m-auto w-[95%]">
                <Button
                  className="cursor-pointer flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_arrowleft_gray_600.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="cursor-pointer flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  onClick={() => sliderRef.current?.slideNext?.()}
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_arrowleft_gray_900_02.svg"
                    alt="arrowleft_One"
                  />
                </Button>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="absolute inset-[0] justify-center m-auto w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="h-[536px] mx-2.5 relative">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        activeIndex={sliderState1}
                        responsive={{
                          0: { items: 1 },
                          550: { items: 1 },
                          1050: { items: 1 },
                        }}
                        onSlideChanged={(e) => {
                          setsliderState1(e?.item);
                        }}
                        ref={sliderRef1}
                        className="m-auto w-full"
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="flex flex-col items-center justify-start mx-2.5">
                              <div className="h-[536px] relative w-full">
                                <Img
                                  className="h-[536px] m-auto object-cover w-full"
                                  src="images/img_pasteimage_536x1120.png"
                                  alt="pasteimage"
                                />
                                <div className="absolute h-[52px] inset-[0] justify-center m-auto w-[95%]"></div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-2 bg-white-A700_01 w-[30px] relative rounded" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-2 bg-white-A700_01 w-2 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="leading-[76.00px] md:text-5xl text-7xl text-gray-900_02 tracking-[-2.00px]"
                size="txtPoppinsMedium72Gray90002"
              >
                <span className="text-gray-900_02 font-poppins text-left font-medium">
                  Simply{" "}
                </span>
                <span className="text-gray-900_02 font-poppins text-left font-medium">
                  Unique
                </span>
                <span className="text-gray-600 font-poppins text-left font-medium">
                  <>
                    /<br />
                  </>
                </span>
                <span className="text-gray-900_02 font-poppins text-left font-medium">
                  Simply{" "}
                </span>
                <span className="text-gray-900_02 font-poppins text-left font-medium">
                  Better
                </span>
                <span className="text-gray-600 font-poppins text-left font-medium">
                  .
                </span>
              </Text>
              <div className="flex flex-col font-inter items-start justify-start w-[453px] sm:w-full">
                <Text
                  className="leading-[26.00px] max-w-[424px] md:max-w-full text-base text-gray-900_01"
                  size="txtInterSemiBold16Gray90001"
                >
                  <span className="text-blue_gray-900 font-inter text-left font-semibold">
                    3legant{" "}
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    is a gift & decorations store based in HCMC, Vietnam. Est
                    since 2019.{" "}
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1440px] md:px-10 px-40 sm:px-5 w-full">
            <HomepageOneElementscard className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full" />
            <List
              className="flex md:flex-1 flex-col gap-6 h-[662px] items-start w-[548px] md:w-full"
              orientation="vertical"
            >
              <HomepageOneElementscard1 className="flex flex-col items-center justify-start my-0 w-full" />
              <div className="flex flex-col items-center justify-start my-0 w-full">
                <div className="h-[319px] relative w-full">
                  <Img
                    className="h-[319px] m-auto object-cover w-full"
                    src="images/img_pasteimage_1.png"
                    alt="pasteimage"
                  />
                  <div className="absolute bottom-[13%] flex flex-col gap-3 items-start justify-start left-[6%] w-[420px] sm:w-full">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02 tracking-[-0.60px] w-auto"
                      size="txtPoppinsMedium34Gray90002"
                    >
                      Kitchen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[100px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-1"
                          src="images/img_arrowleft_gray_900_02.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="square"
                      color="gray_900_02"
                      size="xs"
                      variant="outline"
                    >
                      <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                        Shop Now
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-5 w-full">
          <div className="sm:h-[2682px] h-[669px] md:h-[878px] md:pl-10 pl-40 sm:pl-5 pt-12 relative w-[1692px] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col gap-12 h-full inset-y-[0] items-center justify-end left-[0] max-w-[1440px] my-auto md:pl-10 pl-40 sm:pl-5 pt-12 w-full">
              <div className="flex flex-row md:gap-12 items-end justify-between max-w-[1120px] w-full">
                <Text
                  className="leading-[44.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px]"
                  size="txtPoppinsMedium40Black900"
                >
                  <>
                    New <br />
                    Arrivals
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[132px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-1"
                      src="images/img_arrowleft_gray_900_02.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="square"
                  color="gray_900_02"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                    More Products
                  </div>
                </Button>
              </div>
              <div className="h-1 overflow-hidden relative w-[88%]">
                <div className="w-full h-full absolute bg-blue_gray_50 rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_gray_900  rounded-[2px]"
                  style={{ width: "74%" }}
                ></div>
              </div>
            </div>
            <List
              className="absolute bottom-[8%] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start max-w-[1692px] right-[-9%] w-full"
              orientation="horizontal"
            >
              <HomepageOneProductcard
                className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                priceOne="$400.00"
              />
              <HomepageOneProductcard1
                className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                pasteimage="images/img_pasteimage_2.png"
                badgemediumOne="-50%"
                loveseatsofa="Table Lamp"
                price="$24.99"
              />
              <HomepageOneProductcard1
                className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                pasteimage="images/img_pasteimage_3.png"
                badgemediumOne="-50%"
                loveseatsofa="Beige Table Lamp"
                price="$24.99"
              />
              <HomepageOneProductcard1
                className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                pasteimage="images/img_pasteimage_4.png"
                badgemediumOne="-50%"
                loveseatsofa="Bamboo basket"
                price="$24.99"
              />
              <HomepageOneProductcard1
                className="flex flex-1 flex-col gap-3 items-center justify-start w-full"
                pasteimage="images/img_pasteimage_5.png"
                badgemediumOne="-50%"
                loveseatsofa="Toasted"
                price="$224.99"
              />
              <div className="flex flex-col gap-3 items-start justify-start w-[262px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <HomepageOneStackcreateyourmessa
                    className="h-[349px] relative w-full"
                    pasteimageTwo="images/img_pasteimage_5.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <HomepageOneRowFour className="flex flex-row items-center justify-start w-[34%] md:w-full" />
                      <Text
                        className="text-base text-gray-900_02 w-full"
                        size="txtInterSemiBold16Gray90002"
                      >
                        Bamboo basket
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-900_02 text-sm w-auto"
                          size="txtInterSemiBold14Gray90002"
                        >
                          $24.99
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center pr-[252px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-12 w-full">
            <div className="h-[220px] relative w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState2}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState2(e?.item);
                }}
                ref={sliderRef2}
                className="m-auto w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-gray-100_01 flex flex-col gap-4 items-start justify-start mx-2.5 sm:px-5 px-8 py-12">
                      <Img
                        className="h-12 w-12"
                        src="images/img_shippingandde.svg"
                        alt="shippingandde"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900_02 text-xl w-auto"
                          size="txtPoppinsMedium20Gray90002"
                        >
                          Free Shipping
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          Order above $200
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-2 outline-gray-900_02 outline-[1px] outline w-2 relative" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-1 bg-gray-900_02 w-1 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <div className="absolute bg-gray-100_01 flex flex-col gap-4 h-full inset-y-[0] items-start justify-center left-[26%] my-auto sm:px-5 px-8 py-12 w-full">
                <div className="h-12 md:h-8 p-1 relative w-12">
                  <div className="h-8 m-auto outline outline-[1px] outline-gray-900_02 rounded w-[84%]"></div>
                  <PagerIndicator
                    className="absolute flex h-2 inset-[0] justify-center m-auto w-7"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-2 outline-gray-900_02 outline-[1px] outline w-2 relative"
                    activeIndex={sliderState2}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-1 bg-gray-900_02 w-1 relative"
                    sliderRef={sliderRef2}
                    selectedWrapperCss="inline-block mx-[3.00px]"
                    unselectedWrapperCss="inline-block mx-[3.00px]"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[198px]">
                  <Text
                    className="text-gray-900_02 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90002"
                  >
                    Money-back
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    30 days guarantee
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <HomepageOneStackcreateyourmessa
                className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full"
                pasteimageTwo="images/img_pasteimage_532x720.png"
              />
              <div className="bg-gray-100_01 flex flex-1 flex-col gap-6 h-[532px] md:h-auto items-start justify-center max-w-[720px] pl-[72px] pr-40 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-blue-A400 uppercase w-full"
                    size="txtInterBold16BlueA400"
                  >
                    SALE UP TO 35% OFF
                  </Text>
                  <Text
                    className="leading-[44.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 tracking-[-0.40px]"
                    size="txtPoppinsMedium40Gray90002"
                  >
                    <>
                      HUNDREDS of <br />
                      New lower prices!
                    </>
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[452px] md:max-w-full text-gray-900_02 text-xl"
                    size="txtInterRegular20Gray90002"
                  >
                    It’s more affordable than ever to give every room in your
                    home a stylish makeover
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[100px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-1"
                      src="images/img_arrowleft_gray_900_02.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="square"
                  color="gray_900_02"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-medium text-base text-left tracking-[-0.40px]">
                    Shop Now
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-10 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-20 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1121px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
                size="txtPoppinsMedium40Black900"
              >
                Articles
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[122px]"
                rightIcon={
                  <Img
                    className="h-5 mb-px ml-1"
                    src="images/img_arrowleft_gray_900_02.svg"
                    alt="arrow_left"
                  />
                }
                shape="square"
                color="gray_900_02"
                size="xs"
                variant="outline"
              >
                <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                  More Articles
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_img.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                  <Text
                    className="text-gray-900_04 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    7 ways to decor your home
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[103px]"
                    rightIcon={
                      <Img
                        className="h-5 mb-px ml-1"
                        src="images/img_arrowleft_gray_600.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="square"
                    color="gray_900_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_img_325x357.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                  <Text
                    className="text-gray-900_04 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Kitchen organization
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[103px]"
                    rightIcon={
                      <Img
                        className="h-5 mb-px ml-1"
                        src="images/img_arrowleft_gray_600.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="square"
                    color="gray_900_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_img_1.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
                  <Text
                    className="text-gray-900_04 text-xl w-auto"
                    size="txtPoppinsMedium20Gray90004"
                  >
                    Decor your bedroom
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[103px]"
                    rightIcon={
                      <Img
                        className="h-5 mb-px ml-1"
                        src="images/img_arrowleft_gray_600.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="square"
                    color="gray_900_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-inter font-medium text-base text-left tracking-[-0.40px]">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <HomepageOneStackcreateyourmessa className="h-[360px] relative w-full" />
            </div>
          </div>
          <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 md:px-10 px-40 sm:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepageOnePage;

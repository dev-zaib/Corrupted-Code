import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageTwoRowshopNow from "components/HomepageTwoRowshopNow";
import ProductPageOneColumn from "components/ProductPageOneColumn";
import ProductPageOneColumnTwo from "components/ProductPageOneColumnTwo";
import ProductPageOneColumnsku from "components/ProductPageOneColumnsku";
import ProductPageOneElementsslider from "components/ProductPageOneElementsslider";
import ProductPageOneEmojipopup from "components/ProductPageOneEmojipopup";
import ProductPageOneListratingstarnorma from "components/ProductPageOneListratingstarnorma";
import ProductPageOneNewsletter from "components/ProductPageOneNewsletter";
import ProductPageOneRowiconsstarfilled from "components/ProductPageOneRowiconsstarfilled";
import ProductPageOneRowlinkThree from "components/ProductPageOneRowlinkThree";
import ProductPageOneTabsmenu from "components/ProductPageOneTabsmenu";

const ProductPageOnePage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <HomepageTwoRowshopNow
          className="bg-gray-100_01 flex sm:flex-col flex-row md:gap-10 gap-[508px] items-center justify-end p-2 w-full"
          search="images/img_search_gray_900_02_24x24.svg"
        />
        <Header1 className="bg-white-A700 border-b border-gray-100_01 border-solid flex sm:flex-col font-poppins md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 2 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          activeSlideCSS="scale-[0.35]"
          magnifiedIndex={1}
          centerMode
          ref={sliderRef}
          className="font-inter w-full"
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start mx-2.5 pt-4">
                <ProductPageOneRowlinkThree
                  className="flex flex-row gap-4 items-start justify-start pl-40 md:px-5 w-auto sm:w-full"
                  shoptext="Shop"
                  shoparrow="images/img_arrowright.svg"
                  livingroomtext="Living Room"
                  livingroomarrow="images/img_arrowright.svg"
                />
                <div className="flex md:flex-col flex-row md:gap-10 gap-[63px] items-start justify-start md:px-10 px-40 sm:px-5 w-auto md:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <ProductPageOneColumn className="flex flex-col items-center justify-start w-full" />
                    </div>
                    <ProductPageOneElementsslider className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-3 justify-start w-auto sm:w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <ProductPageOneColumnTwo className="flex flex-col gap-4 items-start justify-start py-8 w-auto sm:w-full" />
                    <ProductPageOneColumnsku className="border-blue_gray-50 border-solid border-t flex flex-col gap-2 items-start justify-start py-6 w-[508px] sm:w-full" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
        <div className="bg-white-A700 flex flex-col font-inter gap-12 items-start justify-start md:px-10 px-40 sm:px-5 py-10 w-auto md:w-full">
          <ProductPageOneTabsmenu className="border-b border-blue_gray-50 border-solid flex flex-row md:gap-10 gap-20 items-start justify-start max-w-[1120px] mx-auto w-full" />
          <div className="flex flex-col font-poppins gap-10 items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_04 tracking-[-0.60px] w-full"
                  size="txtPoppinsMedium28Gray90004"
                >
                  Customer Reviews
                </Text>
                <div className="flex flex-col font-inter gap-2 items-start justify-start max-w-[1120px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <ProductPageOneListratingstarnorma className="sm:flex-col flex-row gap-1 grid grid-cols-5 justify-start w-24" />
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      11 Reviews
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      Be the first to review
                    </Text>
                    <Text
                      className="text-base text-gray-900_04 w-auto"
                      size="txtInterSemiBold16Gray90004"
                    >
                      Tray Table
                    </Text>
                  </div>
                </div>
              </div>
              <div className="font-inter h-[102px] relative w-full">
                <ProductPageOneEmojipopup className="flex flex-col items-center justify-center mb-[-22px] ml-auto mr-[126px] w-auto z-[1]" />
                <div className="flex flex-col items-end justify-center max-w-[1120px] mt-auto mx-auto w-full">
                  <div className="bg-white-A700_01 border-2 border-blue_gray-50 border-solid flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[1120px] sm:pl-5 pl-6 pr-4 py-4 rounded-[16px] w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      Share your thoughts
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_white_a700.svg"
                        alt="user"
                      />
                      <Button
                        className="cursor-pointer font-medium min-w-[176px] rounded-[20px] text-base text-center tracking-[-0.40px]"
                        color="gray_900_02"
                        size="md"
                        variant="fill"
                      >
                        Write Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-10 items-start justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1120px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.60px] w-auto"
                  size="txtPoppinsMedium28Black900"
                >
                  11 Reviews
                </Text>
                <Input
                  name="dropdown"
                  placeholder="Newest"
                  className="!placeholder:text-gray-900_02 !text-gray-900_02 font-inter font-semibold p-0 text-base text-left w-full"
                  wrapClassName="flex sm:flex-1 outline-[2px] w-64 sm:w-full"
                  suffix={
                    <Img
                      className="h-8 ml-[35px] my-auto"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  color="blue_gray_50"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[1120px] pb-6 w-full">
                    <Img
                      className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                      src="images/img_avatarplaceholder.png"
                      alt="avatarplacehold"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Sofia
                            </Text>
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Harvetz
                            </Text>
                          </div>
                          <ProductPageOneRowiconsstarfilled className="flex flex-row gap-0.5 items-start justify-start w-auto" />
                        </div>
                        <Text
                          className="leading-[26.00px] max-w-[1008px] md:max-w-full text-base text-gray-800"
                          size="txtInterRegular16Gray800"
                        >
                          <span className="text-gray-800 font-inter text-left font-normal">
                            I bought it 3 weeks ago and now come back just to
                            say “Awesome Product”. I really enjoy it.{" "}
                          </span>
                          <span className="text-gray-800 font-inter text-left font-normal">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupt et quas molestias excepturi
                            sint non provident.
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtInterRegular12WhiteA700"
                        >
                          about 1 hour ago
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Like
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[1120px] pb-6 w-full">
                    <Img
                      className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                      src="images/img_avatarplaceholder_72x72.png"
                      alt="avatarplacehold"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Nicolas
                            </Text>
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Jensen
                            </Text>
                          </div>
                          <ProductPageOneRowiconsstarfilled className="flex flex-row gap-0.5 items-start justify-start w-auto" />
                        </div>
                        <Text
                          className="leading-[26.00px] max-w-[1008px] md:max-w-full text-base text-gray-800"
                          size="txtInterRegular16Gray800"
                        >
                          <span className="text-gray-800 font-inter text-left font-normal">
                            I bought it 3 weeks ago and now come back just to
                            say “Awesome Product”. I really enjoy it.{" "}
                          </span>
                          <span className="text-gray-800 font-inter text-left font-normal">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupt et quas molestias excepturi
                            sint non provident.
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtInterRegular12WhiteA700"
                        >
                          about 1 hour ago
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Like
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[1120px] pb-6 w-full">
                    <Img
                      className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                      src="images/img_avatarplaceholder_1.png"
                      alt="avatarplacehold"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Nicolas
                            </Text>
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Jensen
                            </Text>
                          </div>
                          <ProductPageOneRowiconsstarfilled className="flex flex-row gap-0.5 items-start justify-start w-auto" />
                        </div>
                        <Text
                          className="leading-[26.00px] max-w-[1008px] md:max-w-full text-base text-gray-800"
                          size="txtInterRegular16Gray800"
                        >
                          <span className="text-gray-800 font-inter text-left font-normal">
                            I bought it 3 weeks ago and now come back just to
                            say “Awesome Product”. I really enjoy it.{" "}
                          </span>
                          <span className="text-gray-800 font-inter text-left font-normal">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupt et quas molestias excepturi
                            sint non provident.
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtInterRegular12WhiteA700"
                        >
                          about 1 hour ago
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Like
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[1120px] pb-6 w-full">
                    <Img
                      className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                      src="images/img_avatarplaceholder_2.png"
                      alt="avatarplacehold"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Nicolas
                            </Text>
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Jensen
                            </Text>
                          </div>
                          <ProductPageOneRowiconsstarfilled className="flex flex-row gap-0.5 items-start justify-start w-auto" />
                        </div>
                        <Text
                          className="leading-[26.00px] max-w-[1008px] md:max-w-full text-base text-gray-800"
                          size="txtInterRegular16Gray800"
                        >
                          <span className="text-gray-800 font-inter text-left font-normal">
                            I bought it 3 weeks ago and now come back just to
                            say “Awesome Product”. I really enjoy it.{" "}
                          </span>
                          <span className="text-gray-800 font-inter text-left font-normal">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupt et quas molestias excepturi
                            sint non provident.
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtInterRegular12WhiteA700"
                        >
                          about 1 hour ago
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Like
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-blue_gray-50 border-solid flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[1120px] pb-6 w-full">
                    <Img
                      className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                      src="images/img_avatarplaceholder_3.png"
                      alt="avatarplacehold"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[1008px] w-full">
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Nicolas
                            </Text>
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtInterSemiBold20Gray90002"
                            >
                              Jensen
                            </Text>
                          </div>
                          <ProductPageOneRowiconsstarfilled className="flex flex-row gap-0.5 items-start justify-start w-auto" />
                        </div>
                        <Text
                          className="leading-[26.00px] max-w-[1008px] md:max-w-full text-base text-gray-800"
                          size="txtInterRegular16Gray800"
                        >
                          <span className="text-gray-800 font-inter text-left font-normal">
                            I bought it 3 weeks ago and now come back just to
                            say “Awesome Product”. I really enjoy it.{" "}
                          </span>
                          <span className="text-gray-800 font-inter text-left font-normal">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupt et quas molestias excepturi
                            sint non provident.
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtInterRegular12WhiteA700"
                        >
                          about 1 hour ago
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Like
                        </Text>
                        <Text
                          className="text-gray-900_04 text-xs w-auto"
                          size="txtInterSemiBold12Gray90004"
                        >
                          Reply
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer font-medium min-w-[158px] rounded-[20px] text-base text-center tracking-[-0.40px]"
                  color="gray_900_02"
                  size="md"
                  variant="outline"
                >
                  Load more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ProductPageOneNewsletter className="flex flex-col font-inter items-center justify-start w-full" />
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductPageOnePage;

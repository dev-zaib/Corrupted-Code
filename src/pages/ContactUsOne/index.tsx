import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import HomepageOneStackcreateyourmessa from "components/HomepageOneStackcreateyourmessa";
import HomepageTwoValues from "components/HomepageTwoValues";
import ProductPageOneRowlinkThree from "components/ProductPageOneRowlinkThree";

const ContactUsOnePage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col font-inter gap-12 items-start justify-start max-w-[1440px] pb-20 pt-4 md:px-10 px-40 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1121px] mx-auto w-full">
            <ProductPageOneRowlinkThree
              className="flex flex-row gap-4 items-start justify-start w-auto"
              producttext="Contact Us"
            />
            <div className="flex flex-col gap-6 items-start justify-start max-w-[1121px] w-full">
              <Text
                className="leading-[58.00px] max-w-[834px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-gray-900_02 tracking-[-1.00px]"
                size="txtPoppinsMedium54Gray90002"
              >
                We believe in sustainable decor. We’re passionate about life at
                home.
              </Text>
              <Text
                className="leading-[26.00px] max-w-[834px] md:max-w-full text-base text-gray-900_02"
                size="txtInterRegular16Gray90002"
              >
                Our features timeless furniture, with natural fabrics, curved
                lines, plenty of mirrors and classic design, which can be
                incorporated into any decor project. The pieces enchant for
                their sobriety, to last for generations, faithful to the shapes
                of each period, with a touch of the present
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1119px] mx-auto w-full">
            <HomepageOneStackcreateyourmessa
              className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full"
              pasteimageTwo="images/img_pasteimage_532x720.png"
            />
            <div className="bg-gray-100_01 flex sm:flex-1 flex-col gap-6 h-[413px] md:h-auto items-start justify-center md:pl-10 sm:pl-5 pl-[72px] w-[559px] sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.40px] w-full"
                  size="txtPoppinsMedium40"
                >
                  About Us
                </Text>
                <Text
                  className="leading-[26.00px] text-base text-gray-900_01"
                  size="txtInterRegular16Gray90001"
                >
                  <span className="text-blue_gray-900 font-inter text-left font-normal">
                    3legant{" "}
                  </span>
                  <span className="text-gray-900_02 font-inter text-left font-normal">
                    <>
                      is a gift & decorations store based in HCMC, Vietnam. Est
                      since 2019. <br />
                      Our customer service is always prepared to support you
                      24/7
                    </>
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[100px]"
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
                <div className="font-medium text-base text-left tracking-[-0.40px]">
                  Shop Now
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-poppins gap-10 items-start justify-start max-w-[1121px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.40px] w-full"
              size="txtPoppinsMedium40"
            >
              Contact Us
            </Text>
            <div className="flex flex-col font-inter gap-[38px] items-center justify-start w-full">
              <List
                className="bg-white-A700 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1121px] w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-100_01 flex flex-1 flex-col gap-4 items-center justify-start sm:px-5 px-8 py-4 w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-600 uppercase w-auto"
                      size="txtInterBold16Gray600"
                    >
                      Address
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-center text-gray-900_02"
                      size="txtInterSemiBold16Gray90002"
                    >
                      <>
                        234 Hai Trieu, Ho Chi Minh City, <br />
                        Viet Nam
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-100_01 flex flex-1 flex-col gap-4 items-center justify-start sm:px-5 px-8 py-4 w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-[293px]">
                    <Text
                      className="text-base text-center text-gray-600 uppercase w-auto"
                      size="txtInterBold16Gray600"
                    >
                      Contact Us
                    </Text>
                    <Text
                      className="text-base text-center text-gray-900_02 w-auto"
                      size="txtInterSemiBold16Gray90002"
                    >
                      +84 234 567 890
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-100_01 flex flex-1 flex-col gap-4 items-center justify-start sm:px-5 px-8 py-4 w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_user_gray_900_02.svg"
                    alt="user"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-600 uppercase w-auto"
                      size="txtInterBold16Gray600"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-base text-center text-gray-900_02 w-auto"
                      size="txtInterSemiBold16Gray90002"
                    >
                      hello@3legant.com
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1120px] w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-[544px] sm:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="input"
                      placeholder="Your Name"
                      className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-[544px] sm:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      Email address
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="Your Email"
                      className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-gray-400 border-solid rounded-md w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-[544px] sm:w-full">
                    <Text
                      className="text-gray-600 text-xs uppercase w-auto"
                      size="txtInterBold12Gray600"
                    >
                      message
                    </Text>
                    <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-[140px] md:h-auto items-start justify-start p-4 rounded-md w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtInterRegular16Gray600"
                      >
                        Your message
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[189px] text-base text-center tracking-[-0.40px]"
                    shape="round"
                    color="gray_900_02"
                    size="md"
                    variant="fill"
                  >
                    Send Message
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                  <HomepageOneStackcreateyourmessa
                    className="h-[404px] relative w-full"
                    pasteimageTwo="images/img_pasteimage_404x548.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomepageTwoValues className="bg-gray-100_01 flex flex-col font-poppins gap-6 items-start justify-start max-w-[1440px] md:px-10 px-40 sm:px-5 py-4 w-full" />
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsOnePage;

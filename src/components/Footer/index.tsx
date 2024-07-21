import React from "react";

import { Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-12 items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1120px] w-full">
              <div className="flex sm:flex-1 flex-row gap-8 items-center justify-start w-[544px] sm:w-full">
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
                <Line className="bg-gray-600 h-6 w-px" />
                <Text
                  className="text-blue_gray-50 text-sm w-auto"
                  size="txtInterRegular14Bluegray50"
                >
                  Headphone Store
                </Text>
              </div>
              <ul className="flex md:flex-1 sm:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-sm text-white-A700_01"
                    size="txtInterRegular14WhiteA70001"
                  >
                    Home
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_01"
                    size="txtInterRegular14WhiteA70001"
                  >
                    Shop
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_01"
                    size="txtInterRegular14WhiteA70001"
                  >
                    Product
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_01"
                    size="txtInterRegular14WhiteA70001"
                  >
                    Blog
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_01"
                    size="txtInterRegular14WhiteA70001"
                  >
                    Contact Us
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-gray-600 border-solid border-t flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1118px] py-4 w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-7 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-blue_gray-50 text-xs w-auto"
                size="txtPoppinsRegular12"
              >
                Copyright © 2023 3legant. All rights reserved
              </Text>
              <Text
                className="text-white-A700_01 text-xs w-auto"
                size="txtPoppinsSemiBold12"
              >
                Privacy Policy
              </Text>
              <Text
                className="text-white-A700_01 text-xs w-auto"
                size="txtPoppinsSemiBold12"
              >
                Terms of Use
              </Text>
            </div>
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
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

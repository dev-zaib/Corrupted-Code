import React from "react";

import { Img, List, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-start justify-start">
          <Text
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtPoppinsMedium24"
          >
            <span className="text-black-900 font-poppins font-medium">
              3legant
            </span>
            <span className="text-gray-600 font-poppins font-medium">
              <>.</>
            </span>
          </Text>
        </div>
        <div className="flex flex-row gap-10 items-center justify-center w-auto">
          <List
            className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[35%]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="border border-gray-900_02 border-solid flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtSpaceGroteskMedium14"
                  >
                    Home
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="border border-gray-600 border-solid flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtSpaceGroteskMedium14Gray600"
                  >
                    Shop
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="border border-gray-600 border-solid flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtSpaceGroteskMedium14Gray600"
                >
                  Product
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="border border-gray-600 border-solid flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtSpaceGroteskMedium14Gray600"
                >
                  Contact Us
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-end w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_search.svg"
            alt="search_One"
          />
          <Img
            className="h-6 w-6"
            src="images/img_search_gray_900_02.svg"
            alt="search_Two"
          />
          <div className="flex flex-row items-center justify-start w-[39%]">
            <Img
              className="h-6 w-6"
              src="images/img_refresh.svg"
              alt="refresh"
            />
            <Text
              className="bg-gray-900_02 flex h-5 items-center justify-center ml-[5px] my-[3px] rounded-[50%] text-center text-white-A700 text-xs w-5"
              size="txtInterBold12WhiteA700"
            >
              2
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;

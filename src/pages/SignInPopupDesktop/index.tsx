import React from "react";

import { CheckBox, Img, Input, Text } from "components";

const SignInPopupDesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[88px] items-start mx-auto md:pr-10 pr-40 sm:pr-5 w-full">
        <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
          <div className="h-[1080px] relative w-full">
            <Img
              className="h-[1080px] m-auto object-cover w-full"
              src="images/img_pasteimage.png"
              alt="pasteimage"
            />
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[3%]">
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
          </div>
        </div>
        <div className="font-inter md:h-[249px] h-[379px] md:mt-0 mt-[216px] relative w-[456px] sm:w-full">
          <div className="absolute bg-white-A700_01 flex flex-col gap-8 h-max inset-[0] items-end justify-end m-auto w-[456px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-col h-10 md:h-auto items-start justify-start pb-2 w-[456px] sm:w-full">
                  <div className="border-b border-blue_gray-50 border-solid flex flex-col items-center justify-start pb-2 w-full">
                    <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-full">
                      <Text
                        className="mb-[5px] text-base text-gray-600"
                        size="txtInterRegular16Gray600"
                      >
                        Your usernam or email address
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  name="forminput"
                  placeholder="Password"
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="flex md:h-auto w-[456px] sm:w-full"
                  type="password"
                  suffix={
                    <Img
                      className="mt-px mb-auto h-6 ml-[35px]"
                      src="images/img_hugeicon_interface_outline_eye.svg"
                      alt="Huge-icon/interface/outline/eye"
                    />
                  }
                  shape="square"
                  color="blue_gray_50"
                  size="xs"
                  variant="outline"
                ></Input>
                <div className="flex flex-row items-start justify-between w-full">
                  <CheckBox
                    className="text-base text-left"
                    inputClassName="border border-gray-600 border-solid h-6 mr-[5px] w-6"
                    name="rememberme"
                    id="rememberme"
                    label="Remember me"
                    size="xs"
                  ></CheckBox>
                  <a
                    href="javascript:"
                    className="mt-[3px] text-base text-gray-900_02"
                  >
                    <Text size="txtInterSemiBold16Gray90002">
                      Forgot password?
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_02 flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 rounded-lg w-[456px] sm:w-full">
              <a
                href="javascript:"
                className="text-base text-center text-white-A700 tracking-[-0.40px] w-auto"
              >
                <Text size="txtInterMedium16WhiteA700">Sign In</Text>
              </a>
            </div>
          </div>
          <div className="absolute flex flex-col gap-6 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col font-poppins items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 tracking-[-0.40px] w-auto"
                  size="txtPoppinsMedium40Gray90002"
                >
                  Sign In
                </Text>
              </div>
            </div>
            <Text
              className="text-base text-gray-900_02 w-full"
              size="txtInterRegular16Gray90002"
            >
              <span className="text-gray-600 font-inter text-left font-normal">
                Don’t have an accout yet?
              </span>
              <span className="text-gray-900_02 font-inter text-left font-normal">
                {" "}
              </span>
              <span className="text-teal-400 font-inter text-left font-semibold">
                Sign Up
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPopupDesktopPage;

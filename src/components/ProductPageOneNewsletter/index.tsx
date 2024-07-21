import React from "react";

import { Img, Text } from "components";

type ProductPageOneNewsletterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "newsletterheader" | "newslettertext" | "emailtext" | "signupbutton"
> &
  Partial<{
    newsletterheader: string;
    newslettertext: string;
    emailtext: string;
    signupbutton: string;
  }>;

const ProductPageOneNewsletter: React.FC<ProductPageOneNewsletterProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[360px] relative w-full">
            <Img
              className="absolute h-[360px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_pasteimage_360x1440.png"
              alt="pasteimage"
            />
            <div className="absolute flex flex-col gap-8 h-max inset-[0] items-center justify-center m-auto w-auto">
              <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_02 tracking-[-0.40px] w-auto"
                  size="txtPoppinsMedium40Gray90002"
                >
                  {props?.newsletterheader}
                </Text>
                <Text
                  className="text-center text-gray-900_02 text-lg w-auto"
                  size="txtInterRegular18Gray90002"
                >
                  {props?.newslettertext}
                </Text>
              </div>
              <div className="flex flex-col h-[52px] md:h-auto items-start justify-center w-[488px] sm:w-full">
                <div className="border-b border-gray-600_7f border-solid flex sm:flex-col flex-row gap-2 h-[52px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <Text
                      className="flex-1 text-base text-gray-600 tracking-[-0.40px] w-auto"
                      size="txtInterMedium16Gray600"
                    >
                      {props?.emailtext}
                    </Text>
                  </div>
                  <div className="border border-gray-900_02 border-solid flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                        size="txtInterMedium16Gray600"
                      >
                        {props?.signupbutton}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductPageOneNewsletter.defaultProps = {
  newsletterheader: "Join Our Newsletter",
  newslettertext: "Sign up for deals, new products and promotions",
  emailtext: "Email address",
  signupbutton: "Signup",
};

export default ProductPageOneNewsletter;

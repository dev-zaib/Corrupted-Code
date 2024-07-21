import React from "react";

import { Button, Img, List, Text } from "components";

type ProductPageTwoStacknewarrivalsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "newarrivals"
  | "moreProducts"
  | "badgemedium"
  | "badgemediumOne"
  | "loveseatsofa"
  | "price"
  | "priceOne"
  | "loveseatsofa1"
  | "price1"
  | "loveseatsofa2"
  | "price2"
  | "loveseatsofa3"
  | "price3"
  | "loveseatsofa4"
  | "price4"
  | "new"
  | "bamboobasket"
  | "price5"
> &
  Partial<{
    newarrivals: string;
    moreProducts: string;
    badgemedium: string;
    badgemediumOne: string;
    loveseatsofa: string;
    price: string;
    priceOne: string;
    loveseatsofa1: string;
    price1: string;
    loveseatsofa2: string;
    price2: string;
    loveseatsofa3: string;
    price3: string;
    loveseatsofa4: string;
    price4: string;
    new: string;
    bamboobasket: string;
    price5: string;
  }>;

const ProductPageTwoStacknewarrivals: React.FC<
  ProductPageTwoStacknewarrivalsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col gap-12 h-full inset-y-[0] items-center justify-start left-[0] max-w-[1440px] my-auto pb-20 md:pl-10 pl-40 sm:pl-5 pt-10 w-full">
          <div className="flex sm:flex-col flex-row md:gap-12 items-end justify-between max-w-[1120px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.60px] w-auto"
              size="txtPoppinsMedium28Black900"
            >
              {props?.newarrivals}
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
                {props?.moreProducts}
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
          className="absolute sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 inset-y-[0] justify-start max-w-[1692px] my-auto right-[-9%] w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[349px] relative w-full">
                <Img
                  className="absolute h-[349px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_pasteimage_349x262.png"
                  alt="pasteimage"
                />
                <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[5%] w-[88%]">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="bg-white-A700 justify-center px-3.5 rounded text-base text-center text-gray-900_02 uppercase w-auto"
                      size="txtInterBold16Gray90002"
                    >
                      {props?.badgemedium}
                    </Text>
                    <Text
                      className="bg-teal-400 justify-center px-3.5 rounded text-base text-center text-white-A700_01 uppercase w-auto"
                      size="txtInterBold16WhiteA70001"
                    >
                      {props?.badgemediumOne}
                    </Text>
                  </div>
                  <Button
                    className="flex h-8 items-center justify-center mb-6 rounded-[50%] w-8"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[72px] md:h-auto items-start justify-start w-[262px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                    <div className="flex flex-col h-4 items-center justify-start w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_198.svg"
                        alt="ratingstarfill"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_199.svg"
                        alt="ratingstarfill_One"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_200.svg"
                        alt="ratingstarfill_Two"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_201.svg"
                        alt="ratingstarfill_Three"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_202.svg"
                        alt="ratingstarfill_Four"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-base text-gray-900_02 w-full"
                    size="txtInterSemiBold16Gray90002"
                  >
                    {props?.loveseatsofa}
                  </Text>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterSemiBold14Gray90002"
                    >
                      {props?.price}
                    </Text>
                    <Text
                      className="line-through text-gray-600 text-sm w-auto"
                      size="txtInterRegular14Gray600"
                    >
                      {props?.priceOne}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[349px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_2.png"
                  alt="pasteimage"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[262px]">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_203.svg"
                      alt="ratingstarfill"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_204.svg"
                      alt="ratingstarfill_One"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_205.svg"
                      alt="ratingstarfill_Two"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_206.svg"
                      alt="ratingstarfill_Three"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_207.svg"
                      alt="ratingstarfill_Four"
                    />
                  </div>
                </div>
                <Text
                  className="text-base text-gray-900_02 w-full"
                  size="txtInterSemiBold16Gray90002"
                >
                  {props?.loveseatsofa1}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14Gray90002"
                  >
                    {props?.price1}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[349px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_3.png"
                  alt="pasteimage"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[262px]">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_208.svg"
                      alt="ratingstarfill"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_209.svg"
                      alt="ratingstarfill_One"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_210.svg"
                      alt="ratingstarfill_Two"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_211.svg"
                      alt="ratingstarfill_Three"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_212.svg"
                      alt="ratingstarfill_Four"
                    />
                  </div>
                </div>
                <Text
                  className="text-base text-gray-900_02 w-full"
                  size="txtInterSemiBold16Gray90002"
                >
                  {props?.loveseatsofa2}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14Gray90002"
                  >
                    {props?.price2}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[349px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_4.png"
                  alt="pasteimage"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[262px]">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_213.svg"
                      alt="ratingstarfill"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_214.svg"
                      alt="ratingstarfill_One"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_215.svg"
                      alt="ratingstarfill_Two"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_216.svg"
                      alt="ratingstarfill_Three"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_217.svg"
                      alt="ratingstarfill_Four"
                    />
                  </div>
                </div>
                <Text
                  className="text-base text-gray-900_02 w-full"
                  size="txtInterSemiBold16Gray90002"
                >
                  {props?.loveseatsofa3}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14Gray90002"
                  >
                    {props?.price3}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[349px] md:h-auto object-cover w-full"
                  src="images/img_pasteimage_5.png"
                  alt="pasteimage"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[262px]">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_218.svg"
                      alt="ratingstarfill"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_219.svg"
                      alt="ratingstarfill_One"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_220.svg"
                      alt="ratingstarfill_Two"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_221.svg"
                      alt="ratingstarfill_Three"
                    />
                  </div>
                  <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                    <Img
                      className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                      src="images/img_ratingstarfill_222.svg"
                      alt="ratingstarfill_Four"
                    />
                  </div>
                </div>
                <Text
                  className="text-base text-gray-900_02 w-full"
                  size="txtInterSemiBold16Gray90002"
                >
                  {props?.loveseatsofa4}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14Gray90002"
                  >
                    {props?.price4}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-[262px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[349px] relative w-full">
                <Img
                  className="absolute h-[349px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_pasteimage_5.png"
                  alt="pasteimage"
                />
                <div className="absolute flex flex-col items-center justify-start left-[6%] top-[5%] w-auto">
                  <Button
                    className="!text-gray-900_02 cursor-pointer font-bold font-inter min-w-[67px] rounded text-base text-center uppercase"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    {props?.new}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-start w-[34%] md:w-full">
                    <div className="flex flex-col h-4 items-center justify-start w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_223.svg"
                        alt="ratingstarfill"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_224.svg"
                        alt="ratingstarfill_One"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_225.svg"
                        alt="ratingstarfill_Two"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_226.svg"
                        alt="ratingstarfill_Three"
                      />
                    </div>
                    <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
                      <Img
                        className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                        src="images/img_ratingstarfill_227.svg"
                        alt="ratingstarfill_Four"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-base text-gray-900_02 w-full"
                    size="txtInterSemiBold16Gray90002"
                  >
                    {props?.bamboobasket}
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterSemiBold14Gray90002"
                    >
                      {props?.price5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

ProductPageTwoStacknewarrivals.defaultProps = {
  newarrivals: "You might also like",
  moreProducts: "More Products",
  badgemedium: "NEW",
  badgemediumOne: "-50%",
  loveseatsofa: "Loveseat Sofa",
  price: "$199.00",
  priceOne: "$400.00",
  loveseatsofa1: "Table Lamp",
  price1: "$24.99",
  loveseatsofa2: "Beige Table Lamp",
  price2: "$24.99",
  loveseatsofa3: "Bamboo basket",
  price3: "$24.99",
  loveseatsofa4: "Toasted",
  price4: "$224.99",
  new: "NEW",
  bamboobasket: "Bamboo basket",
  price5: "$24.99",
};

export default ProductPageTwoStacknewarrivals;

import React from "react";

import { Button, Img, Text } from "components";

type HomepageTwoElementscardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "newbadge" | "favoritebutton" | "addtocartbutton"
> &
  Partial<{
    userimage: string;
    newbadge: string;
    favoritebutton: string;
    addtocartbutton: string;
  }>;

const HomepageTwoElementscard: React.FC<HomepageTwoElementscardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[349px] relative w-full">
          <Img
            className="absolute h-[349px] inset-[0] justify-center m-auto object-cover w-full"
            alt="pasteimage"
            src={props?.userimage}
          />
          <div className="absolute flex flex-col md:gap-10 gap-[239px] h-max inset-[0] items-center justify-center m-auto w-[88%]">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="bg-white-A700 justify-center px-3.5 rounded text-base text-center text-gray-900_01 uppercase w-auto"
                  size="txtInterBold16Gray90001"
                >
                  {props?.newbadge}
                </Text>
              </div>
              {!!props?.favoritebutton ? (
                <Button
                  className="flex h-8 items-center justify-center rounded-[50%] w-8"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img alt="favorite" src={props?.favoritebutton} />
                </Button>
              ) : null}
            </div>
            {!!props?.addtocartbutton ? (
              <Button
                className="!text-white-A700_01 cursor-pointer font-inter font-medium h-[46px] shadow-bs text-base text-center tracking-[-0.40px] w-[230px]"
                shape="round"
                color="gray_900_02"
                size="lg"
                variant="fill"
              >
                {props?.addtocartbutton}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HomepageTwoElementscard.defaultProps = {
  userimage: "images/img_pasteimage_6.png",
  newbadge: "NEW",
};

export default HomepageTwoElementscard;

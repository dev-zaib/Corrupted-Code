import React from "react";

import { Button, Img, Text } from "components";

type HomepageTwoStacklistentotheamazOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "pasteimage" | "musictext" | "experiencemusicOne" | "shoppingbuttontext"
> &
  Partial<{
    pasteimage: string;
    musictext: string;
    experiencemusicOne: string;
    shoppingbuttontext: string;
  }>;

const HomepageTwoStacklistentotheamazOne: React.FC<
  HomepageTwoStacklistentotheamazOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[820px] inset-[0] justify-center m-auto object-cover w-full"
          alt="pasteimage"
          src={props?.pasteimage}
        />
        <div className="absolute flex flex-col gap-7 h-max inset-y-[0] items-start justify-center my-auto right-[12%] w-[538px] sm:w-full">
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div className="flex flex-col items-start justify-center w-full">
              {!!props?.musictext ? props?.musictext : null}
            </div>
            {!!props?.experiencemusicOne ? (
              <Text
                className="text-gray-900_01 text-xl w-auto"
                size="txtInterRegular20Gray90001"
              >
                {props?.experiencemusicOne}
              </Text>
            ) : null}
          </div>
          {!!props?.shoppingbuttontext ? (
            <Button
              className="cursor-pointer font-inter font-medium min-w-[234px] text-center text-lg tracking-[-0.40px]"
              shape="round"
              color="gray_900_02"
              size="xl"
              variant="fill"
            >
              {props?.shoppingbuttontext}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

HomepageTwoStacklistentotheamazOne.defaultProps = {
  pasteimage: "images/img_pasteimage_820x1440.png",
};

export default HomepageTwoStacklistentotheamazOne;

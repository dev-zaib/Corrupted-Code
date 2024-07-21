import React from "react";

import { Button, Img, List, Text } from "components";

type HomepageThreeBlogsectionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "latestarticles"
  | "viewmorebutton"
  | "articleimage1"
  | "articletitle1"
  | "readmorebutton1"
  | "articleimage2"
  | "articletitle2"
  | "readmorebutton2"
  | "articleimage3"
  | "articletitle3"
  | "readmorebutton3"
> &
  Partial<{
    latestarticles: string;
    viewmorebutton: string;
    articleimage1: string;
    articletitle1: string;
    readmorebutton1: string;
    articleimage2: string;
    articletitle2: string;
    readmorebutton2: string;
    articleimage3: string;
    articletitle3: string;
    readmorebutton3: string;
  }>;

const HomepageThreeBlogsection: React.FC<HomepageThreeBlogsectionProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1121px] w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px] w-auto"
            size="txtPoppinsMedium40Black900"
          >
            {props?.latestarticles}
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[103px]"
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
              {props?.viewmorebutton}
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
                alt="img"
                src={props?.articleimage1}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
              <Text
                className="text-gray-900_04 text-xl w-auto"
                size="txtPoppinsMedium20Gray90004"
              >
                {props?.articletitle1}
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
                  {props?.readmorebutton1}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[325px] md:h-auto object-cover w-full"
                alt="img"
                src={props?.articleimage2}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
              <Text
                className="text-gray-900_04 text-xl w-auto"
                size="txtPoppinsMedium20Gray90004"
              >
                {props?.articletitle2}
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
                  {props?.readmorebutton2}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[325px] md:h-auto object-cover w-full"
                alt="img"
                src={props?.articleimage3}
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-[352px]">
              <Text
                className="text-gray-900_04 text-xl w-auto"
                size="txtPoppinsMedium20Gray90004"
              >
                {props?.articletitle3}
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
                  {props?.readmorebutton3}
                </div>
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomepageThreeBlogsection.defaultProps = {
  latestarticles: "Latest Articles",
  viewmorebutton: "View More",
  articleimage1: "images/img_img_7.png",
  articletitle1: "Air Jordan x Travis Scott Event",
  readmorebutton1: "Read More",
  articleimage2: "images/img_img_8.png",
  articletitle2: "The timeless classics on the green",
  readmorebutton2: "Read More",
  articleimage3: "images/img_img_9.png",
  articletitle3: "The 2023 Ryder Cup",
  readmorebutton3: "Read More",
};

export default HomepageThreeBlogsection;

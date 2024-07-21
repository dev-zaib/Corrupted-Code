import React from "react";

import { Button, Img } from "components";

type MyAccountStackplayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const MyAccountStackplay: React.FC<MyAccountStackplayProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20">
          <Img
            className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
            src="images/img_play.svg"
            alt="play"
          />
          <Img
            className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
            src="images/img_image.png"
            alt="image"
          />
        </div>
        <Button
          className="absolute border border-solid border-white-A700 bottom-[0] flex h-[30px] items-center justify-center right-[2%] rounded-[50%] w-[30px]"
          shape="circle"
          color="gray_900_02"
          size="md"
          variant="fill"
        >
          <Img
            className="h-4"
            src="images/img_outlinecamera_white_a700_01.svg"
            alt="outlinecamera"
          />
        </Button>
      </div>
    </>
  );
};

MyAccountStackplay.defaultProps = {};

export default MyAccountStackplay;

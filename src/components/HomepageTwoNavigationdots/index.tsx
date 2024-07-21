import React from "react";

import { Img } from "components";

type HomepageTwoNavigationdotsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const HomepageTwoNavigationdots: React.FC<HomepageTwoNavigationdotsProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-4 items-center justify-start outline outline-[0.5px] outline-gray-900_02 p-1 rounded-[50%] w-4">
          <div className="bg-gray-900_02 h-2 rounded-[50%] w-2"></div>
        </div>
        <Img
          className="h-4 rounded-[50%] w-4"
          src="images/img_mobile.svg"
          alt="mobile"
        />
        <Img
          className="h-4 rounded-[50%] w-4"
          src="images/img_mobile.svg"
          alt="mobile_One"
        />
      </div>
    </>
  );
};

HomepageTwoNavigationdots.defaultProps = {};

export default HomepageTwoNavigationdots;

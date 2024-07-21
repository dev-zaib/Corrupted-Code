import React from "react";

import { Img } from "components";

type HomepageOneRowFourProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const HomepageOneRowFour: React.FC<HomepageOneRowFourProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-4 items-center justify-start w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_24.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_25.svg"
            alt="ratingstarfill_One"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_26.svg"
            alt="ratingstarfill_Two"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_27.svg"
            alt="ratingstarfill_Three"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start ml-0.5 w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_28.svg"
            alt="ratingstarfill_Four"
          />
        </div>
      </div>
    </>
  );
};

HomepageOneRowFour.defaultProps = {};

export default HomepageOneRowFour;

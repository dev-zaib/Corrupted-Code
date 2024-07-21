import React from "react";

import { Img, List } from "components";

type ProductPageOneListratingstarnormaProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ProductPageOneListratingstarnorma: React.FC<
  ProductPageOneListratingstarnormaProps
> = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_189.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_190.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_191.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_192.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="border border-gray-600 border-solid h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarnormal.svg"
            alt="ratingstarnorma"
          />
        </div>
      </List>
    </>
  );
};

ProductPageOneListratingstarnorma.defaultProps = {};

export default ProductPageOneListratingstarnorma;

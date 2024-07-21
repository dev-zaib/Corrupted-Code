import React from "react";

import { Img } from "components";

type ProductPageOneRowiconsstarfilledProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ProductPageOneRowiconsstarfilled: React.FC<
  ProductPageOneRowiconsstarfilledProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-4 w-4"
          src="images/img_iconsstarfilled.svg"
          alt="iconsstarfilled"
        />
        <Img
          className="h-4 w-4"
          src="images/img_iconsstarfilled.svg"
          alt="iconsstarfilled_One"
        />
        <Img
          className="h-4 w-4"
          src="images/img_iconsstarfilled.svg"
          alt="iconsstarfilled_Two"
        />
        <Img
          className="h-4 w-4"
          src="images/img_iconsstarfilled.svg"
          alt="iconsstarfilled_Three"
        />
        <Img
          className="h-4 w-4"
          src="images/img_iconsstarfilled.svg"
          alt="iconsstarfilled_Four"
        />
      </div>
    </>
  );
};

ProductPageOneRowiconsstarfilled.defaultProps = {};

export default ProductPageOneRowiconsstarfilled;

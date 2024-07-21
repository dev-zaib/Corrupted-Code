import React from "react";

import { Img } from "components";

type ProductPageOneEmojipopupProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ProductPageOneEmojipopup: React.FC<ProductPageOneEmojipopupProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-50 flex flex-row gap-3 items-center justify-center px-4 py-2.5 rounded-[22px] shadow-bs1 w-auto md:w-full">
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img_.png"
            alt="One"
          />
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img__24x16.png"
            alt="Two"
          />
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img__1.png"
            alt="Three"
          />
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img__2.png"
            alt="Four"
          />
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img__3.png"
            alt="Five"
          />
          <Img
            className="h-6 md:h-auto object-cover w-4"
            src="images/img__4.png"
            alt="Six"
          />
        </div>
        <Img className="h-2 w-4" src="images/img_bookmark.svg" alt="bookmark" />
      </div>
    </>
  );
};

ProductPageOneEmojipopup.defaultProps = {};

export default ProductPageOneEmojipopup;

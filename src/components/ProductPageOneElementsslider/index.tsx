import React from "react";

import { Img, List } from "components";

type ProductPageOneElementssliderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ProductPageOneElementsslider: React.FC<
  ProductPageOneElementssliderProps
> = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col h-[167px] items-center justify-start w-full">
          <Img
            className="h-[167px] md:h-auto object-cover w-[167px]"
            src="images/img_pasteimage_66.png"
            alt="pasteimage"
          />
        </div>
        <div className="flex flex-col h-[167px] items-center justify-start w-full">
          <Img
            className="h-[167px] md:h-auto object-cover w-[167px]"
            src="images/img_pasteimage_67.png"
            alt="pasteimage"
          />
        </div>
        <div className="flex flex-col h-[167px] items-center justify-start w-full">
          <Img
            className="h-[167px] md:h-auto object-cover w-[167px]"
            src="images/img_pasteimage_68.png"
            alt="pasteimage"
          />
        </div>
      </List>
    </>
  );
};

ProductPageOneElementsslider.defaultProps = {};

export default ProductPageOneElementsslider;

import React from "react";

import { Button, Img } from "components";

type ProductPageOneColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "newbutton" | "countbutton"
> &
  Partial<{ newbutton: string; countbutton: string }>;

const ProductPageOneColumn: React.FC<ProductPageOneColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[729px] relative w-full">
          <Img
            className="absolute h-[729px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_pasteimage_729x548.png"
            alt="pasteimage"
          />
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[4%] w-[89%]">
            <Button
              className="!text-gray-900_01 cursor-pointer font-bold font-inter h-[34px] rounded text-center text-lg w-[79px]"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.newbutton}
            </Button>
            <Button
              className="!text-white-A700_01 cursor-pointer font-bold font-inter h-[34px] mt-[9px] rounded text-center text-lg w-[84px]"
              color="teal_400"
              size="md"
              variant="fill"
            >
              {props?.countbutton}
            </Button>
            <div className="flex flex-row items-center justify-between mt-[235px] w-full">
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft_gray_600.svg"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center rotate-[180deg] w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft_gray_900_02_40x40.svg"
                  alt="arrowleft_One"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductPageOneColumn.defaultProps = { newbutton: "NEW", countbutton: "-50%" };

export default ProductPageOneColumn;

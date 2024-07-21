import React from "react";

import { Img, Text } from "components";

type CartContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "getstartedtext"
> &
  Partial<{ getstartedtext: string }>;

const CartContent: React.FC<CartContentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-4 w-4"
          src="images/img_arrowleft_gray_900_01_16x16.svg"
          alt="arrowleft"
        />
        <Text
          className="text-center text-gray-900_01 text-xs"
          size="txtInterSemiBold12Gray90001"
        >
          {props?.getstartedtext}
        </Text>
        <Img className="h-4 w-4" src="images/img_plus.svg" alt="plus" />
      </div>
    </>
  );
};

CartContent.defaultProps = { getstartedtext: "2" };

export default CartContent;

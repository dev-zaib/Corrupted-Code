import React from "react";

import { Text } from "components";

const WelcomeThreePage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-poppins h-[960px] items-start justify-end mx-auto p-[119px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_welcomethree.png')" }}
      >
        <Text
          className="border-b-8 border-solid border-teal-400 md:ml-[0] ml-[137px] mt-[628px] py-[5px] sm:text-[40px] md:text-[46px] text-[54px] text-white-A700 w-auto"
          size="txtPoppinsSemiBold54"
        >
          FREEBIE
        </Text>
      </div>
    </>
  );
};

export default WelcomeThreePage;

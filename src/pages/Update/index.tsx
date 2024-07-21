import React from "react";

import { Text } from "components";

const UpdatePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto p-[396px] md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[22px] md:text-5xl text-8xl text-black-900 tracking-[-1.92px]"
          size="txtPoppinsMedium96Black900"
        >
          Update...
        </Text>
      </div>
    </>
  );
};

export default UpdatePage;

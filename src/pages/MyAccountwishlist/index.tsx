import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import MyAccountStackplay from "components/MyAccountStackplay";

type Table2RowType = {
  productOne: string;
  price: string;
  action: string;
};

const MyAccountwishlistPage: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    { productOne: "Color: Black", price: "$19.19", action: "Add to cart" },
    { productOne: "Color: Beige", price: "$345", action: "Add to cart" },
    { productOne: "Color: Beige", price: "$8.80", action: "Add to cart" },
    { productOne: "Color: Beige", price: "$8.80", action: "Add to cart" },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("productOne", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start sm:pr-5 pr-6 py-6">
            <Img
              className="h-6 w-6"
              src="images/img_iconscloseline_gray_600.svg"
              alt="iconscloseline"
            />
            <Img
              className="h-[72px] md:h-auto ml-2.5 object-cover w-[21%]"
              src="images/img_pasteimage_96x80.png"
              alt="pasteimage"
            />
            <div className="flex flex-col gap-[11px] items-start justify-end ml-4 pr-[13px] py-[13px]">
              <Text
                className="text-gray-900_02 text-sm"
                size="txtInterSemiBold14Gray90002"
              >
                Tray Table
              </Text>
              <Text
                className="text-gray-600 text-xs"
                size="txtInterRegular12Gray600"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[320px] pb-2.5 sm:pl-5 pl-8 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Product
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="py-[35px] text-gray-900_02 text-sm"
            size="txtInterRegular14Gray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[250px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Price
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start">
            <Button
              className="cursor-pointer font-medium min-w-[130px] my-[39px] text-base text-center tracking-[-0.40px]"
              shape="round"
              color="gray_900_02"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[137px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-20 md:px-10 px-40 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start py-20 w-auto">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              My Account
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[7px] items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="bg-gray-100_01 flex flex-col gap-10 items-center justify-start px-4 py-10 rounded-lg w-auto">
              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                <MyAccountStackplay className="md:h-20 h-[82px] pr-0.5 relative w-[82px]" />
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterSemiBold20Black900"
                >
                  Sofia Havertz
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="border-b border-gray-900_02 border-solid h-[42px] sm:pr-5 pr-[35px] py-2.5 text-base text-gray-900_02 w-auto"
                  size="txtInterSemiBold16Gray90002"
                >
                  Account
                </Text>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Address
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Orders
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <Text
                    className="text-base text-gray-600 w-full"
                    size="txtInterSemiBold16Gray600"
                  >
                    Wishlist
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start py-2 w-[230px]">
                  <a
                    href="javascript:"
                    className="text-base text-gray-600 w-full"
                  >
                    <Text size="txtInterSemiBold16Gray600">Log Out</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[72px] w-auto md:w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterSemiBold20Black900"
              >
                Your Wishlist
              </Text>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table2Columns}
                  data={table2Data.current}
                  rowClass={"border border-blue_gray-50"}
                  headerClass="border border-blue_gray-50"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default MyAccountwishlistPage;

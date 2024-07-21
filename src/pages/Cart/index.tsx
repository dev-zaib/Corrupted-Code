import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import CartColumncartsummary from "components/CartColumncartsummary";
import CartContent from "components/CartContent";
import CartProcess from "components/CartProcess";
import Footer from "components/Footer";
import Header1 from "components/Header1";

type TableRowType = {
  productOne: string;
  quantity: string;
  price: string;
  subtotal: string;
};

const CartPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      productOne: "Remove",
      quantity: "images/img_plus.svg",
      price: "$19.00",
      subtotal: "$38.00",
    },
    {
      productOne: "Remove",
      quantity: "images/img_plus.svg",
      price: "$19.00",
      subtotal: "$38.00",
    },
    {
      productOne: "Remove",
      quantity: "images/img_plus.svg",
      price: "$39.00",
      subtotal: "$39.00",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("productOne", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-6 py-6">
            <div className="flex flex-row gap-4 items-center justify-start w-[62%] md:w-full">
              <Img
                className="h-24 md:h-auto object-cover w-[45%]"
                src="images/img_pasteimage_96x80.png"
                alt="pasteimage"
              />
              <div className="flex flex-col gap-[11px] items-start justify-start w-[47%]">
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
                  Color: Black
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[83px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-1"
                      src="images/img_iconscloseline_gray_600.svg"
                      alt="icons/Close/Line"
                    />
                  }
                  shape="square"
                  color="gray_700"
                  variant="outline"
                >
                  <div className="font-semibold text-left text-sm">
                    {info?.getValue()}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[315px] pb-[26px] pt-[3px] text-base text-gray-900_01"
            size="txtInterSemiBold16Gray90001"
          >
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 pr-14 sm:pr-5 py-14">
            <CartContent className="border border-gray-600 border-solid flex flex-row gap-3 items-center justify-between p-2 rounded w-[95%]" />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[141px] pb-[25px] pl-1.5 pt-1 text-base text-center text-gray-900_01"
            size="txtInterSemiBold16Gray90001"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="py-[35px] text-gray-900_01 text-lg text-right"
            size="txtInterRegular18Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[120px] pb-[27px] pl-1.5 pt-0.5 text-base text-gray-900_01 text-right"
            size="txtInterSemiBold16Gray90001"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <Text
            className="pl-0.5 py-[35px] text-gray-900_01 text-lg text-right"
            size="txtInterSemiBold18Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[66px] pb-[26px] pt-[3px] text-base text-gray-900_01 text-right"
            size="txtInterSemiBold16Gray90001"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex sm:flex-col md:gap-10 items-center justify-between px-40 md:px-5 py-4 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start md:px-10 px-40 sm:px-5 py-20 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 tracking-[-1.00px] w-auto"
              size="txtPoppinsMedium54Black900"
            >
              Cart
            </Text>
            <CartProcess className="flex md:flex-col flex-row font-inter gap-8 items-start justify-start w-auto md:w-full" />
          </div>
          <div className="flex flex-col font-inter items-start justify-start max-w-[1120px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start py-20 w-auto md:w-full">
              <div className="overflow-auto w-[58%]">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"border border-blue_gray-50"}
                  headerClass="border border-gray-600"
                />
              </div>
              <CartColumncartsummary className="bg-white-A700 border border-gray-600 border-solid flex flex-col font-poppins gap-4 items-start justify-start p-6 sm:px-5 rounded-md w-[413px] sm:w-full" />
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[424px] sm:w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_02 text-xl w-full"
                  size="txtPoppinsMedium20Gray90002"
                >
                  Have a coupon?
                </Text>
                <Text
                  className="text-base text-gray-600 w-full"
                  size="txtInterRegular16Gray600"
                >
                  Add your code for an instant cart discount
                </Text>
              </div>
              <div className="flex flex-col h-[52px] md:h-auto items-start justify-center outline outline-[0.5px] outline-gray-600 px-4 w-[424px] sm:w-full">
                <div className="border-b border-gray-600_7f border-solid flex sm:flex-col flex-row gap-2 h-[52px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_search_gray_600.svg"
                      alt="search_Two"
                    />
                    <Text
                      className="flex-1 text-base text-gray-600 tracking-[-0.40px] w-auto"
                      size="txtInterMedium16Gray600"
                    >
                      Coupon Code
                    </Text>
                  </div>
                  <div className="border border-gray-900_01 border-solid flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-900_02 tracking-[-0.40px] w-auto"
                        size="txtInterMedium16Gray90002"
                      >
                        Apply
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_02 flex font-inter gap-[49px] items-center justify-center pb-8 pt-20 px-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default CartPage;

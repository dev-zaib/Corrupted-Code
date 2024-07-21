import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import MyAccountStackplay from "components/MyAccountStackplay";

type Table1RowType = {
  numberid: string;
  dates: string;
  status: string;
  price: string;
};

const MyAccountordersPage: React.FC = () => {
  const table1Data = React.useRef<Table1RowType[]>([
    {
      numberid: "#3456_768",
      dates: "October 17, 2023",
      status: "Delivered",
      price: "$1234.00",
    },
    {
      numberid: "#3456_980",
      dates: "October 11, 2023",
      status: "Delivered",
      price: "$345.00",
    },
    {
      numberid: "#3456_120",
      dates: "August 24, 2023",
      status: "Delivered",
      price: "$2345.00",
    },
    {
      numberid: "#3456_030",
      dates: "August 12, 2023",
      status: "Delivered",
      price: "$845.00",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("numberid", {
        cell: (info) => (
          <Text
            className="py-[26px] text-gray-900_02 text-sm"
            size="txtInterRegular14Gray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[216px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Number ID
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("dates", {
        cell: (info) => (
          <Text
            className="py-[26px] text-gray-900_02 text-sm"
            size="txtInterRegular14Gray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Dates
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="py-[26px] text-gray-900_02 text-sm"
            size="txtInterRegular14Gray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Status
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="py-[26px] text-gray-900_02 text-sm"
            size="txtInterRegular14Gray90002"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[137px] pb-2.5 pt-0.5 text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Price
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
                Orders History
              </Text>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
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

export default MyAccountordersPage;

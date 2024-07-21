import React from "react";

import { Button, List, Text } from "components";

type HomepageTwoTimerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "offerexpiresin"
  | "two"
  | "days"
  | "twelve"
  | "days1"
  | "fortyfive"
  | "days2"
  | "five"
  | "days3"
> &
  Partial<{
    offerexpiresin: string;
    two: string;
    days: string;
    twelve: string;
    days1: string;
    fortyfive: string;
    days2: string;
    five: string;
    days3: string;
  }>;

const HomepageTwoTimer: React.FC<HomepageTwoTimerProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-gray-900_02 w-auto"
          size="txtInterRegular16Gray90002"
        >
          {props?.offerexpiresin}
        </Text>
        <List
          className="sm:flex-col flex-row gap-4 grid grid-cols-4 justify-start w-auto"
          orientation="horizontal"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <Button
              className="!text-gray-900_02 cursor-pointer font-medium font-poppins h-[60px] sm:text-3xl md:text-[32px] text-[34px] text-center tracking-[-0.60px] w-[60px]"
              shape="square"
              color="white_A700_01"
              size="sm"
              variant="fill"
            >
              {props?.two}
            </Button>
            <Text
              className="mt-[3px] text-center text-gray-900_02 text-xs"
              size="txtInterRegular12Gray90002"
            >
              {props?.days}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start pb-0.5 w-full">
            <Button
              className="!text-gray-900_02 cursor-pointer font-medium font-poppins h-[60px] sm:text-3xl md:text-[32px] text-[34px] text-center tracking-[-0.60px] w-[60px]"
              shape="square"
              color="white_A700_01"
              size="sm"
              variant="fill"
            >
              {props?.twelve}
            </Button>
            <Text
              className="mt-0.5 text-center text-gray-900_02 text-xs"
              size="txtInterRegular12Gray90002"
            >
              {props?.days1}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start pb-0.5 w-full">
            <Button
              className="!text-gray-900_02 cursor-pointer font-medium font-poppins h-[60px] sm:text-3xl md:text-[32px] text-[34px] text-center tracking-[-0.60px] w-[60px]"
              shape="square"
              color="white_A700_01"
              size="sm"
              variant="fill"
            >
              {props?.fortyfive}
            </Button>
            <Text
              className="mt-0.5 text-center text-gray-900_02 text-xs"
              size="txtInterRegular12Gray90002"
            >
              {props?.days2}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start pb-0.5 w-full">
            <Button
              className="!text-gray-900_02 cursor-pointer font-medium font-poppins h-[60px] sm:text-3xl md:text-[32px] text-[34px] text-center tracking-[-0.60px] w-[60px]"
              shape="square"
              color="white_A700_01"
              size="sm"
              variant="fill"
            >
              {props?.five}
            </Button>
            <Text
              className="mt-0.5 text-center text-gray-900_02 text-xs"
              size="txtInterRegular12Gray90002"
            >
              {props?.days3}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

HomepageTwoTimer.defaultProps = {
  offerexpiresin: "Offer expires in:",
  two: "02",
  days: "Days",
  twelve: "12",
  days1: "Hours",
  fortyfive: "45",
  days2: "Minutes",
  five: "05",
  days3: "Seconds",
};

export default HomepageTwoTimer;

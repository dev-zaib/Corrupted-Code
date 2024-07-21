import React from "react";

import { Img, PagerIndicator, Slider, Text } from "components";

type HomepageTwoValuesProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "freeshippingtext"
  | "orderabovetext"
  | "securepaymentstext"
  | "securedbystripetext"
  | "supporttext"
  | "phoneandemailtext"
  | "moneybacktext"
  | "durationtext"
> &
  Partial<{
    freeshippingtext: string;
    orderabovetext: string;
    securepaymentstext: string;
    securedbystripetext: string;
    supporttext: string;
    phoneandemailtext: string;
    moneybacktext: string;
    durationtext: string;
  }>;

const HomepageTwoValues: React.FC<HomepageTwoValuesProps> = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="h-[220px] relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-gray-100_01 flex flex-col gap-4 items-start justify-start mx-2.5 sm:px-5 px-8 py-12">
                  <Img
                    className="h-12 w-12"
                    src="images/img_shippingandde.svg"
                    alt="shippingandde"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900_02 text-xl w-auto"
                      size="txtPoppinsMedium20Gray90002"
                    >
                      {props?.freeshippingtext}
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      {props?.orderabovetext}
                    </Text>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2 outline-gray-900_02 outline-[1px] outline w-2 relative" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-1 bg-gray-900_02 w-1 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <div className="absolute bg-gray-100_01 flex flex-col gap-4 h-full inset-y-[0] items-start justify-center left-[26%] my-auto sm:px-5 px-8 py-12 w-full">
            <div className="h-12 md:h-8 p-1 relative w-12">
              <div className="absolute h-8 inset-[0] justify-center m-auto outline outline-[1px] outline-gray-900_02 rounded w-[84%]"></div>
              <PagerIndicator
                className="absolute flex h-2 inset-[0] justify-center m-auto w-7"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-2 outline-gray-900_02 outline-[1px] outline w-2 relative"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-1 bg-gray-900_02 w-1 relative"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block mx-[3.00px]"
                unselectedWrapperCss="inline-block mx-[3.00px]"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-[198px]">
              <Text
                className="text-gray-900_02 text-xl w-auto"
                size="txtPoppinsMedium20Gray90002"
              >
                {props?.moneybacktext}
              </Text>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.durationtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageTwoValues.defaultProps = {
  freeshippingtext: "Free Shipping",
  orderabovetext: "Order above $200",
  securepaymentstext: "Secure Payments",
  securedbystripetext: "Secured by Stripe",
  supporttext: "24/7 Support",
  phoneandemailtext: "Phone and Email support",
  moneybacktext: "Money-back",
  durationtext: "30 days guarantee",
};

export default HomepageTwoValues;

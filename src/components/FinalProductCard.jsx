import React from "react";

import { Button, Img, Text } from "components";

const FinalProductCard = (props) => {
  return (
    <>
      <Button
        onClick={() => {
          props.onItemClick(props.id);
        }}
        className={`border ${
          props.isSelected ? "bg-blue-50_4c" : "bg-white-A700"
        } ${
          props.isSelected ? "border-blue-A400" : "border-gray-100"
        } border-solid flex flex-col items-center justify-start p-[18px] rounded-[15px] w-full`}
      >
        <div className="flex flex-col gap-[11px] items-center justify-start mb-[3px] w-[99%] md:w-full">
          <div className="h-[116px] relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-13.77px] w-[78%] z-[1]">
              <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Img
                  className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                  src="images/img_unsplashiskck0kl210.png"
                  alt="unsplashiskck0k"
                />
                <div className="flex flex-col items-start justify-start mt-0.5">
                  <Text
                    className="text-base text-deep_purple-900"
                    size="txtGilroySemiBold16"
                  >
                    Mukund Cake Shop
                  </Text>
                  <div className="flex flex-col gap-[19px] justify-start mt-1 w-[45%] md:w-full">
                    <Text
                      className="mr-3.5 text-[10px] text-gray-600_01"
                      size="txtGilroyMedium10"
                    >
                      Sponsored
                    </Text>
                    <Img
                      className="h-[9px] ml-14 md:ml-[0]"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="leading-[20.00px] mt-auto mx-auto text-black-900 text-sm w-full"
              size="txtGilroyMedium14"
            >
              We are the best bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </Text>
          </div>
          <div className="h-[147px] relative w-full">
            <Img
              className="h-[147px] m-auto object-cover w-full"
              src="images/img_unsplashpgm4sjtbdq.png"
              alt="unsplashpgm4sjt"
            />
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-9 inset-x-[0] items-start justify-start mx-auto p-1.5 w-full"
              style={{ backgroundImage: "url('images/img_group2854.svg')" }}
            >
              <div className="flex flex-row gap-[54px] items-end justify-start ml-1.5 md:ml-[0] w-[89%] md:w-full">
                <Text
                  className="my-1 text-[11px] text-deep_purple-900"
                  size="txtGilroySemiBold11"
                >
                  Mukund Cake Shop
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-end p-[5px] w-[28%]"
                  style={{
                    backgroundImage: "url('images/img_group16999.svg')",
                  }}
                >
                  <div className="flex flex-row gap-[7px] items-start justify-start w-[76%] md:w-full">
                    <Img
                      className="h-[11px] w-[11px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-[10px] text-blue_gray-700"
                      size="txtHelveticaNeueMedium10"
                    >
                      Like
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.isSelected && (
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <Button
              className="cursor-pointer font-medium min-w-[121px] rounded-[5px] text-center text-xs"
              color="blue_A700_19"
              size="xs"
              variant="fill"
            >
              Change image
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[121px] rounded-[5px] text-center text-xs"
              color="blue_A700_19"
              size="xs"
              variant="fill"
            >
              Edit text
            </Button>
          </div>
        )}
      </Button>
    </>
  );
};

FinalProductCard.defaultProps = {};

export default FinalProductCard;

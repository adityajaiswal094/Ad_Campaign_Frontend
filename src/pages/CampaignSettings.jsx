import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Img, Line, Text } from "components";
import { AddDateLocation } from "../store/campaignReducer";

const CampaignSettings = () => {
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(17);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  const updateRadiusValue = (e) => {
    setRadius(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
        <div className="flex flex-col items-start justify-start">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtBold24"
          >
            Your Ad Campaign
          </Text>
          <Text
            className="mt-[3px] text-base text-black-900_7f"
            size="txtRegular16"
          >
            Launch your ad in just 4 easy steps
          </Text>
        </div>
        <div className="md:h-[135px] h-[95px] mt-[42px] relative w-[96%] md:w-full">
          <div className="absolute h-[3px] right-[1%] top-[36%] w-[95%] md:w-full">
            <Line className="absolute bg-indigo-50 h-[3px] inset-x-[0] mx-auto top-[0] w-[98%]" />
            <Line className="absolute bg-orange-300 bottom-[0] h-[3px] left-[0] shadow-bs w-[78%]" />
          </div>
          <div className="absolute flex flex-col gap-[11px] h-max inset-y-[0] items-end justify-start my-auto right-[0] w-[7%]">
            <Button
              className="border-4 border-gray-50 border-solid flex h-16 items-center justify-center mr-[3px] rounded-[50%] w-16"
              shape="circle"
              color="indigo_50_01"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[23px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </Button>
            <Text
              className="text-blue_gray-200 text-sm tracking-[-0.28px]"
              size="txtRegular14Bluegray200"
            >
              Ready to go
            </Text>
          </div>
          <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-between my-auto right-1/4 w-[43%]">
            <div className="flex flex-col gap-2.5 items-center justify-start w-[24%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-end p-4 w-[62px]"
                style={{
                  backgroundImage: "url('images/img_group49.svg')",
                }}
              >
                <Img
                  className="h-7 mt-0.5 w-7"
                  src="images/img_bag.svg"
                  alt="bag"
                />
              </div>
              <Text
                className="text-base text-gray-900_01 tracking-[-0.32px]"
                size="txtMedium16Gray90001"
              >
                Choose product
              </Text>
            </div>
            <div className="flex flex-col gap-[11px] items-center justify-start w-[28%]">
              <Button
                className="border-4 border-solid border-white-A700 flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                shape="circle"
                color="yellow_800"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
              </Button>
              <Text
                className="text-base text-gray-900_01 tracking-[-0.32px]"
                size="txtMedium16Gray90001"
              >
                Campaign settings
              </Text>
            </div>
          </div>
          <Text
            className="absolute bottom-[0] left-[0] text-base text-gray-900_01 tracking-[-0.32px]"
            size="txtMedium16Gray90001"
          >
            What you want to do
          </Text>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start left-[3%] p-4 top-[5%] w-[62px]"
            style={{ backgroundImage: "url('images/img_group49.svg')" }}
          >
            <Img
              className="h-7 mb-0.5 w-7"
              src="images/img_info.svg"
              alt="info"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[33px] w-full">
          <div className="bg-white-A700 border border-blue-50_01 border-solid flex md:flex-1 flex-col items-start justify-start p-[27px] sm:px-5 rounded-[10px] w-[72%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-5 w-[95%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[3px] w-[30%] md:w-full">
                <Text className="text-base text-black-900" size="txtBold16">
                  Campaign Settings
                </Text>
                <Text
                  className="mt-0.5 text-black-900_7f text-sm"
                  size="txtRegular14Black9007f"
                >
                  (Step 3 of 4)
                </Text>
              </div>
              <Line className="bg-gray-200_01 h-px md:ml-[0] ml-[3px] mt-[7px] w-full" />
              <div className="flex flex-row gap-[9px] items-end justify-start mt-[31px] w-[23%] md:w-full">
                <div className="flex h-6 justify-end relative w-6">
                  <Img
                    className="h-px mb-[7px] ml-[11px] mt-auto w-px"
                    src="images/img_vector34.svg"
                    alt="vectorThirtyFour"
                  />
                  <Text
                    className="absolute bg-blue-A400 border-2 border-solid border-white-A700_01 flex h-full inset-[0] items-center justify-center m-auto rounded-[50%] text-center text-white-A700 text-xs w-max"
                    size="txtBold12"
                  >
                    1
                  </Text>
                </div>
                <Text
                  className="mt-[5px] text-black-900 text-sm underline"
                  size="txtMedium14Black900"
                >
                  Location info
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between mt-[9px] w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[17px] w-[96%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[27px] text-gray-700 text-xs"
                    size="txtMedium12Gray700"
                  >
                    Location type
                  </Text>

                  <div className="sm:w-7/12 sm:mx-auto">
                    <div
                      role="tablist"
                      aria-label="tabs"
                      className="relative w-max mx-auto h-12 grid grid-cols-2 px-[3px] rounded-full bg-gray-900/20 items-center overflow-hidden shadow-2xl shadow-900/20 transition"
                    >
                      <div className="absolute indicator h-10 my-auto top-0 bottom-0 left-1 w-28 rounded-full bg-white-A700 shadow-md"></div>
                      <button
                        role="tab"
                        aria-selected={true}
                        aria-controls="panel-1"
                        id="tab-1"
                        tabIndex={0}
                        className="relative block h-10 px-6 tab rounded-full"
                      >
                        <span className="text-gray-800">Location</span>
                      </button>
                      <button
                        role="tab"
                        aria-selected={false}
                        aria-controls="panel-2"
                        id="tab-2"
                        tabIndex={-1}
                        className="relative block h-10 px-6 tab rounded-full"
                      >
                        <span className="text-gray-800">Radius</span>
                      </button>
                    </div>
                  </div>

                  <div
                    role="tabpanel"
                    id="panel-1"
                    className="tab-panel p-6 tansition duration-300 w-full"
                  >
                    <Text
                      className="md:ml-[0] ml-[5px] mt-6 text-gray-700 text-xs"
                      size="txtMedium12Gray700"
                    >
                      Select Location
                    </Text>
                    <input
                      type="text"
                      name="location"
                      placeholder="Select a place name, address or coordinates"
                      className="p-2 w-full flex md:ml-[0] ml-[5px] mt-2 rounded-md"
                      value={location}
                      onChange={updateLocation}
                    ></input>
                  </div>

                  <div
                    role="tabpanel"
                    id="panel-2"
                    className="absolute top-0 invisible opacity-0 tab-panel p-6 tansition duration-300 w-full"
                  >
                    <Text
                      className="md:ml-[0] ml-[5px] mt-[25px] text-gray-700 text-xs"
                      size="txtMedium12Gray700"
                    >
                      Select target radius - {radius}km
                    </Text>
                    <div className="md:h-[31px] h-[51px] md:ml-[0] ml-[5px] mt-1.5 relative w-[99%] md:w-full">
                      <div className="absolute bottom-[29%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <input
                          type="range"
                          name="radius"
                          className="flex h-5 md:ml-[0] ml-[5px] rounded-sm w-[99%]"
                          min={1}
                          max={34}
                          value={radius}
                          onChange={updateRadiusValue}
                        ></input>

                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtMedium12Gray700"
                          >
                            1
                          </Text>
                          <Text
                            className="h-4 text-gray-700 text-xs"
                            size="txtMedium12Gray700"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Button
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[50px] items-center justify-end md:mt-0 mt-[450px] mb-2 p-[13px] w-[19%] md:w-full"
            style={{
              backgroundImage: "url('images/img_group16855.svg')",
            }}
            onClick={() => {
              if (location !== "") {
                dispatch(AddDateLocation(location));
                navigate("/readytogo");
              }
            }}
          >
            <div className="flex flex-col items-center justify-start mt-0.5 w-[34%] md:w-full">
              <Text className="text-base text-white-A700" size="txtMedium16">
                Continue
              </Text>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CampaignSettings;

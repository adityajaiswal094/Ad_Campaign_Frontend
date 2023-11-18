import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Button, Img, Line, Text } from "components";
import FinalProductCard from "../components/FinalProductCard";
import { AddCampaign } from "../store/campaignReducer";

const ReadytogoPage = () => {
  const navigate = useNavigate();

  const campaign = useSelector((state) => state.campaign.campaign);
  const dispatch = useDispatch();

  // console.log("campaign: ", campaign);

  const [currentSelectedItemId, setCurrentSelectedItemId] = useState(null);

  // Function to handle selection/deselection of items
  const handleItemClick = (itemId) => {
    if (currentSelectedItemId === itemId) {
      // Clicked on the already selected item -> deselect it
      setCurrentSelectedItemId(null);
    } else {
      // Clicked on a different item -> select it
      setCurrentSelectedItemId(itemId);
    }
  };

  const addCampaign = async () => {
    const url = "http://localhost:4000/yourcampaigns";

    const response = await axios.post(url, campaign);

    console.log("response.data: ", response.data);
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
        <div className="h-24 md:h-[138px] mt-[42px] relative w-[97%] md:w-full">
          <div className="absolute h-[3px] inset-x-[0] mx-auto top-[35%] w-[94%] md:w-full">
            <Line className="absolute bg-indigo-50 h-[3px] inset-x-[0] mx-auto top-[0] w-[98%]" />
            <Line className="absolute bg-orange-300 bottom-[0] h-[3px] inset-x-[0] mx-auto shadow-bs w-[98%]" />
          </div>
          <div className="absolute flex flex-col gap-[11px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[8%]">
            <Button
              className="border-4 border-solid border-white-A700 flex h-16 items-center justify-center rounded-[50%] w-16"
              shape="circle"
              color="yellow_800"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[23px]"
                src="images/img_checkmark_white_a700.svg"
                alt="checkmark"
              />
            </Button>
            <Text
              className="text-base text-gray-900_01 tracking-[-0.32px]"
              size="txtMedium16Gray90001"
            >
              Ready to go
            </Text>
          </div>
          <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-between my-auto right-[26%] w-[43%]">
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
        <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-center justify-start mt-[33px] p-[27px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-start justify-start mb-0.5 w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start w-[16%] md:w-full">
              <Text className="text-base text-black-900" size="txtBold16">
                Ready to go
              </Text>
              <Text
                className="text-black-900_7f text-sm"
                size="txtRegular14Black9007f"
              >
                (Step 4 of 4)
              </Text>
            </div>
            <Line className="bg-gray-200_01 h-px mt-[7px] w-full" />
            <div className="md:flex-col flex-row gap-[9px] grid grid-cols-4 items-start justify-between mt-[17px] w-full">
              {[1, 2, 3, 4].map((id, index) => {
                return (
                  <React.Fragment key={`FinalProductCard-${id}-${index}`}>
                    <FinalProductCard
                      // {...props}
                      id={id}
                      // index
                      isSelected={currentSelectedItemId === id}
                      onItemClick={handleItemClick}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <Button
          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end md:ml-[0] ml-[1021px] mt-6 p-[11px] w-[19%] md:w-full"
          style={{ backgroundImage: "url('images/img_group16855.svg')" }}
          onClick={() => {
            if (currentSelectedItemId !== null) {
              dispatch(AddCampaign(campaign));
              addCampaign();
              navigate("/", { replace: true });
            }
          }}
        >
          <div className="flex flex-col items-center justify-start mt-[5px] w-[55%] md:w-full">
            <Text className="text-base text-white-A700" size="txtMedium16">
              Start campaign
            </Text>
          </div>
        </Button>
      </div>
    </>
  );
};

export default ReadytogoPage;

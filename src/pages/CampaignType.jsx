import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import CategoryDetailsCard from "../components/CategoryDetailsCard";
import { Button, Img, Line, Text } from "components";
import { AddCampaignType } from "../store/campaignReducer";

// import CampaignTypes from "../dummyData/CampaignTypes.json";

const CampaignType = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [currentSelectedItemId, setCurrentSelectedItemId] = useState(null);
  const [currentSelectedItem, setCurrentSelectedItem] = useState({});

  const dispatch = useDispatch();
  // const campaignType = useSelector(
  //   (state) => state.campaign.campaign.campaignType
  // );

  // console.log("campaignType: ", campaignType);

  // Function to handle selection/deselection of items
  const handleItemClick = (itemId, item) => {
    if (currentSelectedItemId === itemId) {
      // Clicked on the already selected item -> deselect it
      setCurrentSelectedItemId(null);
      setCurrentSelectedItem({});
    } else {
      // Clicked on a different item -> select it
      setCurrentSelectedItemId(itemId);
      setCurrentSelectedItem(item);
    }
  };

  const getCampaignTypes = async () => {
    try {
      const campaignTypeUrl = "http://localhost:4000/campaigntypes";
      const response = await axios.get(campaignTypeUrl);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("api called in campaigntypes");
    getCampaignTypes();
  }, []);

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
            <Line className="absolute bg-indigo-50 h-[3px] inset-[0] justify-center m-auto w-[98%]" />
            <Line className="absolute bg-orange-300 h-[3px] inset-y-[0] left-[0] my-auto shadow-bs w-[23%]" />
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
          <div className="absolute flex flex-row gap-[264px] h-max inset-y-[0] items-center justify-center my-auto right-[26%] w-[41%]">
            <div className="flex flex-col gap-2 items-center justify-start w-[22%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start p-[17px] w-16"
                style={{
                  backgroundImage: "url('images/img_group50.svg')",
                }}
              >
                <Img
                  className="h-7 w-7"
                  src="images/img_trash_blue_gray_200_01.svg"
                  alt="trash_Two"
                />
              </div>
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px]"
                size="txtRegular14Bluegray200"
              >
                Choose product
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] items-center justify-start w-1/4">
              <Button
                className="border-4 border-gray-50 border-solid flex h-16 items-center justify-center rounded-[50%] w-16"
                shape="circle"
                color="indigo_50_01"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[21px]"
                  src="images/img_group17279.svg"
                  alt="group17279"
                />
              </Button>
              <Text
                className="text-blue_gray-200 text-sm tracking-[-0.28px]"
                size="txtRegular14Bluegray200"
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
        <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-center justify-start mt-7 p-[27px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-[21px] items-start justify-start mb-0.5 w-full">
            <div className="flex flex-row gap-2 items-start justify-start ml-0.5 md:ml-[0] w-[22%] md:w-full">
              <Text className="text-base text-black-900" size="txtBold16">
                What you want to do?
              </Text>
              <Text
                className="mt-0.5 text-black-900_7f text-sm"
                size="txtRegular14Black9007f"
              >
                (Step 1 of 4)
              </Text>
            </div>
            {/* list here */}
            <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[21px] w-full">
              {data.map((props, index) => {
                return (
                  <React.Fragment key={`${props.campaignType_id}#${index}`}>
                    <CategoryDetailsCard
                      {...props}
                      isSelected={
                        currentSelectedItemId === props.campaignType_id
                      }
                      onItemClick={handleItemClick}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <Button
          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end md:ml-[0] ml-[1020px] mt-6 mb-2 p-[13px] w-[19%] md:w-full"
          style={{ backgroundImage: "url('images/img_group16855.svg')" }}
          onClick={() => {
            if (currentSelectedItemId !== null) {
              dispatch(AddCampaignType(currentSelectedItem));
              navigate("/chooseproduct");
            }
          }}
        >
          <Text className="text-base text-white-A700" size="txtMedium16">
            Continue
          </Text>
        </Button>
      </div>
    </>
  );
};

export default CampaignType;

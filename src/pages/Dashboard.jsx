import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CheckBox, Img, Text } from "components";
import CampaignDetails from "../components/CampaignDetails";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { StoreCampaigns } from "store/campaignReducer";

const Dashboard = () => {
  const navigate = useNavigate();

  const fetchLoadedCampaigns = useSelector(
    (state) => state.campaigns.campaigns
  );
  const dispatch = useDispatch();

  const [selectedPlatformId, setSelectedPlatformId] = useState("all_platform");
  const [selectedStatusId, setSelectedStatusId] = useState("all_status");
  const [selectedDateRangeId, setSelectedDateRangeId] = useState("1year");

  const handlePlatformFilter = (id) => {
    setSelectedPlatformId(id);
  };

  const handleStatusFilter = (id) => {
    setSelectedStatusId(id);
  };

  const handlerDateRangeFilter = (id) => {
    setSelectedDateRangeId(id);
  };

  const platforms = [
    {
      id: "all_platform",
      value: "All Platform",
    },
    {
      id: "facebook",
      value: "Facebook",
    },
    {
      id: "google",
      value: "Google",
    },
    {
      id: "instagram",
      value: "Instagram",
    },
    {
      id: "youtube",
      value: "Youtube",
    },
  ];

  const statuses = [
    {
      id: "all_status",
      value: "All Status",
    },
    {
      id: "live_now",
      value: "Live now",
    },
    {
      id: "paused",
      value: "Paused",
    },
    {
      id: "exhausted",
      value: "Exhausted",
    },
  ];

  const dayFilter = [
    {
      id: "1year",
      value: "Last 1 year",
    },
    {
      id: "60days",
      value: "Last 60 days",
    },
    {
      id: "30days",
      value: "Last 30 days",
    },
    {
      id: "1week",
      value: "Last 1 week",
    },
  ];

  const getCampaigns = async () => {
    try {
      const campaignsUrl = `http://localhost:4000/yourcampaigns/v2?platform=${selectedPlatformId}&status=${selectedStatusId}&dateRange=${selectedDateRangeId}`;
      const response = await axios.get(campaignsUrl);

      dispatch(StoreCampaigns(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCampaign = async (id) => {
    try {
      const deleteCampaignUrl = `http://localhost:4000/yourcampaigns/${id}`;

      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete(deleteCampaignUrl);
      getCampaigns();
    } catch (error) {
      console.error(error);
    }
  };

  const campaignToggleHandler = async (id) => {
    try {
      const url = `http://localhost:4000/yourcampaigns/${id}`;

      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(url);
      getCampaigns();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlatformId, selectedStatusId, selectedDateRangeId]);

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-start w-[93%] md:w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
          <div className="flex flex-col items-start justify-start mb-1">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtBold24"
            >
              Your Campaigns
            </Text>
            <Text
              className="mt-[3px] text-base text-black-900_7f"
              size="txtRegular16"
            >
              Check the list of campigns you created
            </Text>
          </div>
          <button
            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[50px] items-center justify-end sm:mt-0 mt-2.5 p-3 w-[19%] sm:w-full"
            style={{
              backgroundImage: "url('images/img_group16855.svg')",
            }}
            onClick={() => {
              navigate("/campaigntype");
            }}
          >
            <div className="flex flex-col items-center justify-start mt-0.5 w-[93%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
                <Text className="text-base text-white-A700" size="txtMedium16">
                  Create new campaign
                </Text>
              </div>
            </div>
          </button>
        </div>
        <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-center justify-start p-7 sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </form>

              <div className="flex md:flex-col items-center justify-end">
                <Text
                  className="md:ml-[0] ml-[306px] text-base text-black-900_7f"
                  size="txtRegular16"
                >
                  Platform:
                </Text>
                <Dropdown list={platforms} onItemClick={handlePlatformFilter} />

                <Text
                  className="ml-2 md:ml-[0] text-base text-black-900_7f"
                  size="txtRegular16"
                >
                  Status:
                </Text>
                <Dropdown list={statuses} onItemClick={handleStatusFilter} />
                <Dropdown
                  list={dayFilter}
                  onItemClick={handlerDateRangeFilter}
                />
              </div>
            </div>

            {/* table header */}
            <div className="bg-gray-50_01 border border-gray-200_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly p-3 rounded-[10px] w-full">
              <CheckBox
                className="font-medium ml-3 sm:ml-[0] sm:mt-0 my-0.5 text-left text-black-900_7f text-sm"
                inputClassName="h-4 mr-[5px] w-4"
                name="onoff"
                id="onoff"
                label="On/Off"
              ></CheckBox>
              <Text
                className="sm:ml-[0] ml-[30px] sm:mt-0 mt-1 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Campaign
              </Text>
              <Text
                className="sm:ml-[0] ml-[199px] sm:mt-0 mt-1 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Date Range
              </Text>
              <Text
                className="sm:ml-[0] ml-[135px] sm:mt-0 my-0.5 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Clicks
              </Text>
              <Text
                className="sm:ml-[0] ml-[25px] sm:mt-0 mt-1 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Budget
              </Text>
              <Text
                className="sm:ml-[0] ml-[55px] sm:mt-0 my-0.5 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Location
              </Text>
              <Text
                className="ml-9 sm:ml-[0] sm:mt-0 my-0.5 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Platform
              </Text>
              <Text
                className="sm:ml-[0] ml-[25px] sm:mt-0 my-0.5 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Status
              </Text>
              <Text
                className="sm:ml-[0] ml-[86px] sm:mt-0 my-0.5 text-black-900_7f text-sm"
                size="txtMedium14"
              >
                Actions
              </Text>
            </div>
            {fetchLoadedCampaigns.length === 0 ? (
              <p>No Campaigns</p>
            ) : (
              fetchLoadedCampaigns.map((props, index) => {
                return (
                  <React.Fragment key={`${props.id}#${index}`}>
                    <CampaignDetails
                      {...props}
                      deleteCampaign={deleteCampaign}
                      campaignToggleHandler={campaignToggleHandler}
                    />
                  </React.Fragment>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

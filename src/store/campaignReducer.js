import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  campaigns: [],
  campaign: {
    id: 0,
    campaignType: {},
    product: {},
    createdOn: "",
    startDate: "",
    endDate: "",
    clicks: 0,
    budget: 0,
    location: "",
    status: "live_now",
  },
};

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    // store campaigns fetched from backend
    StoreCampaigns: (state, action) => {
      const fetchedCampaigns = action.payload;

      return {
        ...state,
        campaigns: [...state.campaigns, ...fetchedCampaigns],
      };
    },

    // first reducer to store selected campaign type
    AddCampaignType: (state, action) => {
      const newCampaignType = action.payload;

      // console.log("newCampaignType: ", newCampaignType);

      return {
        ...state,
        campaign: {
          ...state.campaign,
          campaignType: newCampaignType,
        },
      };
    },

    // second reducer to store selected product
    AddProduct: (state, action) => {
      const newProduct = action.payload;

      // console.log("newProduct: ",newProduct);

      return {
        ...state,
        campaign: {
          ...state.campaign,
          product: newProduct,
        },
      };
    },

    // to store budget = 3400, clicks = 300, startDate = 25 Jul 2020, endDate = 01 Aug 2020 (using moment), and location from input field
    AddDateLocation: (state, action) => {
      const id = 11;
      const location = action.payload;
      const budget = 3400;
      const startDate = "25 Jul 2020";
      const endDate = "01 Aug 2020";
      const clicks = 234;
      const createdOn = `${new Date().getDate()} ${
        month[new Date().getMonth()]
      }`;
      const status = 'live_now';

      // console.log(
      //   JSON.stringify({
      //     location,
      //     budget,
      //     startDate,
      //     endDate,
      //     clicks,
      //     createdOn,
      //   })
      // );

      return {
        ...state,
        campaign: {
          ...state.campaign,
          id: id,
          location: location,
          budget: budget,
          startDate: startDate,
          endDate: endDate,
          clicks: clicks,
          createdOn: createdOn,
          status: status,
        },
      };
    },

    // ready to go - new campaign status always live_now
    AddCampaign: (state, action) => {
      const newCampaign = action.payload;

      // console.log("newCampaign: ", newCampaign);

      return {
        ...state,
        campaigns: [...state.campaigns, newCampaign],
      };
    },
  },
});

export const {
  AddCampaignType,
  AddProduct,
  AddDateLocation,
  AddCampaign,
  StoreCampaigns,
} = campaignSlice.actions;
export default campaignSlice.reducer;

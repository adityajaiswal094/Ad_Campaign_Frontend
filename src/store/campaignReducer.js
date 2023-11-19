import { createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";

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
  totalCampaigns: 0,
};

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    // store campaigns fetched from backend
    StoreCampaigns: (state, action) => {
      const fetchedCampaigns = action.payload;
      const totalItem = action.payload.length;

      return {
        ...state,
        campaigns: fetchedCampaigns,
        totalCampaigns: totalItem,
      };
    },

    // first reducer to store selected campaign type
    AddCampaignType: (state, action) => {
      const newCampaignType = action.payload.campaignType;
      const id = action.payload.id;

      return {
        ...state,
        campaign: {
          ...state.campaign,
          id: id,
          campaignType: newCampaignType,
        },
      };
    },

    // second reducer to store selected product
    AddProduct: (state, action) => {
      const newProduct = action.payload;

      return {
        ...state,
        campaign: {
          ...state.campaign,
          product: newProduct,
        },
      };
    },

    // to store budget = 3400, clicks = 300, startDate = 25 Jul 2023, endDate = 01 Aug 2023 (using moment), and location from input field
    AddDateLocation: (state, action) => {
      const location = action.payload;
      const budget = 3400;
      const startDate = "25 Jul 2023";
      const endDate = "01 Aug 2023";
      const clicks = 234;
      const createdOn = `${moment().format("ll")}`;
      const status = "live_now";

      return {
        ...state,
        campaign: {
          ...state.campaign,
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

      return {
        ...state,
        campaigns: [...state.campaigns, newCampaign],
        campaign: {},
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

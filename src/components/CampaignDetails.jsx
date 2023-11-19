import React /* , { useState } */ from "react";

import { Button, CheckBox, Img, Line, Text } from "components";
import { CampaignStatus, FormatPrice } from "../utils/utils";
import FacebookIcon from "../assets/images/facebook.png";
import GoogleIcon from "../assets/images/google.png";
import InstagramIcon from "../assets/images/instagram.png";
import YoutubeIcon from "../assets/images/youtube.png";

const CampaignDetails = (props) => {
  // const [toggle, setToggle] = useState();

  const Icon = (platform) => {
    switch (platform) {
      case "google":
        return <Img src={GoogleIcon} alt="Google" className="h-6 w-6" />;

      case "youtube":
        return <Img src={YoutubeIcon} alt="Youtube" className="h-6 w-6" />;

      case "instagram":
        return <Img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />;

      case "facebook":
      default:
        return <Img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />;
    }
  };

  const { color, campaign_status } = CampaignStatus(props.status);

  return (
    <>
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
        {/* <div className="border border-gray-400 border-solid h-4 rounded-[3px] w-4"></div> */}

        <div className="flex flex-row">
          <CheckBox
            className="font-medium ml-3 sm:ml-[0] sm:mt-0 my-0.5 text-left text-black-900_7f text-sm"
            inputClassName="h-4 mr-[5px] w-4"
            name="onoff"
            id="onoff"
          ></CheckBox>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={props.status === "live_now" ? true : false}
              onChange={() => {
                props.campaignToggleHandler(props.id);
              }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <Img
          className="h-[54px] sm:h-auto ml-9 md:ml-[0] object-cover rounded-[5px] w-[6%] md:w-full"
          src={props.product.product_imageUrl}
          alt="unsplashs2jw81l"
        />
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px]">
          <Text className="text-black-900 text-sm" size="txtMedium14Black900">
            {props.product.product_name}
          </Text>
          <Text className="mt-1 text-black-900_99 text-xs" size="txtRegular12">
            Created on {props.createdOn}
          </Text>
        </div>

        <Text
          className="md:ml-[0] ml-[34px] text-black-900 text-sm"
          size="txtRegular14Black900"
        >
          {props.startDate} - {props.endDate}
        </Text>
        <Text
          className="md:ml-[0] ml-[46px] text-black-900 text-sm"
          size="txtRegular14Black900"
        >
          {props.clicks}
        </Text>
        <Text
          className="md:ml-[0] ml-[35px] text-black-900 text-sm"
          size="txtRegular14Black900"
        >
          <FormatPrice price={props.budget} />
        </Text>
        <Text
          className="md:ml-[0] ml-[37px] text-black-900 text-sm"
          size="txtRegular14Black900"
        >
          {props.location}
        </Text>
        <div className="flex items-center justify-center md:ml-[0] ml-[58px] md:mt-0 w-[22px]">
          {Icon(props.campaignType.platform)}
        </div>

        <Button
          className="cursor-pointer font-eudoxussans font-medium leading-[normal] min-w-[104px] md:ml-[0] ml-[43px] md:mt-0 my-3 text-center text-sm"
          shape="round"
          color={color}
          size="xs"
          variant="fill"
        >
          {campaign_status}
        </Button>
        <Button>
          <Img
            className="h-[21px] md:ml-[0] ml-[25px] w-[21px]"
            src="images/img_link.svg"
            alt="link"
          />
        </Button>
        <Button
          onClick={() => {
            props.deleteCampaign(props.id);
          }}
        >
          <Img
            className="h-[21px] md:ml-[0] ml-[18px] w-[21px]"
            src="images/img_trash_red_500.svg"
            alt="trash"
          />
        </Button>
      </div>
      <Line className="self-center h-px bg-gray-200_01 w-full" />
    </>
  );
};

CampaignDetails.defaultProps = {};

export default CampaignDetails;

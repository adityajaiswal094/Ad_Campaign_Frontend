import React from "react";
import { Text } from "./Text";

export default function CategoryDetailsCard(props) {
  return (
    <>
      <button
        className={`${
          props.isSelected ? "bg-blue-50_4c" : "bg-white-A700"
        } border ${
          props.isSelected ? "border-blue-A400" : "border-gray-100"
        } border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[10px] w-full`}
        onClick={() => {
          const item = {
            campaignType_id: props.campaignType_id,
            campaignType_name: props.campaignType_name,
            campaignType_desc: props.campaignType_desc,
            platform: props.platform,
          };
          props.onItemClick(props.campaignType_id, item);
        }}
      >
        <div className="flex flex-row items-end justify-between w-full">
          <div className="flex flex-row items-end justify-start w-full">
            <span className="material-symbols-outlined mb-3">{props.icon}</span>
            <div className="flex flex-col gap-[5px] items-start justify-start mb-1 ml-[13px] mt-[7px]">
              <Text className="text-[15px] text-black-900" size="txtMedium15">
                {props.campaignType_name}
              </Text>
              <Text className="text-gray-500 text-sm" size="txtMedium14Gray500">
                {props.campaignType_desc}
              </Text>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

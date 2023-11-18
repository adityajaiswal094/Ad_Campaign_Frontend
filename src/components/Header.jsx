import React from "react";
import { Img } from "./Img";
import { FaCaretDown } from "react-icons/fa";
import { Text } from "./Text";

export default function Header() {
  return (
    <>
      <div className="bg-white-A700 border border-blue-50 border-solid flex flex-row items-center justify-center p-4 w-full">
        {/* header */}
        <div className="flex sm:flex-col flex-row gap-4 items-start justify-center mt-1 w-[41%]">
          <Img
            className="h-5 sm:mt-0 mt-[9px] w-5"
            src="images/img_trash_indigo_900.svg"
            alt="trash_One"
          />
          <Img
            className="h-5 sm:mt-0 mt-[9px] w-5"
            src="images/img_user.svg"
            alt="user"
          />
          <div className="flex flex-row gap-2 items-center justify-center w-[34%] sm:w-full">
            <div className="flex flex-col h-9 items-center justify-start w-9">
              <Img
                className="h-9 md:h-auto rounded-[50%] w-9"
                src="images/img_unsplashhwqvzan7jnq.png"
                alt="unsplashhwqvzan"
              />
            </div>
            <div className="flex flex-row /* gap-1.5 */ items-center justify-center w-[76%]">
              <Text className="text-indigo-900 text-sm" size="txtRegular14">
                Mukund cake shop
              </Text>
              <FaCaretDown />
            </div>
          </div>
          <Img
            className="h-5 sm:mt-0 mt-[9px] w-5"
            src="images/img_call.svg"
            alt="call"
          />
        </div>
      </div>
    </>
  );
}

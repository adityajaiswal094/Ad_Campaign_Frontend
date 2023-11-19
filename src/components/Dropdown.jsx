import React, { useState } from "react";
import { Button } from "./Button";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(props.list[0].value);

  return (
    <>
      <div className="relative flex flex-col items-center min-w-[138px] ml-2 md:ml-[0] rounded-lg">
        <Button
          className="bg-white p-4 w-full flex items-center justify-center text-md rounded-md tracking-wider"
          rightIcon={isOpen ? <FaCaretUp /> : <FaCaretDown />}
          color="gray_200"
          size="sm"
          variant="outline"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selectedFilter}
        </Button>

        {isOpen && (
          <div className="absolute top-14 flex flex-col bg-white border border-gray-100 bg-white-A700 items-start rounded-lg p-2 w-full">
            {props.list.map((item, index) => {
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex w-full justify-start hover:bg-gray-300 cursor-pointer rounded-lg p-2"
                >
                  <Button
                    onClick={() => {
                      setSelectedFilter(item.value);
                      props.onItemClick(item.id);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {item.value}
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

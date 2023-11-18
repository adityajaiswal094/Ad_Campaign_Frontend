import React from "react";

import { Button, Img, Text } from "components";

const ProductCard = (props) => {
  return (
    <>
      <Button
        className={`border ${props.isSelected ? "bg-blue-50_4c" : "bg-white-A700"} ${
          props.isSelected ? "border-blue-A400" : "border-gray-100"
        } border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[10px] w-full`}
        onClick={() => {
          const item = {
            product_id: props.product_id,
            product_name: props.product_name,
            product_price: props.product_price,
            product_imageUrl: props.product_imageUrl,
          };
          props.onItemClick(props.product_id, item);
        }}
      >
        <div className="flex flex-row items-end justify-between w-full">
          <div className="flex flex-row items-end justify-start w-full">
            <Img
              className="h-[54px] md:h-auto object-cover rounded-[5px] w-[17%]"
              src={props.product_imageUrl}
              alt="product-image"
            />
            <div className="flex flex-col gap-[5px] items-start justify-start mb-1 ml-[13px] mt-[7px]">
              <Text className="text-[15px] text-black-900" size="txtMedium15">
                {props.product_name}
              </Text>
              <Text className="text-gray-500 text-sm" size="txtMedium14Gray500">
                Rs: {props.product_price}
              </Text>
            </div>
          </div>

          <div className="h-[21px] ml-[39px] my-4 w-[21px]">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={props.isSelected}
              id="checked-checkbox"
              type="checkbox"
              // value=""
            />
          </div>
        </div>
      </Button>
    </>
  );
};

ProductCard.defaultProps = {};

export default ProductCard;

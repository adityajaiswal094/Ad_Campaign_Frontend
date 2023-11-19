import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Img, Line, Text } from "components";
import ProductCard from "../components/ProductCard";
import { AddProduct } from "../store/campaignReducer";

// import ProductDetails from "../dummyData/ProductDetails.json";

const ChooseproductPage = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const navigate = useNavigate();

  const campaign = useSelector(
    (state) => state.campaigns.campaign
  );
  const dispatch = useDispatch();

  // Function to handle selection/deselection of items
  const handleItemClick = (itemId, item) => {
    if (selectedItemId === itemId) {
      // Clicked on the already selected item -> deselect it
      setSelectedItemId(null);
      setSelectedItem({});
    } else {
      // Clicked on a different item -> select it
      setSelectedItemId(itemId);
      setSelectedItem(item);
    }
  };

  const getProducts = async () => {
    try {
      const productsUrl = "http://localhost:4000/productdetails";
      const response = await axios.get(productsUrl);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (Object.keys(campaign).length === 0) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Line className="absolute bg-indigo-50 h-[3px] inset-x-[0] mx-auto top-[0] w-[98%]" />
            <Line className="absolute bg-orange-300 bottom-[0] h-[3px] left-[0] shadow-bs w-[55%]" />
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
          <div className="absolute flex flex-row gap-64 h-max inset-y-[0] items-center justify-center my-auto right-[26%] w-[42%]">
            <div className="flex flex-col gap-2.5 items-center justify-start w-1/4">
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
        <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-center justify-start mt-7 p-[25px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-start justify-start mb-1.5 w-[99%] md:w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-[21%] md:w-full">
              <Text className="text-base text-black-900" size="txtBold16">
                Choose the Product
              </Text>
              <Text
                className="mt-[3px] text-black-900_7f text-sm"
                size="txtRegular14Black9007f"
              >
                (Step 2 of 4)
              </Text>
            </div>
            <Line className="bg-gray-200_01 h-px mt-2 w-full" />
            <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[21px] w-full">
              {data.length === 0 ? (
                <p>Loading ...</p>
              ) : (
                data.map((props, index) => {
                  return (
                    <React.Fragment key={`${props.product_id}#${index}`}>
                      <ProductCard
                        {...props}
                        isSelected={selectedItemId === props.product_id}
                        onItemClick={handleItemClick}
                      />
                    </React.Fragment>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <Button
          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end md:ml-[0] ml-[1020px] mt-6 mb-2 p-[13px] w-[19%] md:w-full"
          style={{ backgroundImage: "url('images/img_group16855.svg')" }}
          onClick={() => {
            if (selectedItemId !== null) {
              dispatch(AddProduct(selectedItem));
              navigate("/campaignsettings");
            }
          }}
        >
          <div className="flex flex-col items-center justify-start mt-0.5 w-[34%] md:w-full">
            <Text className="text-base text-white-A700" size="txtMedium16">
              Continue
            </Text>
          </div>
        </Button>
      </div>
    </>
  );
};

export default ChooseproductPage;

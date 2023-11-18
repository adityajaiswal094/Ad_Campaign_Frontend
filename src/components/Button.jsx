import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[15px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    orange_50: "bg-orange-50 text-amber-700_01",
    deep_orange_50: "bg-deep_orange-50 text-red-500",
    blue_A700_19: "bg-blue-A700_19 text-blue-A400",
    blue_A400_01: "bg-blue-A400_01",
    green_50: "bg-green-50 text-green-800",
    yellow_800: "bg-yellow-800",
    indigo_50_01: "bg-indigo-50_01",
  },
  outline: { gray_200: "border border-gray-200 border-solid text-black-900" },
};
const sizes = { xs: "p-1.5", sm: "p-3.5", md: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "orange_50",
    "deep_orange_50",
    "blue_A700_19",
    "blue_A400_01",
    "green_50",
    "yellow_50",
    "indigo_50_01",
    "gray_200",
    "yellow_800"
  ]),
};

export { Button };

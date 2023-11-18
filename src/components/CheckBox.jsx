import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

const variants = {
  outline: {
    gray_400: "border border-gray-400 border-solid text-black-900_7f",
  },
};
const shapes = { round: "rounded-[3px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "round",
      size = "",
      variant = "outline",
      color = "gray_400",
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (variant && variants[variant]?.[color]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),

  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_400"]),
};

export { CheckBox };

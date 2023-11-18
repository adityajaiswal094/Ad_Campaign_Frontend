import React from "react";

const sizeClasses = {
  txtMedium12Gray700: "font-eudoxussans font-medium",
  txtBold24: "font-bold font-eudoxussans",
  txtRegular12: "font-eudoxussans font-normal",
  txtRegular13: "font-eudoxussans font-normal",
  txtRegular14: "font-eudoxussans font-normal",
  txtRegular14Black900: "font-eudoxussans font-normal",
  txtRegular10: "font-eudoxussans font-normal",
  txtRegular16: "font-eudoxussans font-normal",
  txtRegular13Black9004c: "font-eudoxussans font-normal",
  txtRegular14Bluegray200: "font-eudoxussans font-normal",
  txtRegular16Gray90001: "font-eudoxussans font-normal",
  txtMedium14Gray500: "font-eudoxussans font-medium",
  txtMedium14Black900: "font-eudoxussans font-medium",
  txtRegular14Black9007f: "font-eudoxussans font-normal",
  txtGilroySemiBold11: "font-gilroysemibold font-normal",
  txtBold10: "font-bold font-eudoxussans",
  txtGilroyMedium10: "font-gilroymedium font-normal",
  txtMedium12: "font-eudoxussans font-medium",
  txtMedium14Gray50001: "font-eudoxussans font-medium",
  txtBold12: "font-bold font-eudoxussans",
  txtMedium11: "font-eudoxussans font-medium",
  txtMedium10: "font-eudoxussans font-medium",
  txtMedium14WhiteA700: "font-eudoxussans font-medium",
  txtGilroyMedium14: "font-gilroymedium font-normal",
  txtMedium16: "font-eudoxussans font-medium",
  txtBold16: "font-bold font-eudoxussans",
  txtMedium15: "font-eudoxussans font-medium",
  txtMedium14: "font-eudoxussans font-medium",
  txtGilroySemiBold16: "font-gilroysemibold font-normal",
  txtHelveticaNeueMedium10: "font-helveticaneue font-medium",
  txtMedium16Gray90001: "font-eudoxussans font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img } from "components";

const SideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[21px] mb-[9px] w-[21px]"
          src="images/img_home.svg"
          alt="home"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-[21px] w-[21px]"
          src="images/img_volume.svg"
          alt="volume"
        />
      ),
      label: "Campaign",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-[7px] w-[21px]"
          src="images/img_trash.svg"
          alt="trash"
        />
      ),
      label: "Products",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-[9px] w-[21px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Customers",
    },
  ];

  return (
    <>
      <Sidebar className="!sticky !w-auto bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
        <Img
          onClick={() => collapseSidebar(!collapsed)}
          className="h-[46px] mt-[46px] mx-auto w-[46px]"
          src="images/img_frame.svg"
          alt="frame"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8px",
              paddingBottom: "23px",
              color: "#ffffff",
              fontSize: "10px",
              fontFamily: "Eudoxus Sans",
              borderTopRightRadius: "2px",
              borderBottomRightRadius: "2px",
              paddingLeft: "23px",
              paddingRight: "23px",
              [`&:hover, &.ps-active`]: {
                fontWeight: "500 !important",
                backgroundColor: "#1876f319 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[566px] mt-[37px] pt-[22px] w-full"
        >
          {sideBarMenu?.map((menu, i) => {
            return (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
    </>
  );
};

SideBar.defaultProps = {};

export default SideBar;

import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Routes from "./Routes";
import SideBar from "components/SideBar";
import Header from "components/Header";

function App() {
  return (
    <ProSidebarProvider>
      <div className="bg-gray-50 flex flex-col font-eudoxussans items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <SideBar />
          <div className="flex flex-1 flex-col gap-[43px] items-center justify-start md:px-5 w-full">
            <Header />
            <Routes />
          </div>
        </div>
      </div>
    </ProSidebarProvider>
  );
}

export default App;

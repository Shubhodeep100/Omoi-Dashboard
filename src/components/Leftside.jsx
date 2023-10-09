import React from "react";
import {
  BarChartOutlined,
  CompassOutlined,
  FolderOutlined,
  HomeOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShoppingOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

function Leftside({ openSidebarToggle, OpenSidebar }) {


  return (
    <div id="sidebar" className={openSidebarToggle ? "responsive" : ""}>
      <div className="relative px-2 pt-4 pr-3 h-screen bg-white LeftSidebar md:overflow-hidden border-r">
        {/* Add the LeftCircleOutlined icon and onClick handler */}
        <div className="absolute top-4 right-4">
          <LeftCircleOutlined
            className="text-2xl lg:hidden cursor-pointer"
            onClick={OpenSidebar}
          />
        </div>

        <div className=" ml-2 flex justify-between items-center mt-2 tracking-tight">
          <a href=" " className="flex items-center">
            <img
              src="https://img.logoipsum.com/296.svg"
              className="h-6 mr-2 sm:h-7"
              alt="Omio Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Omoi
            </span>
          </a>
        </div>

        {/* The links component block starts */}
        <div className="ml-2 h-full pt-5 bg-white overflow-y-auto sm:w-44">
          <ul className="space-y-1 text-xs">
            <li>
              <a href=" " className="anchor-cont">
                <HomeOutlined className="text-sm" />
                <span className="anchor-txt">Home</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <BarChartOutlined />
                <span className="anchor-txt">Analytic</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <CompassOutlined className="text-sm" />
                <span className="anchor-txt">Explore</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <ShoppingOutlined className="text-sm" />
                <span className="anchor-txt">Shop</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <MessageOutlined className="text-sm" />
                <span className="anchor-txt">Inbox</span>
              </a>
            </li>
            <p className="ml-1 text-gray-600 py-2">Tools</p>
            <li>
              <a href=" " className="anchor-cont">
                <SettingOutlined className="text-sm" />
                <span className="anchor-txt">Setting</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <QuestionCircleOutlined className="text-sm" />
                <span className="anchor-txt">Help</span>
              </a>
              <p className="ml-1 text-gray-600 py-2">Projects</p>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <FolderOutlined className="text-sm" />
                <span className="anchor-txt">Amazon</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont">
                <FolderOutlined className="text-sm" />
                <span className="anchor-txt">Invinity HQ</span>
              </a>
            </li>
          </ul>
        </div>
        {/* The links comp block ends */}
      </div>
    </div>
  );
}

export default Leftside;
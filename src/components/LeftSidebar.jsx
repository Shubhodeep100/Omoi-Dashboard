import React, { useState } from "react";
import {
  BarChartOutlined,
  CompassOutlined,
  FolderOutlined,
  HomeOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShoppingOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";

function LeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Toggle button for mobile */}

      <button
        className="sticky sm:hidden top-20 left-7 z-50"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <LeftSquareOutlined className="text-lg" />
        ) : (
          <RightSquareOutlined className="text-lg" />
        )}
      </button>

      {/* LeftSidebar */}
      {isSidebarOpen && (
        <div className="ml-4 px-2 pt-4 pr-3 h-screen bg-white LeftSidebar md:overflow-hidden border-r ">
          <div className="flex justify-between items-center mt-2 tracking-tight">
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
          <div className="h-full pt-5 bg-white overflow-y-auto bg-white h-screen sm:w-44">
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
      )}
    </div>
  );
}

export default LeftSidebar;
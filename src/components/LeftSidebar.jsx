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
} from "@ant-design/icons";


function LeftSidebar() {
  return (
    <section className="leftSidebar" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white h-screen border-r sm:w-52">
        <a href=" " className="flex items-center pl-2.5 mb-4">
          <img
            src="https://img.logoipsum.com/296.svg"
            className="h-6 mr-3 sm:h-7"
            alt="Omio Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
            Omoi
          </span>
        </a>
        <ul className="space-y-1 text-xs">
          <li>
            <a href=" " className="anchor-cont">
              <HomeOutlined />
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
              <CompassOutlined />
              <span className="anchor-txt">Explore</span>
            </a>
          </li>
          <li>
            <a href=" " className="anchor-cont">
              <ShoppingOutlined />
              <span className="anchor-txt">Shop</span>
            </a>
          </li>
          <li>
            <a href=" " className="anchor-cont">
              <MessageOutlined />
              <span className="anchor-txt">Inbox</span>
            </a>
          </li>
          <p className="ml-1.5 text-gray-600 py-2">Tools</p>
          <li>
            <a href=" " className="anchor-cont">
              <SettingOutlined />
              <span className="anchor-txt">Setting</span>
            </a>
          </li>
          <li>
            <a href=" " className="anchor-cont">
              <QuestionCircleOutlined />
              <span className="anchor-txt">Help</span>
            </a>
            <p className="ml-1.5 text-gray-600 py-2">Projects</p>
          </li>
          <li>
            <a href=" " className="anchor-cont">
              <FolderOutlined />
              <span className="anchor-txt">Amazon</span>
            </a>
          </li>
          <li>
            <a href=" " className="anchor-cont">
              <FolderOutlined />
              <span className="anchor-txt">Invinity HQ</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LeftSidebar;

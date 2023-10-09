import React, { useState } from "react";
import pic from "../Assets/mypic.png";

import {
  CloseCircleOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Greeting({ OpenSidebar, Openrightbar }) {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className="min-h-min bg-white items-center pt-4 rounded-lg">
      {/* Add the MenuOutlined icon conditionally */}
      <div className="flex justify-between">
        <MenuOutlined
          className="pl-5 text-lg cursor-pointer lg:hidden"
          onClick={OpenSidebar}
        />
        <MenuOutlined
          className="pr-5 text-lg cursor-pointer lg:hidden"
          onClick={Openrightbar}
        />
      </div>

      <div className="flex flex-wrap pt-1 pl-1 greet">
        <div className="w-14 h-14 p-1 mr-4 rounded-full relative">
          <div className="absolute inset-0 ring-violet-500 ring-4 rounded-full" />
          <img
            src={pic}
            alt="Display pic"
            className="w-full h-full rounded-full"
          />
          <div className="absolute top-0 right-0 rounded-full border-2 text-center w-4 h-4 bg-violet-600 text-white flex items-center justify-center cursor-pointer">
            <p className="text-xs rounded-full">3</p>
          </div>
        </div>

        <div className="flex flex-col justify-between greet">
          <div className="text-gray-900 text-2xl font-medium">
            <div className="greet">Good Evening Team!</div>
          </div>
          <div className="mt-1 flex flex-col justify-between">
            <p className="text-gray-500 text-xs font-normal">
              Have an in-depth look at all the metrics within your dashboard.
            </p>
          </div>
        </div>

        <div className="ml-auto">
          {isSearchVisible ? (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search Data"
                className="bg-gray-200 rounded-full border p-1 mr-1"
              />
              <button
                onClick={toggleSearch}
                className="bg-gray-200 rounded-full p-2"
              >
                <CloseCircleOutlined />
              </button>
            </div>
          ) : (
            <SearchOutlined
              className="cursor-pointer bg-gray-200 text-gray-500 rounded-full p-1.5"
              onClick={toggleSearch}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Greeting;

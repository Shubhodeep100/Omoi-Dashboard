import React from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Calendar() {
  return (
    <div>
      <div className="flex flex-col items-center border-t border-gray-200 pt-5">
        <div className="flex flex-row justify-between text-heading4-medium text-light-1 w-full">
          <div className="text-sm font-medium">October 2023</div>
          <div className="flex flex-row space-x-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full border border-gray bg-white flex items-center justify-center ml-auto ">
              <LeftOutlined className="text-xs text-gray-300" />
            </div>
            <div className="w-6 h-6 rounded-full border border-gray bg-white flex items-center justify-center ">
              <RightOutlined className="text-xs text-violet-500 " />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-5 pt-4 pb-3">
          <div className="text-sm text-gray-400">Mon</div>
          <div className="text-sm text-gray-400">Tue</div>
          <div className="text-sm text-gray-400">Wed</div>
          <div className="text-sm text-gray-400">Thu</div>
          <div className="text-sm text-gray-400">Fri</div>
          <div className="text-sm text-gray-400">Sat</div>
          <div className="text-sm text-gray-400">Sun</div>
        </div>
        <div className="flex flex-row space-x-7 pt-1 pl-2">
          <span className="text-sm text-black text-xs cursor-pointer">11</span>
          <span className="text-sm text-black text-xs cursor-pointer">12</span>
          <span className="w-5 h-5 rounded-full text-xs text-white bg-violet-500 flex items-top justify-center cursor-pointer">
            13
          </span>
          <span className="text-sm text-black text-xs cursor-pointer">14</span>
          <span className="text-sm text-black text-xs cursor-pointer">15</span>
          <span className="text-sm text-black text-xs cursor-pointer">17</span>
          <span className="text-sm text-black text-xs cursor-pointer">16</span>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

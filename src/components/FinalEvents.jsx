import React from 'react'
import laptop from "../Assets/laptop.jpg";
import books from "../Assets/stackbook.jpg";
import report from "../Assets/book.jpg";

import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
function FinalEvents() {
  return (
    <div>
      <div className="flex flex-row border-b py-5">
        <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
          <img src={laptop} alt="Laptop" className="w-6 h-6 object-cover" />
        </div>

        <div className="flex flex-col w-full pl-4">
          <div className="text-gray-700 text-sm font-medium">
            Meeting with Client
          </div>
          <div className="flex flex- justify-between text-heading4-medium w-full">
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
              <VideoCameraOutlined className="pr-2" />
              Google Meet
            </div>
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
              <ClockCircleOutlined className="px-2 ml-auto" />
              12 pm
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Report */}
      <div className="flex flex-row border-b py-5">
        <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
          <img src={books} alt="Laptop" className="w-6 h-6 object-cover" />
        </div>

        <div className="flex flex-col w-full pl-4">
          <div className="text-gray-700 text-sm font-medium">Weekly Report</div>
          <div className="flex flex-row justify-between text-heading4-medium w-full">
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
              <VideoCameraOutlined className="pr-2" />
              Google Meet
            </div>
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
              <ClockCircleOutlined className="px-2 ml-auto" />
              03 pm
            </div>
          </div>
        </div>
      </div>

      {/* Daily Scrum Meeting */}
      <div className="flex flex-row border-b py-5">
        <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
          <img src={report} alt="Laptop" className="w-6 h-6 object-cover" />
        </div>

        <div className="flex flex-col w-full pl-4">
          <div className="text-gray-700 text-sm font-medium">
            Daily Scrum Meeting
          </div>
          <div className="flex flex-row justify-between text-heading4-medium w-full">
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
              <VideoCameraOutlined className="pr-2" />
              Google Meet
            </div>
            <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
              <ClockCircleOutlined className="px-2 ml-auto" />
              05 pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalEvents

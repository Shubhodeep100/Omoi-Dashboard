import React from "react";

import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
import p3 from "../Assets/3.jpg";


import { ArrowRightOutlined } from "@ant-design/icons";

function ControlTxt() {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-start pt-2">
        <p className="text-sm text-violet-600 cursor-pointer">Premium Access</p>
        <div className="flex flex-col font-semibold text-2xl">
          <div className="-mb-1">Take Back </div>
          <div className="-mb-1">Your Creative </div>
          <div className="flex flex-row ">
            <div>
              <div>Control</div>
            </div>

            <div className="mt-2 ml-3 justify-content-center">
              <div className="flex -space-x-3 cursor-pointer">
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src={p1}
                  alt=""
                />
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src={p2}
                  alt=""
                />
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                  src={p3}
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href=" "
                >
                  +10
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-normal pt-2 cursor-pointer">
            The Professional Platform <span>⌄</span>
          </p>
        </div>
      </div>

      <section className="pt-7 mb-6">
        <a
          href=" "
          className="flex items-center p-2 antialiased border border-slate-200 text-black rounded-lg text-violet-600 hover:bg-slate-100"
        >
          <span className="text-violet-600 text-sm ">Upgrade Now</span>
          <ArrowRightOutlined className="ml-auto text-violet-600 pr-2" />
        </a>
      </section>
    </div>
  );
}

export default ControlTxt;

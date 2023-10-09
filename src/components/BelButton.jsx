import React, { useState } from "react";
import dp from "../Assets/mypic.png";
import { BellOutlined, DownOutlined} from "@ant-design/icons";

function BelButton() {
  const [state, setState] = useState({ isDropdownOpen: false });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  return (
    <div>
      <div className="flex flex-row justify-between pt-1 pb-6">
        <div className="mt-3 pt-1 cursor-pointer relative">
          
          <BellOutlined />
          <div className="absolute top-2 right-0 w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>

        <div className="mt-3 pt-1">
          <button
            type="button"
            className="flex items-center justify-center rounded-full w-38 h-8 bg-white text-white p-0.5 shadow-xl"
            onClick={toggleDropdown}
          >
            <div className="w-6 h- rounded-full overflow-hidden mx-1">
              <img
                src={dp}
                alt="ProImage"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="antialiased text-xs font-semibold mr-1 text-black">
              Johntosan
            </span>
            <DownOutlined className="text-black text-xs p-1" />
          </button>
          {state.isDropdownOpen && (
            <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-md w-24 flex flex-col items-center z-50 cursor-pointer pl-2">
              <ul className="max-h-24 overflow-y-auto text-xs pr-6 space-y-2">
                <li className="hover:bg-slate-300">Harry</li>
                <li className="hover:bg-slate-300">Ben</li>
                <li className="hover:bg-slate-300">Mark</li>
                <li className="hover:bg-slate-300">Austin</li>
                <li className="hover:bg-slate-300">Jonathan</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BelButton;

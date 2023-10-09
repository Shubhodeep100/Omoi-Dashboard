import { React, useState } from "react";
import { CalendarOutlined, CaretDownOutlined } from "@ant-design/icons";


function TransHistory() {
  const [state, setState] = useState(false);

  const toggleDrop = () => {
    setState((prevState) => ({
      ...prevState,
      isDropOpen: !prevState.isDropOpen,
    }));
  };

  return (
    <section className="min-h-min bg-white rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between items-start THistoryTxt">
          <div className="text-gray-900 text-2xl font-medium ">
            Transaction History
          </div>

          <div className="mt-2 flex flex-col justify-between items-center ">
            <div className="flex flex-wrap space-x-1 text-sm TransMbutton">
              <button
                className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                type="button"
              >
                Recipient
                <CaretDownOutlined className=" text-sm pb-1 text-gray-400 px-1 pl-3" />
              </button>
              <button
                className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                type="button"
              >
                Amount
                <CaretDownOutlined className=" text-sm pb-1 text-gray-400 px-1 pl-3" />
              </button>
              <button
                className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                type="button"
              >
                Status
                <CaretDownOutlined className=" text-sm pb-1 text-gray-400 pl-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start TransMbutton">
          <button
            className="bg-white border border-gray-300 py-1 rounded-lg w-28 shadow-md text-xs font-semibold"
            onClick={toggleDrop}
          >
            <CalendarOutlined className=" text-sm pb-1 text-gray-400 pr-2" />
            Month
            <CaretDownOutlined className=" text-sm pb-1 text-gray-400 px-2" />
          </button>
          {state.isDropOpen && (
            <div className="absolute mt-9 bg-white border border-gray-300 rounded-lg shadow-md w-28 flex flex-col items-center z-50 cursor-pointer pl-2">
              <ul className="max-h-20 overflow-y-auto text-xs pr-3 space-y-2">
                <li className="hover:bg-slate-300">January</li>
                <li className="hover:bg-slate-300">February</li>
                <li className="hover:bg-slate-300">March</li>
                <li className="hover:bg-slate-300">April</li>
                <li className="hover:bg-slate-300">May</li>
                <li className="hover:bg-slate-300">June</li>
                <li className="hover:bg-slate-300">July</li>
                <li className="hover:bg-slate-300">August</li>
                <li className="hover:bg-slate-300">September</li>
                <li className="hover:bg-slate-300">October</li>
                <li className="hover:bg-slate-300">November</li>
                <li className="hover:bg-slate-300">December</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TransHistory;

import React from "react";
import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
import p3 from "../Assets/3.jpg";
import str from "../Assets/star.jpg";
function Customers() {
  return (
    <div className="relative flex flex-col min-w-0 break-words">
      <div className="absolute block z-60 w-full overflow-x-auto">
        <table className="w-full">
          <thead className="text-sm bg-white text-normal text-gray-400">
            <tr className="border-b">
              <th className=" flex items-start font-normal">Customer</th>
              <th className=" font-normal">Status</th>
              <th className=" px-6 py-3 font-normal">Date</th>
              <th className=" px-6 py-3 font-normal">Invoice</th>
              <th className=" px-6 py-3 font-normal">People</th>
            </tr>
          </thead>
          <tbody>
            {/* Floyed Row */}
            <tr className="bg-white border-b">
              <div className="flex flex-row items-center gap-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={p1}
                      alt="Circular Img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={str}
                      alt="Star"
                      className="w-4 h-4 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>
                <th className=" flex flex-col py-4 font-medium text-gray-900 text-sm">
                  Floyed Johntosan
                  <p className="text-slate-500 text-xs cursor-pointer font-normal">
                    johntosan@gmail.com
                  </p>
                </th>
              </div>
              <td>
                <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
                  <span className="bg-green-500 w-1.5 h-1.5 rounded-full mx-1"></span>
                  <p className=" text-black font-normal text-xs mr-1">Success</p>
                </span>
              </td>
              <td className="px-6 py-6 text-black">Nov 02,2021</td>
              <td className="px-6 py-6">$100,00</td>
              <td className="pl-6">
                <div className="flex ml-auto">
                  <div className="flex -space-x-3 cursor-pointer">
                    <img
                      className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                      src={p1}
                      alt=""
                    />
                    <img
                      className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                      src={p2}
                      alt=""
                    />
                    <a
                      className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href=" "
                    >
                      +5
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            {/* Alisia Row */}
            <tr className="bg-white border-b py-5">
              <div className="flex flex-row items-center gap-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={p3}
                      alt="Circular Img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={str}
                      alt="Star"
                      className="w-4 h-4 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>
                <th className=" flex flex-col py-4 font-medium text-gray-900 text-sm">
                  Alisia Jones
                  <p className="text-slate-500 text-xs cursor-pointer font-normal">
                    johnalisia@gmail.com
                  </p>
                </th>
              </div>
              <td>
                <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
                  <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full mx-1"></span>
                  <p className="text-black font-normal text-xs mr-1">Pending</p>
                </span>
              </td>
              <td className="px-6 py-4 text-black">Nov 02,2021</td>
              <td className="px-6 py-4">$100,00</td>
              <td className="pl-6">
                <div className="flex ml-auto">
                  <div className="flex -space-x-3 cursor-pointer">
                    <img
                      className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                      src={p1}
                      alt=""
                    />
                    <img
                      className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                      src={p2}
                      alt=""
                    />
                    <a
                      className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href=" "
                    >
                      +5
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            {/* 3rd Blank Row */}
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;

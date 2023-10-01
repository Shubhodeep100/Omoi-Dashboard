import React from 'react'
import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
import p3 from "../Assets/3.jpg";
import str from "../Assets/star.jpg";
function Customers() {
  return (
    <div>
      <div className="flex flex-row items-center border-b border-gray-200 py-2 space-x-24">
        <div className="text-gray-500 text-sm mr-14">Customer</div>
        <div className="text-gray-500 text-xs">Status</div>
        <div className="text-gray-500 text-xs">Date</div>
        <div className="text-gray-500 text-xs">Invoice</div>
        <div className="text-gray-500 text-xs">People</div>
      </div>

      {/* Individual status section (Floyd) */}
      <div className="flex flex-row items-center border-b border-gray-200 py-5">
        <div className="mr-8">
          <div className="flex flex-row">
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

            <div className="flex flex-col pl-3">
              <p className="text-sm font-medium">Floyed Johntosan</p>
              <p className="text-slate-400 text-xs cursor-pointer">
                johntosan@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm pl-2">
          <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
            <span className="bg-green-500 w-1.5 h-1.5 rounded-full mx-1"></span>
            <p className="text-black font-medium text-xs ">Success</p>
          </span>
        </div>
        <div className="text-black text-sm px-10 ml-6">Nov 02, 2021</div>
        <div className="text-black text-sm">$100,00</div>
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
      </div>
      {/* Alisia Section */}
      <div className="flex flex-row items-center border-b border-gray-200 py-5">
        <div className="mr-8">
          <div className="flex flex-row">
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

            <div className="flex flex-col pl-3">
              <p className="text-sm font-medium">Alisia Jones</p>
              <p className="text-slate-400 text-xs cursor-pointer">
                jonesalia@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm pl-4">
          <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
            <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full mx-1"></span>
            <p className="text-black font-medium text-xs mr-1">Pending</p>
          </span>
        </div>
        <div className="text-black text-sm px-10 ml-5">Nov 02, 2021</div>
        <div className="text-black text-sm">$100,00</div>
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
            <img
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
              src={p3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers

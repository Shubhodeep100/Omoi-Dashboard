import React, { useState } from "react";
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";
import BelButton from "./BelButton";
import ControlTxt from "./ControlTxt";
import Calendar from "./Calendar";
import FinalEvents from "./FinalEvents";

function Rightside() {
  const [isRightSideOpen, setIsRightSideOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleRightsidebar = () => {
    setIsRightSideOpen(!isRightSideOpen);
  };

  return (
    <div className="relative">
      {/* Toggle button for mobile */}
      <button
        className="sticky sm:hidden top-20 right-8"
        onClick={toggleRightsidebar}
        aria-label="Toggle Sidebar"
      >
        {isRightSideOpen ? (
          <RightSquareOutlined className="text-lg" />
        ) : (
          <LeftSquareOutlined className="text-lg" />
        )}
      </button>

      {/* Right Sidebar */}
      {isRightSideOpen && (
        <section className="mr-4 RightSidebar bg-white h-screen w-72">
          <div className="flex flex-col">
            <BelButton />
            <ControlTxt />
            <Calendar />
            <FinalEvents />
          </div>
        </section>
      )}
    </div>
  );
}
export default Rightside;

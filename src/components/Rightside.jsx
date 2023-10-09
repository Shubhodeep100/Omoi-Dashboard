import {React} from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import BelButton from "./BelButton";
import ControlTxt from "./ControlTxt";
import Calendar from "./Calendar";
import FinalEvents from "./FinalEvents";

function Rightside({ openrightbarToggle, Openrightbar }) {
  // Function to toggle the sidebar

  return (
    <div id="sidebar" className={openrightbarToggle ? "responsive" : ""}>
      <section className="RightSidebar bg-white h-screen w-80">
        <RightCircleOutlined
          className="pl-2 text-2xl z-100 cursor-pointer lg:hidden"
          onClick={Openrightbar}
        />
        <div className="flex flex-col">
          <BelButton />
          <ControlTxt />
          <Calendar />
          <FinalEvents />
        </div>
      </section>
    </div>
  );
}
export default Rightside;

import {  React, useState } from "react";

import Rightside from "./components/Rightside";
import Leftside from "./components/Leftside";
import PurpleSlab from "./components/PurpleSlab";
import Greeting from "./components/Greeting";
import TotalSalesanalytics from "./components/TotalSalesanalytics";
import TransHistory from "./components/TransHistory";
import "./App.css";
import Customers from "./components/Customers";
function App() {
  const [openSidebarToggle, setopenSidebarToggle] = useState(false);
  const [openrightbarToggle, setopenrightbarToggle] = useState(false);

  // Function to send the sidebar back to its initial place
  const OpenSidebar = () => {
    setopenSidebarToggle(!openSidebarToggle); // Close the sidebar by setting state to false
  };

  const Openrightbar = () => {
    setopenrightbarToggle(!openrightbarToggle); // Close the sidebar by setting state to false
  };

  return (
    <div className="App">
      <main className="flex flex-row justify-between">
        <Leftside openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

        <div className="flex flex-col gap-6">
          <Greeting OpenSidebar={OpenSidebar} Openrightbar={Openrightbar} />
          <PurpleSlab />
          <TotalSalesanalytics />
          <TransHistory />
          <Customers />
        </div>

        <Rightside
          openrightbarToggle={openrightbarToggle}
          Openrightbar={Openrightbar}
        />
      </main>
    </div>
  );
}

export default App;

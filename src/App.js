import Rightside from "./components/Rightside";
import LeftSidebar from "./components/LeftSidebar";
import PurpleSlab from "./components/PurpleSlab";
import Greeting from "./components/Greeting";
import TotalSalesanalytics from "./components/TotalSalesanalytics";
import TransHistory from "./components/TransHistory";
// import Customers from "./components/Customers";
import "./App.css";
function App() {
  return (
    <div className="App">
      <main className="flex flex-row justify-between">
        <LeftSidebar />

        <div className="flex flex-col gap-6">
          <Greeting />
          <PurpleSlab />
          <TotalSalesanalytics />
          <TransHistory />
        </div>

        <Rightside />
      </main>
    </div>
  );
}

export default App;

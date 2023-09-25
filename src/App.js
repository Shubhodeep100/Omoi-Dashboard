import MainPage from "./components/MainPage";
import Rightside from "./components/Rightside";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="App">
      <main className="flex flex-row">
        <LeftSidebar />
        <MainPage />
        <Rightside />
      </main>
    </div>
  );
}

export default App;

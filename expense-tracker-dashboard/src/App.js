import "./App.css";

import "../src/Components/Css/Main.css";

import Sidebar from "./Components/SideBar/Sidebar";
import Overview from "./Components/Overview/Overview";
import Main from "./Components/MainContainer/Main";

function App() {
  return (
    <>
      <Sidebar />
      <div class="container">
        <Overview />
        <Main />
      </div>
    </>
  );
}

export default App;

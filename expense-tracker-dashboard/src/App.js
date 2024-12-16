import "./App.css";

import "../src/Components/Css/Main.css";

import Sidebar from "./Components/SideBar/Sidebar";

import Main from "./Components/MainContainer/Main";



function App() {
  return (
    <>
      <Sidebar />
      <div class="container">
        <Main />
      </div>
    </>
  );
}

export default App;

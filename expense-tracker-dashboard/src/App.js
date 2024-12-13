import "./App.css";

import "../src/Components/Css/Main.css";

import Sidebar from "./Components/SideBar/Sidebar";
import Overview from "./Components/Overview/Overview";
import Main from "./Components/MainContainer/Main";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";

function App() {
  return (
    <>
      <Sidebar />
      <div class="container">
        <Overview />
        <Main />
        {/* <ExpenseForm /> */}
      </div>
    </>
  );
}

export default App;

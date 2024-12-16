import "./App.css";



import "../src/Components/Css/Main.css";

import Sidebar from "./Components/SideBar/Sidebar";

import Main from "./Components/MainContainer/Main";



import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";

function App() {
  return (
    <>
      <Sidebar />
      <div class="container">
        {/* < Main /> */}
        <ExpenseForm />
      </div >
    </>
  );
}

export default App;

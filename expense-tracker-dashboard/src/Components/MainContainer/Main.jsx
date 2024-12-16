import React from "react";

import "./Main.css";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";
import RouterPage from "../Router/RouterPage";

function Main() {
  return (
    <>
      {" "}
      <div className="main">
        <RouterPage />
        <div className="main-right">
          <ExpenseCategory />
        </div>
      </div>
    </>
  );
}

export default Main;

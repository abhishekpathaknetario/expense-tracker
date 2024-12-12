import React from "react";
import RecentAdded from "../RecentAdded/RecentAdded";
import "./Main.css";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";
function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <RecentAdded />
      </div>
      <div className="main-right">
        <ExpenseCategory />
      </div>
    </div>
  );
}

export default Main;

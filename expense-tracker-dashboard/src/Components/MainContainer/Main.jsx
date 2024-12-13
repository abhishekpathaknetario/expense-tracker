import React from "react";
import RecentAdded from "../RecentAdded/RecentAdded";
import "./Main.css";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";
import OverviewCards from "../OverViewCards/OverviewCards";
import AddSection from "../AddSection/AddSection";
import Table from "../Table/Table";



function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <RecentAdded />
        <div>
          <OverviewCards />
        </div>
        <AddSection />
        <Table />
      </div>
      <div className="main-right">
        <ExpenseCategory />
      </div>
    </div>
  );
}

export default Main;

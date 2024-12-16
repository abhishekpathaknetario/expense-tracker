import React from "react";

import "./ExpenseCategory.css";

function ExpenseCategory({ onSelectData }) {
  return (
    <div>
      <aside>
        <p>Expense Category</p>
        <button onClick={() => onSelectData("overview")}>OverView</button>
        <button onClick={() => onSelectData("data1")}>Salary</button>
        <button onClick={() => onSelectData("data3")}>
          Transportation Costs
        </button>
        <button onClick={() => onSelectData("data4")}>
          Maintenance Repairs
        </button>
        <button onClick={() => onSelectData("data5")}>Rent</button>
        <button onClick={() => onSelectData("data6")}>
          Marketing and Advertising
        </button>
        <button onClick={() => onSelectData("data7")}>Stationary</button>
        <button onClick={() => onSelectData("data8")}>Utility Bills</button>
        <button onClick={() => onSelectData("data9")}>Welfare</button>
        <button onClick={() => onSelectData("data10")}>Miscellaneous</button>
      </aside>
    </div>
  );
}

export default ExpenseCategory;

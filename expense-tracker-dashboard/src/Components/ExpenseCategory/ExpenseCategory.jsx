import React from "react";

import "./ExpenseCategory.css";
import { Outlet, Link } from "react-router-dom";

function ExpenseCategory() {
  return (
    <div>
      <aside>
        <p>Expense Category</p>

        <button>Overview</button>

        <button>Employee Salary</button>

        <button>Transportation Costs</button>

        <button>Maintenance Repairs</button>

        <button>Rent</button>

        <button>Marketing and Advertising</button>

        <button>Stationary</button>

        <button>Utility Bills</button>

        <button>Welfare</button>

        <button>Miscellaneous</button>
      </aside>
    </div>
  );
}

export default ExpenseCategory;

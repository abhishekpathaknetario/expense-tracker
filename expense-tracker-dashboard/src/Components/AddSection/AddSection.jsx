import React from "react";
import "./AddSection.css";

import pdf from "../../Assets/Expense/pdf.png";

function AddSection() {
  return (
    <div className="AddContainer">
      <p>
        Total: <b>23,000</b>
      </p>

      <div>
        <button>+ Add Expense</button>
        <img src={pdf} alt="" />
      </div>
    </div>
  );
}

export default AddSection;

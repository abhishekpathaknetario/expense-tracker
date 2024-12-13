import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [formData, setFormData] = useState({
    Type: "",
    Expence: "",
    Date: "",
    Phone: "",
    Email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data has been saved to local storage!");
  };

  return (
    <div>
      <div className="FormBack">
        <button>
          <FaArrowLeft />
        </button>
        ExpenseForm
      </div>

      <div className="expense_details">
        <p>Fill Expense details</p>

        <form onSubmit={handleSubmit}>
          <span>
            <p>Choose Expense Type</p>
            <select id="cars">
              <option value="" selected></option>
              <option value="Fare">Fare</option>
              <option value="volvo">Maintenence</option>
              <option value="saab">Misceleneous</option>
              <option value="opel">Service</option>
              <option value="audi">Food</option>
            </select>
          </span>
          <span>
            <p>Expence/Price</p>
            <input
              type="text"
              name="name"
              placeholder="Enter cn number"
              value={formData.name}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Date</p>
            <input
              type="text"
              name="date"
              placeholder="--/--/--"
              value={formData.name}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Phone</p>
            <input
              type="text"
              placeholder="Enter phone no."
              name="number"
              value={formData.name}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter Your Mail"
              name="mail"
              value={formData.name}
              onChange={handleChange}
            />
          </span>
        </form>
      </div>

      <div className="narration">
        <p>Narration</p>

        <form action="">
          <div>
            <span>
              <p>Short narration</p>
              <input
                type="text"
                name="narration"
                value={formData.name}
                onChange={handleChange}
              />
            </span>
            <span>
              <p>Long narration</p>
              <input
                type="text"
                name="lg_narration"
                value={formData.name}
                onChange={handleChange}
              />
            </span>
          </div>

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;

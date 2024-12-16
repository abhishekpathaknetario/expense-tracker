import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    date: "",
    phone: "",
    email: "",
    stNarr: "",
    lgNarr: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

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
            <select id="options" value={formData.type} onChange={handleChange}>
              <option value="">-- Select an option --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </span>
          <span>
            <p>Expence/Price</p>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Date</p>
            <input
              type="text"
              name="date"
              placeholder="--/--/--"
              value={formData.date}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Phone</p>
            <input
              type="text"
              placeholder="Enter phone no."
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </span>
          <span>
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter Your Mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </span>
        </form>
      </div>

      <div className="narration">
        <p>Narration</p>

        <form onSubmit={handleSubmit}>
          <div>
            <span>
              <p>Short narration</p>
              <input
                type="text"
                name="stNarr"
                value={formData.stNarr}
                onChange={handleChange}
              />
            </span>
            <span>
              <p>Long narration</p>
              <input
                type="text"
                name="lgNarr"
                value={formData.lgNarr}
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

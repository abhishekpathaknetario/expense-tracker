import { IoMenuSharp } from "react-icons/io5";
import React, { useState } from "react";
import "./Sidebar.css"; // Import your styles here

import f1 from "../../Assets/Expense/f9.png";
import f2 from "../../Assets/Expense/f8.png";
import f3 from "../../Assets/Expense/f7.png";
import f4 from "../../Assets/Expense/f1.png";
import f5 from "../../Assets/Expense/f11.png";
import f6 from "../../Assets/Expense/f12.png";
import f7 from "../../Assets/Expense/f6.png";
import f8 from "../../Assets/Expense/f4.png";
import f9 from "../../Assets/Expense/f3.png";
import f10 from "../../Assets/Expense/f10.png";
import f11 from "../../Assets/Expense/f5.png";
import f12 from "../../Assets/Expense/f2.png";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="header">
        <div
          className="display-flex"
          style={{ fontSize: "1.5rem", width: "130px" }}
        >
          {" "}
          <IoMenuSharp style={{ cursor: "pointer" }} onClick={toggleClass} />
          <p>Expense</p>
        </div>
      </div>

      <div>
        {/* Side Navigation */}
        <div
          id="mySidenav"
          className="sidenav"
          style={{
            width: isActive ? "250px" : "0",
            transition: "0.3s",
          }}
        >
          <button href="#">
            {" "}
            <span>
              <img src={f1} alt="" />
            </span>{" "}
            Sales
          </button>
          <button href="#">
            <span>
              <img src={f2} alt="" />
            </span>{" "}
            Purchase
          </button>
          <button href="#">
            <span>
              <img src={f3} alt="" />
            </span>{" "}
            Supplier
          </button>
          <button href="#">
            <span>
              <img src={f4} alt="" />
            </span>{" "}
            Product
          </button>
          <button href="#">
            <span>
              <img src={f5} alt="" />
            </span>{" "}
            Customer
          </button>
          <button href="#">
            <span>
              <img src={f6} alt="" />
            </span>{" "}
            Tax
          </button>
          <button href="#">
            <span>
              <img src={f7} alt="" />
            </span>{" "}
            Distributer
          </button>
          <button href="#">
            <span>
              <img src={f8} alt="" />
            </span>{" "}
            Stock
          </button>
          <button href="#">
            <span>
              <img src={f9} alt="" />
            </span>{" "}
            Profit
          </button>
          <button href="#">
            <span>
              <img src={f10} alt="" />
            </span>{" "}
            Profile
          </button>
          <button href="#">
            <span>
              <img src={f11} alt="" />
            </span>{" "}
            Expense
          </button>
          <button href="#">
            <span>
              <img src={f12} alt="" />
            </span>{" "}
            Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./OverViewCards.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiBillFill } from "react-icons/ri";
import { PiCubeTransparent } from "react-icons/pi";

function OverviewCards() {
  return (
    <div className="card-container">
      <div>
        <b>₹4,55,000</b>
        <p>
          <span>
            <MdOutlineShoppingCart />
          </span>{" "}
          Total Expense
        </p>
      </div>
      <div>
        <b>₹ 5,000</b>
        <p>
          <span>
            <GiReceiveMoney />
          </span>
          Salary
          <i>30%</i>
        </p>
      </div>{" "}
      <div>
        <b>₹ 2,000</b>
        <p>
          <span>
            <RiBillFill />
          </span>
          Bills
          <i>60%</i>
        </p>
      </div>{" "}
      <div>
        <b>₹45,000</b>
        <p>
          <span>
            {" "}
            <PiCubeTransparent />
          </span>
          Rent
          <i>10%</i>
        </p>
      </div>
    </div>
  );
}

export default OverviewCards;

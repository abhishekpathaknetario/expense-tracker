import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Overview.css";
import { FaSearch } from "react-icons/fa";

function Overview() {
  return (
    <div>
      <div className="over-view-container">
        <div className="right">
          <button>
            <FaArrowLeft />
          </button>
          <p>Overview</p>
        </div>

        <div className="left">
          <input type="date" />

          <span className="search_bar">
            <input type="text" placeholder="Search" />
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Overview;

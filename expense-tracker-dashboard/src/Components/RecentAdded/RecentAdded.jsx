import React from "react";
import "./RecentAdded.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";

function RecentAdded() {
  return (
    <div className="recent-added">
      <p>Recent Added Stock Details</p>
      <div className="filter-area">
        <span>
          <FaArrowRightArrowLeft style={{ rotate: "90deg" }} />
          Sort
        </span>
        <span>
          <IoFilterSharp />
          Filter
        </span>
      </div>
    </div>
  );
}

export default RecentAdded;

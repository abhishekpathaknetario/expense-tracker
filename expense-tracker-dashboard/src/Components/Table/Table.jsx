import React, { useEffect, useState } from "react";
import "./TableStyle.css";

import data from "../../JsonData/MiscellaneousBills.json";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Table() {
  const [bills, setBills] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setBills(data.miscellaneousBills);
  }, []);

  const handleClick = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(bills.length / itemsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBills = bills.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Date</th>
            <th>Expense Type</th>
            <th>Sht. Nara</th>
            <th>Long. Nara</th>
            <th>Expense</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBills.map((bill, index) => (
            <tr key={bill.id}>
              <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
              <td>{bill.details.dueDate}</td>
              <td>{bill.billName}</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>₹{bill.expense}</td>
              <td>
                <b>...</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-bottom">
        <button
          onClick={() => handleClick("prev")}
          disabled={currentPage === 1}
        >
          <FaLongArrowAltLeft /> Previous
        </button>

        <div className="pager">
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(bills.length / itemsPerPage) },
              (_, index) => (
                <b
                  key={index + 1}
                  href="#"
                  className={index + 1 === currentPage ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </b>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => handleClick("next")}
          disabled={currentPage === Math.ceil(bills.length / itemsPerPage)}
        >
          Next <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default Table;

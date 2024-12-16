import React, { useEffect, useState } from "react";
import "./Salary.css";

import data from "../../../JsonData/SalaryList.json";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function SalaryList() {
  const [employee, setEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setEmployee(data.employees);
  }, []);

  const handleClick = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(employee.length / itemsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = employee.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Employee Name</th>
              <th>Destination</th>
              <th>(₹)L.I.Value</th>
              <th>L.I.Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Department</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>₹{employee.LiValue}</td>
                <td>{employee.LiDate}</td>
                <td>{employee.details.phone}</td>
                <td>{employee.details.email}</td>
                <td>{employee.details.department}</td>
                <td>{employee.details.location}</td>
                <td>
                  <b>...</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
              { length: Math.ceil(employee.length / itemsPerPage) },
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
          disabled={currentPage === Math.ceil(employee.length / itemsPerPage)}
        >
          Next <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default SalaryList;

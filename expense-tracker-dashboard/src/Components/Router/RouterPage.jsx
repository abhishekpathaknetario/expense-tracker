import React, { useState, useEffect } from "react";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";
import SalaryList from "../Table/SalaryList/SalaryList";
import "../MainContainer/Main.css";
import Overview from "../Overview/Overview";
import Common from "../Table/Common";

import Transportaion from "../../JsonData/Transport.json";
import Repair from "../../JsonData/Maintenence.json";
import Rent from "../../JsonData/Rent.json";
import Serv from "../../JsonData/Service.json";
import Stationary from "../../JsonData/Stationery.json";
import Utility from "../../JsonData/UtilityBills.json";
import Welfare from "../../JsonData/WelfareBills.json";
import Miscellneous from "../../JsonData/MiscellaneousBills.json";

// Define your components to render

function RouterPage() {
  let data;

  const [selectedData, setSelectedData] = useState(null);

  const [tableType, setTableType] = useState("overview");

  const handleSelectData = (dataType) => {
    // Dynamically select the appropriate data based on button clicked

    switch (dataType) {
      case "overview":
        setTableType("overview");
        break;
      case "data1":
        setTableType("salary");
        break;
      case "data2":
        data = Transportaion;
        setTableType("transportaion");
        break;
      case "data3":
        data = Repair;
        setTableType("repair");
        break;
      case "data4":
        data = Rent;
        setTableType("rent");
        break;
      case "data5":
        data = Serv;
        setTableType("serv");
        break;
      case "data6":
        data = Stationary;
        setTableType("stationary");
        break;
      case "data7":
        data = Utility;
        setTableType("utility");
        break;
      case "data8":
        data = Welfare;
        setTableType("welfare");
        break;
      case "data9":
        data = Miscellneous;
        setTableType("miscellneous");
        break;
      default:
        data = [12, 12];
    }
    setSelectedData(data);
  };

  const renderComponent = () => {
    switch (tableType) {
      case "overview":
        return <Overview />;
      case "salary":
        return <SalaryList />;
      case "transportation":
        return <Common data={selectedData} />;
      case "repair":
        return <Common data={selectedData} />;
      case "rent":
        return <Common data={selectedData} />;
      case "serv":
        return <Common data={selectedData} />;
      case "stationary":
        return <Common data={selectedData} />;
      case "utility":
        return <Common data={selectedData} />;
      case "welfare":
        return <Common data={selectedData} />;
      case "misci":
        return <Common data={selectedData} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <div className="main">
        <div className="main-left">{renderComponent()}</div>
        <div className="main-right">
          <ExpenseCategory onSelectData={handleSelectData} />
        </div>
      </div>
    </div>
  );
}

export default RouterPage;

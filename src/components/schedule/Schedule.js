import React from "react";
import "./Schedule.css";
import { Calendar, Badge } from "antd";
import Sidebar from "./../sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

//============= Calendar FUNCTIONS =============//
// Day/Month View
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 20:
      listData = [
        { type: "warning", content: "React 101" },
        { type: "success", content: "Python 101" },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

// Month/Year View
function getMonthData(value) {
  if (value.month() === 8) {
    return 2;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Events</span>
    </div>
  ) : null;
}

// Calendar Class Component
const Schedule = () => {
  return (
    <Router>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      <Sidebar />
    </Router>
  );
};

export default Schedule;

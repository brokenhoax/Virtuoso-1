import React from "react";
import "./Schedule.css";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

const Schedule = () => {
  return (
    <div className="main boom">
      <Calendar />
    </div>
  );
};

export default Schedule;

import React from "react";
import "./Calendar.css";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

const Test = () => {
  return (
    <div className="main">
      <Calendar />
    </div>
  );
};

export default Test;

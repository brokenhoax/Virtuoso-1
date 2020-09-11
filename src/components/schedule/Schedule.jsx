import React from "react";
import "./Schedule.css";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import { INITIAL_EVENTS } from "./event-utils";
// import events from "./event-utils";

class Schedule extends React.Component {
  render() {
    return (
      <FullCalendar
        initialView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        // alternatively, use the `events` setting to fetch from a feed
        initialEvents={INITIAL_EVENTS}
        // events={events}
      />
    );
  }
}

export default Schedule;

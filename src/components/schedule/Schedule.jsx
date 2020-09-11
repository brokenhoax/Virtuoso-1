import React from "react";
import styles from "./Schedule.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Sidebar from "../sidebar/Sidebar";

import { BrowserRouter as Router } from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { INITIAL_EVENTS } from "./event-utils";
// import events from "./event-utils";

// var calendar = new Calendar(calendarEl, {
//   schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
// });

class Schedule extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles.mainContainer}>
          <FullCalendar
            timeZone="CST"
            themeSystem="bootstrap"
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            weekNumbers={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS}
            // alternatively, use `events` setting to fetch from a feed
            // events={events}
          />
        </div>
        <Sidebar />
      </Router>
    );
  }
}

export default Schedule;

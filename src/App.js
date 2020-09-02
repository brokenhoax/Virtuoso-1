import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import Calendar from "./components/calendar/Calendar";
import Webinars from "./components/webinars/Webinars";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App grid-container">
        <Logo />
        <Topbar />
        <Navbar />
        <Route path="/" exact component={Webinars} />
        <Route path="/stats" component={Stats} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/calendar" component={Sidebar} />
        <Route path="/webinars" component={Webinars} />
      </div>
    </Router>
  );
};

export default App;

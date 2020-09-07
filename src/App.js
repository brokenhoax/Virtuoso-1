import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Logo from "./components/logo/Logo";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";
import Schedule from "./components/schedule/Schedule";
import Webinars from "./components/webinars/Webinars";
import Profile from "./components/profile/Profile";
import PageNotFound from "./components/error/Error";

const App = () => {
  return (
    <div className="App grid-container">
      <Router>
        <Logo />
        <Topbar />
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Schedule} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route path="/webinars" exact={true} component={Webinars} />
          <Route path="/stats" exact={true} component={Stats} />
        </Switch>
        <Route path="/schedule" component={Sidebar} />
        <Route path="/schedule" component={Schedule} />
        <Redirect from="*" to="/404" />
        <Route path="/404" component={PageNotFound} />
      </Router>
    </div>
  );
};

export default App;

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
import Home from "./components/home/Home";
import Stats from "./components/stats/Stats";
import Schedule from "./components/schedule/Schedule";
import Webinars from "./components/webinars/Webinars";
import Profile from "./components/profile/Profile";
import PageNotFound from "./components/error/Error";

const App = () => {
  return (
    <div className="grid-container">
      <Router>
        <Logo />
        <Topbar />
        <Navbar />
        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route
            path="/webinars"
            exact={true}
            component={Webinars}
            className="webinars"
          />
          <Route path="/stats" exact={true} component={Stats} />
          <Route path="/schedule" exact={true} component={Schedule} />
          <Route path="/404" component={PageNotFound} />
          <Redirect from="/" to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

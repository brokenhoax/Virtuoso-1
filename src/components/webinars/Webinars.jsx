import React, { Component } from "react";
import Cards from "../cards/Cards";
import styles from "./Webinars.module.css";
import searchStyle from "../search/Search.module.css";
import Search from "../search/Search";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Webinars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webinars: [],
      search: [],
      header: "Upcoming Webinars",
    };
  }

  async componentDidMount() {
    await axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const webinars = res.data.data;
        console.log(webinars);
        this.setState({ webinars });
      });
  }

  searchChanged = (event) => {
    console.log("webinar.jsx searchChanged", event.target.value);
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <Router>
        <Cards
          className={styles.webinars}
          webinars={this.state.webinars}
          search={this.state.search}
          header={this.state.header}
        />
        <Search
          className={searchStyle.test}
          searchChanged={this.searchChanged}
          search={this.state.search}
        />
      </Router>
    );
  }
}

export default Webinars;

import React, { Component } from "react";
import Cards from "../cards/Cards";
import styles from "./Favorites.module.css";
import searchStyle from "../search/Search.module.css";
import Search from "../search/Search";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "5f5d0a933ff9981734ab95a3",
      webinars: [],
      search: [],
      header: "Favorites",
    };
  }

  async componentDidMount() {
    let FavoriteURL = `https://salty-fortress-9010-virt-b.herokuapp.com/user/${this.state.userID}/webinar/favorite`;

    await axios.get(FavoriteURL).then((res) => {
      const webinars = res.data.data.favorite;
      console.log(webinars);
      this.setState({ webinars });
    });
  }

  // First, we need get users favorites webinars
  // Then we need retreive those webinars from webinar database

  searchChanged = (event) => {
    console.log("Hi! From: onChange", event.target.value);
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
          favorites={this.state.favorites}
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

export default Favorites;

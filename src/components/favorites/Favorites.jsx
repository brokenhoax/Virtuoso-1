import React, { useContext } from "react";
import Cards from "../cards/Cards";
import styles from "./Favorites.module.css";
import searchStyle from "../search/Search.module.css";
import Search from "../search/Search";
import { BrowserRouter as Router } from "react-router-dom";

function Favorites() {
  // const searchChanged = (event) => {
  //   console.log("Hi! From: onChange", event.target.value);
  //   useState({
  //     search: event.target.value,
  //   });
  // };

  return (
    <Router>
      <Cards className={styles.webinars} header={"Favorites"} />
      {/* <Search
        className={searchStyle.test}
        searchChanged={this.searchChanged}
        search={this.state.search}
      /> */}
    </Router>
  );
}

export default Favorites;

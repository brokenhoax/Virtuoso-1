import React, { Component } from "react";
import styles from "./Topbar.module.css";
import Search from "../search/Search";

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Search />
      </div>
    );
  }
}

export default Topbar;

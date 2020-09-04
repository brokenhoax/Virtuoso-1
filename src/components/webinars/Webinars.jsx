import React, { Component } from "react";
import Cards from "../cards/Cards";
import styles from "./Webinars.module.css";

class Webinars extends Component {
  render() {
    return <Cards className={styles.webinars} />;
  }
}

export default Webinars;

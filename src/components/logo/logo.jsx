import React, { Component } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link to="/" className={styles.logo}>
        V
      </Link>
    );
  }
}

export default Logo;

import React, { Component } from "react";
import styles from "./Logo.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Router>
        <Link to="/" className={styles.logo}>
          V
        </Link>
      </Router>
    );
  }
}

export default Logo;

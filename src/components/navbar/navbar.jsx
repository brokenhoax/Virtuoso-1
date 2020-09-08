import React, { Component } from "react";
import { BrowserRouter as Navlink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <section className={styles.navi}>
        <div className={styles.navWrapper}>
          <Link className={styles.navLink} to="/profile">
            <div className={styles.navContainer}>
              <FontAwesomeIcon
                className={styles.navLink}
                icon={faUser}
                size="2x"
              />
            </div>
          </Link>{" "}
          <Link className={styles.navLink} to="/webinars">
            <div className={styles.navContainer}>
              <FontAwesomeIcon
                className={styles.navLink}
                icon={faUsers}
                size="2x"
              />
            </div>
          </Link>{" "}
          <Link className={styles.navLink} to="/schedule">
            <div className={styles.navContainer}>
              <FontAwesomeIcon
                className={styles.navLink}
                icon={faCalendarAlt}
                size="2x"
              />
            </div>
          </Link>{" "}
          <Link className={styles.navLink} to="/create">
            <div className={styles.navContainer}>
              <FontAwesomeIcon
                className={styles.navLink}
                icon={faVideo}
                size="2x"
              />
            </div>
          </Link>{" "}
          <Link className={styles.navLink} to="/stats">
            <div className={styles.navContainer}>
              <FontAwesomeIcon
                className={styles.navLink}
                icon={faChartPie}
                size="2x"
              />
            </div>
          </Link>{" "}
        </div>
      </section>
    );
  }
}

export default Navbar;

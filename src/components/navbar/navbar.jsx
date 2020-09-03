import React, { Component } from "react";
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
      <section className={styles.navContainer}>
        <ul class={styles.navList}>
          <li className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faUser}
              size="lg"
            />
          </li>
          <li className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faUsers}
              size="lg"
            />
          </li>
          <li className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faCalendarAlt}
              size="lg"
            />
          </li>
          <li className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faVideo}
              size="lg"
            />
          </li>
          <li className={styles.navi}>
            <FontAwesomeIcon
              className={styles.navLink}
              icon={faChartPie}
              size="lg"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default Navbar;

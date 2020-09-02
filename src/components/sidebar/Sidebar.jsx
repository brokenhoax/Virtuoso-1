import React, { useState } from "react";
import CountHours from "../charts/countHours/CountHours";
import CountWebinars from "../charts/countWebinars/CountWebinars";
import Genre from "../charts/genre/Genre";
import Skill from "../charts/skill/Skill";
import Presenter from "../charts/presenter/Presenter";
import styles from "./Sidebar.module.css";
// import styles from "./test.css";

const Sidebar = () => {
  return (
    <div className={styles.sideContainer}>
      <CountWebinars
        chart={styles.chart}
        chartHeader={styles.chartHeader}
        totalWeb={styles.totalWeb}
        webinars={styles.webinars}
      />
      <CountHours
        chart={styles.chart}
        chartHeader={styles.chartHeader}
        totalHours={styles.totalHours}
        hours={styles.hours}
      />
      <Genre
        chart={styles.chart}
        chartHeader={styles.chartHeader}
        genre={styles.genre}
      />
      <Skill
        chart={styles.chart}
        chartHeader={styles.chartHeader}
        skill={styles.skill}
      />
      <Presenter
        chart={styles.chart}
        chartHeader={styles.chartHeader}
        presenter={styles.presenter}
      />
    </div>
  );
};

export default Sidebar;

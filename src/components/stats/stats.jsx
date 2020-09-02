import React, { Component } from "react";
import styles from "./Stats.module.css";
import CountHours from "../charts/countHours/CountHours";
import CountWebinars from "../charts/countWebinars/CountWebinars";
import Timeline from "../charts/timeline/Timeline";
import Genre from "../charts/genre/Genre";
import Presenter from "../charts/presenter/Presenter";
import Skill from "../charts/skill/Skill";

class Stats extends Component {
  state = {
    display: true,
    position: "right",
  };

  render() {
    return (
      <div className={styles.chartContainer}>
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
        <Timeline
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          timeline={styles.timeline}
        />
        <Genre
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          genre={styles.genre}
          display={this.state.display}
          position={this.state.position}
        />
        <Presenter
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          presenter={styles.presenter}
        />
        <Skill
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          skill={styles.skill}
          display={this.state.display}
          position={this.state.position}
        />
      </div>
    );
  }
}

export default Stats;

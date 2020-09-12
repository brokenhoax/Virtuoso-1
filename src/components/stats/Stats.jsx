import React, { Component } from "react";
import styles from "./Stats.module.css";
import CountHours from "../charts/countHours/CountHours";
import CountWebinars from "../charts/countWebinars/CountWebinars";
import Timeline from "../charts/timeline/Timeline";
import Genre from "../charts/genre/Genre";
import Presenter from "../charts/presenter/Presenter";
import Skill from "../charts/skill/Skill";
import axios from "axios";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      displayTicks: true,
      position: "right",
      webinarArray: [],
      sumHours: "",
      sumWebinars: "",
      genreArray: [],
      topicFrequency: {},
    };
  }

  async componentDidMount() {
    await this.webinarArray();
    await this.sumHours();
    await this.sumWebinars();
    await this.genreArray();
    await this.genreFrequency();
  }

  async webinarArray() {
    await axios
      .get("https://salty-fortress-9010-virt-b.herokuapp.com/webinar/get/all")
      .then((res) => {
        const array = res.data.data;
        const webinarArray = [];
        let i = "";
        for (i = 0; i < array.length; i++) {
          webinarArray.push(array[i].date.duration);
        }
        console.log("webArray: " + webinarArray);
        this.setState({ webinarArray });
      });
  }

  sumHours() {
    let newArray = this.state.webinarArray;
    console.log("sumHoursArray: " + newArray);
    let sumMinutes = 0;
    for (let n of newArray) sumMinutes += n;
    let sumHours = sumMinutes / 60;
    console.log("Webinar Duration Sum: " + sumHours);
    this.setState({ sumHours });
  }

  sumWebinars() {
    let newArray = this.state.webinarArray;
    console.log("sumWebinarsArray: " + newArray);
    let sumWebinars = newArray.length;
    console.log("sumWebinarArray: " + sumWebinars);
    this.setState({ sumWebinars });
  }

  // First build an array of Main Topics
  //https://www.tutorialspoint.com/looping-through-and-getting-frequency-of-all-the-elements-in-an-array-javascript

  async genreArray() {
    await axios.get("http://localhost:3000/webinar/get/all").then((res) => {
      const array = res.data.data;
      const genreArray = [];
      let i = "";
      for (i = 0; i < array.length; i++) {
        genreArray.push(array[i].mainTopic);
      }
      console.log("genreArray: " + genreArray);
      this.setState({ genreArray });
    });
  }

  // Then Use For Each to Create Frequency Object

  genreFrequency = () => {
    const array = this.state.genreArray;
    const topicFrequency = {};
    array.forEach((item) => {
      if (topicFrequency[item]) {
        topicFrequency[item]++;
      } else {
        topicFrequency[item] = 1;
      }
      return topicFrequency;
    });
    console.log("Topic Frequency object: " + JSON.stringify(topicFrequency));
    this.setState({ topicFrequency });
  };

  render() {
    return (
      <div className={styles.chartContainer}>
        <CountWebinars
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          totalWeb={styles.totalWeb}
          webinars={styles.webinars}
          sumWebinars={this.state.sumWebinars}
        />
        <CountHours
          chart={styles.chart}
          chartHeader={styles.chartHeader}
          totalHours={styles.totalHours}
          hours={styles.hours}
          sumHours={this.state.sumHours}
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
          displayTicks={this.state.displayTicks}
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

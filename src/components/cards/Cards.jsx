// import React from "react";
import React, { Component } from "react";
import axios from "axios";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";

class Cards extends Component {
  state = {
    webinars: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/webinar/get/all").then((res) => {
      const webinars = res.data.data;
      console.log(webinars);
      this.setState({ webinars });
    });
  }

  // Logic to Change Image
  getImage(photo) {
    console.log("PHOTO: " + photo);
    if (photo === "JavaScript") {
      return (photo = "assets/images/javascript.png");
    }

    if (photo === "React") {
      return (photo = "assets/images/react.jpg");
    }

    if (photo === "Heroku") {
      return (photo = "assets/images/heroku.png");
    }

    if (photo === "MongoDb") {
      return (photo = "assets/images/mongo.png");
    }

    if (photo === "HTML") {
      return (photo = "assets/images/html.png");
    }
  }

  render() {
    return (
      <div className={styles.cards}>
        <h1 className={styles.cards__title}>Upcoming Webinars</h1>
        <div className={styles.cards__container}>
          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              {this.state.webinars.map((webinar) => (
                <CardItem
                  key={webinar._id}
                  src={this.getImage(webinar.mainTopic)}
                  title={webinar.title}
                  skill={"Level: " + webinar.skillLevel}
                  date={
                    "Date: " +
                    webinar.date.month +
                    "-" +
                    webinar.date.day +
                    "-" +
                    webinar.date.year
                  }
                  time={"Time: " + webinar.date.startTime}
                  duration={"Duration: " + webinar.date.duration}
                  topic={"Topic: " + webinar.mainTopic}
                  label="JavaScript"
                  path="/webinars"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

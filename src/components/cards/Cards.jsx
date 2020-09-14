// import React from "react";
import React, { Component } from "react";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";

class Cards extends Component {
  // Logic to Change Image
  state = {
    favorite: false,
  };

  getImage(photo) {
    console.log("PHOTO: " + photo);
    if (photo === "JavaScript") {
      return (photo = "assets/images/JavaScript.png");
    }

    if (photo === "React") {
      return (photo = "assets/images/React.jpg");
    }

    if (photo === "Python") {
      return (photo = "assets/images/Python.jpg");
    }

    if (photo === "MongoDB") {
      return (photo = "assets/images/MongoDB.png");
    }

    if (photo === "Node JS") {
      return (photo = "assets/images/Node JS.png");
    }

    if (photo === "Angular") {
      return (photo = "assets/images/Angular.jpg");
    }
  }

  render() {
    return (
      <div className={styles.cards}>
        <h1 className={styles.cards__title}>{this.props.header}</h1>
        <div className={styles.cards__container}>
          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              {this.props.webinars
                .filter((webinar) =>
                  webinar.mainTopic.includes(this.props.search)
                )
                .map((webinar) => (
                  <CardItem
                    key={webinar._id}
                    favorite={this.state.favorite}
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

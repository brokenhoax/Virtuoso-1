// import React from "react";
import React, { Component } from "react";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";
import axios from "axios";

class Cards extends Component {
  // Logic to Change Image
  state = {
    favorite: "5f5eab5fb441a118800658a7",
    userID: "5f5eab5db441a11880065897",
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

  getTime(time) {
    var res = time.substring(time.length - 8, time.length);
    console.log("Is this the time?" + res);
    return res;
  }

  async handleLike(newfav, user) {
    console.log("This is the new Favorite =>:" + newfav);
    try {
      let LikeURL = `https://salty-fortress-9010-virt-b.herokuapp.com/user/update/${user}`;
      const response = await axios.patch(LikeURL, {
        $push: { favorite: newfav },
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }

  // handleLike = (webinars) => {
  //   const webinars = [...this.props.webinars];
  //   const index = webinars.indexOf(webinar);
  //   webinars[index] = { ...webinars[index] };
  //   console.log("what is this shit? => " + webinars[index]);
  //   webinars[index].liked = !webinars[index].liked;
  //   this.setState({ webinars });
  // };

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
                    userID={this.state.userID}
                    handleLike={this.handleLike}
                    src={this.getImage(webinar.mainTopic)}
                    title={webinar.title}
                    skill={" Skill: " + webinar.skillLevel}
                    time={" Time: " + this.getTime(webinar.date.event.start)}
                    duration={" Length: " + webinar.date.duration + " minutes"}
                    topic={" Topic: " + webinar.mainTopic}
                    link={webinar.video.url}
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

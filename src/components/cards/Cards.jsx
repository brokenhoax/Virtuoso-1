// import React from "react";
import React from "react";
import { useWebinar } from "../../utils/WebinarContext";
import { useUser } from "../../utils/UserContext";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";
import axios from "axios";

const Cards = (props) => {
  // Using Webinar Context
  const webinarContext = useWebinar();
  const webinars = webinarContext;

  // Using User Context
  const userContext = useUser();
  const user = userContext;

  // Logic to Change Image
  function getImage(photo) {
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

  function getTime(time) {
    var res = time.substring(time.length - 8, time.length);
    var showTime = res.substring(0, 5);
    console.log("Is this the time?" + showTime);
    return showTime;
  }

  async function handleLike(newfav, user) {
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

  return (
    <div className={styles.cards}>
      <h1 className={styles.cards__title}>{props.header}</h1>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__list}>
            {webinars
              .filter((webinar) => webinar.mainTopic.includes(props.search))
              .map((webinar) => (
                <CardItem
                  key={webinar._id}
                  favorite={webinar.favorite}
                  search={props.search}
                  userID={webinar.userID}
                  handleLike={handleLike}
                  src={getImage(webinar.mainTopic)}
                  title={webinar.title}
                  skill={" Skill: " + webinar.skillLevel}
                  time={" Time: " + getTime(webinar.date.event.start)}
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
};

export default Cards;

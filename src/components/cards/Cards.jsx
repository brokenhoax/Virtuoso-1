import React from "react";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <h1 className={styles.cards__title}>Upcoming Webinars</h1>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__list}>
            <CardItem
              src={"assets/images/javascript.png"}
              title="Learn JavaScript!"
              skill="Intermediate"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="JavaScript"
              label="JavaScript"
              path="/webinars"
            />
            <CardItem
              src={"assets/images/heroku.png"}
              title="Learn Heroku!"
              skill="Intermediate"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="Heroku"
              label="Heroku"
              path="/webinars"
            />
            <CardItem
              src={"assets/images/html.png"}
              title="Learn HTML!"
              skill="Beginner"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              label="HTML"
              topic="HTML"
              path="/webinars"
            />
            <CardItem
              src={"assets/images/react.jpg"}
              title="Learn React"
              skill="Advanced"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="React"
              label="React"
              path="/webinars"
            />
            <CardItem
              src={"assets/images/mongo.png"}
              title="Learn MongoDb"
              skill="Beginner"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="MongoDb"
              label="MongoDb"
              path="/webinars"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

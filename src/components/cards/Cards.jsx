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
              src="images/img-9.jpg"
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
              src="images/Mongodb.png"
              title="Learn Python!"
              skill="Intermediate"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="Python"
              label="Python"
              path="/webinars"
            />
            <CardItem
              src="images/Mongodb.png"
              title="Learn Ruby!"
              skill="Intermediate"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              label="Ruby"
              topic="Ruby"
              path="/webinars"
            />
            <CardItem
              src="images/Mongodb.png"
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
              src="images/Mongodb.png"
              title="Learn CSS"
              skill="Beginner"
              date="10/31/2020"
              time="12:00 EST"
              duration="45 minutes"
              topic="CSS"
              label="CSS"
              path="/webinars"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

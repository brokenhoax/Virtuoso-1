import React from "react";
import styles from "./Cards.module.css";
import CardItem from "../cardItem/CardItem";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <h1>Upcoming Webinars!</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
            <CardItem
              src="images/img-9.jpg"
              text="Learn JavaScript!"
              label="JavaScript"
              path="/webinars"
            />
            <CardItem
              src="images/Mongodb.png"
              text="Learn Python!"
              label="Python"
              path="/webinars"
            />
          </ul>
          <ul className={styles.cards__items}>
            <CardItem
              src="images/Mongodb.png"
              text="Learn Ruby!"
              label="Ruby"
              path="/webinars"
            />
            <CardItem
              src="images/Mongodb.png"
              text="Learn React"
              label="React"
              path="/webinars"
            />
            <CardItem
              src="images/Mongodb.png"
              text="Learn CSS"
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

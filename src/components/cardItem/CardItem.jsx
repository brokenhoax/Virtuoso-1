import React from "react";
import { Link } from "react-router-dom";
import styles from "../cards/Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function CardItem(props) {
  return (
    <>
      <li className={styles.cards__list__items}>
        <Link className={props.cards__items__link} to={props.path}>
          <figure
            className={styles.cards__item__picWrap}
            data-category={props.label}
          >
            <img
              className={styles.cards__item__img}
              alt="Webinar"
              src={props.src}
            />
          </figure>
          <div className={props.cards__item__info}>
            <h5 className={props.cards__item__text}>{props.title}</h5>
            <h5 className={props.cards__item__skill}>{props.skill}</h5>
            <h5 className={props.cards__item__date}>{props.date}</h5>
            <h5 className={props.cards__item__time}>{props.time}</h5>
            <h5 className={props.cards__item__duration}>{props.duration}</h5>
            <h5 className={props.cards__item__topic}>{props.topic}</h5>
            <span className={styles.favIcon}>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faHeart}
                size="lg"
              />
            </span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

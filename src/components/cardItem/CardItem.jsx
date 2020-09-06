import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className={props.cards__items}>
        <Link className={props.cards__items__link} to={props.path}>
          <figure
            className={props.cards__item__picWrap}
            data-category={props.label}
          >
            <img
              className={props.cards__item__img}
              alt="Webinar Image"
              src={props.src}
            />
          </figure>
          <div className={props.cards__item__info}>
            <h5 className={props.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

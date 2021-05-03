import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function AboutPageCard(props) {
  return (
    <>
      <div className="cards__item__link" to={props.path}>
        <div className="cards__item__pic-wrap">
          <img
            src={props.src}
            alt="Travel Image"
            className="cards__item__img"
          />
        </div>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <p>
            Tollere odium autem in nostra potestate sint, ab omnibus et contra
            naturam transferre in nobis. Sed interim toto desiderio supprimunt:
            si vis aliqua quae, quod laudabile esset, nihil tamen pssides
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPageCard;

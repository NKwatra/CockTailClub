import React from "react";
import { Link } from "react-router-dom";

const Drink = props => {
  console.log(`/detail/${props.idDrink}`);
  return (
    <Link
      className="py-4 px-2 drink-border d-block"
      to={`/detail/${props.idDrink}`}
    >
      <img
        src={props.strDrinkThumb}
        alt={`Image of ${props.strDrink}`}
        className="rounded-circle drink-image"
      />
      <span className="pl-4 text-custom h3">{props.strDrink}</span>
    </Link>
  );
};

export default Drink;

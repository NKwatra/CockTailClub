import React from "react";

const Drink = props => {
  return (
    <a className="py-4 px-2 drink-border d-block" href="#">
      <img
        src={props.strDrinkThumb}
        alt={`Image of ${props.strDrink}`}
        className="rounded-circle drink-image"
      />
      <span className="pl-4 text-custom h3">{props.strDrink}</span>
    </a>
  );
};

export default Drink;

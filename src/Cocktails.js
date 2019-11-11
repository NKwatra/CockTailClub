import React from "react";
import Drink from "./Drink";

const Cocktails = props => {
  debugger;
  return (
    <div className="results-container mt-4 rounded">
      {props.cocktails.length > 0 ? (
        props.cocktails.map(cocktail => (
          <Drink {...cocktail} key={cocktail.idDrink} />
        ))
      ) : (
        <div className="py-5">
          <div className="h1 pl-5 font-weight-bolder">No Results Found</div>
        </div>
      )}
    </div>
  );
};

export default Cocktails;

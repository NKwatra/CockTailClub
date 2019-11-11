import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { drinkId } = useParams();
  const [loading, updateLoading] = useState(true);
  const [details, updateDetails] = useState({});
  useEffect(() => {
    drinkDetails(drinkId).then(detail => {
      updateDetails(detail);
      updateLoading(false);
    });
  }, [drinkId, updateLoading]);
  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="details-container">
      <div className="details-background">
        <img
          src={details.strDrinkThumb}
          alt={`Image of ${details.strDrink}`}
          className="rounded-circle detail-image"
        />
        <div className="h1 text-center mt-3 red-text">{details.strDrink}</div>
        <div className="text-center h3">{`${details.strCategory} - ${details.strGlass} - ${details.strAlcoholic}`}</div>
        <div className="h4">
          <span className="h3 red-text">Ingredients : </span>
          {details.ingredients.join(", ")}
        </div>
        <div className="h5">
          <span className="h3 red-text">Instructions: </span>
          {details.strInstructions}
        </div>
      </div>
    </div>
  );
};

const drinkDetails = async drinkId => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  );
  const { drinks } = await response.json();
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3
  } = drinks[0];
  const ingredients = [strIngredient1];
  if (strIngredient2 !== null) ingredients.push(strIngredient2);
  if (strIngredient3 !== null) ingredients.push(strIngredient3);
  return {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    ingredients
  };
};

export default Detail;

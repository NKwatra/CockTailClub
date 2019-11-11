import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";

const Filter = props => {
  const [loading, updateLoading] = useState(true);
  const [categories, updateCategories] = useState([]);
  const [glasses, updateGlasses] = useState([]);
  const [ingredients, updateIngredients] = useState([]);
  const [alcohols, updateAlcohols] = useState([]);
  useEffect(() => {
    fetchData("strCategory", "c").then(categories => {
      updateCategories(categories);
    });
    fetchData("strGlass", "g").then(glasses => {
      updateGlasses(glasses);
    });
    fetchData("strIngredient1", "i").then(ingredients => {
      updateIngredients(ingredients);
    });
    fetchData("strAlcoholic", "a").then(alcohols => {
      updateAlcohols(alcohols);
    });
    updateLoading(false);
  }, [updateAlcohols, updateCategories, updateGlasses, updateIngredients]);

  const [currentCategory, CategoryDropdown] = useDropdown(
    "Category",
    "None",
    categories
  );
  const [currentGlass, GlassDropdown] = useDropdown("Glass", "None", glasses);
  const [currentIngredient, IngredientDropdown] = useDropdown(
    "Ingredient",
    "None",
    ingredients
  );
  const [currentAlcohol, AlcoholDropdown] = useDropdown(
    "Alcohol",
    "None",
    alcohols
  );
  return loading ? (
    <h1>loading ... </h1>
  ) : (
    <div className="form-container ml-5 mt-4 rounded">
      <form
        onSubmit={e => {
          e.preventDefault();
          fetchCocktails(
            currentCategory,
            currentGlass,
            currentIngredient,
            currentAlcohol,
            props.updater
          );
        }}
      >
        <span className="h3">FILTERS</span>
        <div className="mt-2"></div>
        <CategoryDropdown />
        <GlassDropdown />
        <IngredientDropdown />
        <AlcoholDropdown />
        <button className="btn submit-background" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const fetchData = async (type, url) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?${url}=list`
  );
  const { drinks } = await response.json();
  return drinks.map(drinkObj => drinkObj[type]);
};

const fetchCocktails = async (category, glass, ingredient, alcohol, update) => {
  let searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
  if (category !== "None") searchUrl += `c=${category}`;
  if (glass !== "None") searchUrl += `&g=${glass}`;
  if (ingredient !== "None") searchUrl += `&i=${ingredient}`;
  if (alcohol !== "None") searchUrl += `&a=${alcohol}`;
  try {
    const response = await fetch(searchUrl);
    const { drinks } = await response.json();
    update(drinks);
  } catch (exec) {
    alert("Drinks could not be found");
  }
};

export default Filter;

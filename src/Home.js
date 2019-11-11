import React, { useState } from "react";
import Filter from "./Filter";
import Cocktails from "./Cocktails";

const Home = () => {
  const [cocktails, updateCocktails] = useState([]);
  return (
    <div className="page-container">
      <Filter updater={updateCocktails} />
      <Cocktails cocktails={cocktails} />
    </div>
  );
};

export default Home;

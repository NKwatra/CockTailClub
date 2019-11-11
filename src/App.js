import React, { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Cocktails from "./Cocktails";

function App() {
  const [cocktails, updateCocktails] = useState([]);
  console.log(cocktails);
  return (
    <div className="page-container">
      <Filter updater={updateCocktails} />
      <Cocktails cocktails={cocktails} />
    </div>
  );
}
export default App;

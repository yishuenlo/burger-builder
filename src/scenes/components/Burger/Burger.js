import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burger.module.css";
import shadow from "../../../assets/burger-shadow.svg";

const Burger = ({ ingredients }) => {
  //parse and populate ingredients
  let displayIngredients = Object.keys(ingredients)
    .map((ingredientKey) => {
      //create an array with empty elements, with length based on object value
      return [...Array(ingredients[ingredientKey])].map((_, i) => (
        <Ingredient key={ingredientKey + i} type={ingredientKey} />
      ));
    })
    .flat(); //flatten array

  if (displayIngredients.length === 0)
    displayIngredients = <p style={{margin: '3em 0'}}>Please start adding ingredients</p>;

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {displayIngredients}
      <Ingredient type="bread-bottom" />
      <img className={classes.Shadow} src={shadow}></img>
    </div>
  );
};

export default Burger;

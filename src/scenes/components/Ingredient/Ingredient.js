import React from "react";
import PropTypes from 'prop-types';
import classes from "./Ingredient.module.css";

//rendering ingredients in Burger using CSS
const Ingredient = ({ type }) => {
  let style = null;

  //assign style based on type
  switch (type) {
    case "bread-top":
      style = classes.BreadTop;
      break;
    case "bread-bottom":
      style = classes.BreadBottom;
      break;
    case "lettuce":
      style = classes.Lettuce;
      break;
    case "onion":
      style = classes.Onion;
      break;
    case "pickle":
      style = classes.Pickle;
      break;
    case "tomato":
      style = classes.Tomato;
      break;
    case "egg":
      style = classes.Egg;
      break;
    case "bacon":
      style = classes.Bacon;
      break;
    case "cheese":
      style = classes.Cheese;
      break;
    case "protein":
      style = classes.Protein;
      break;
  }

  return <div className={style}></div>;
};

Ingredient.prototype = {
    type: PropTypes.string
}

export default Ingredient;

import React from "react";
import PropTypes from 'prop-types';
import classes from "./Ingredient.module.css";

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
    case "meat":
      style = classes.Meat;
      break;
    case "cheese":
      style = classes.Cheese;
      break;
    case "salad":
      style = classes.Salad;
      break;
    case "bacon":
      style = classes.Bacon;
      break;
  }

  return <div className={style}></div>;
};

Ingredient.prototype = {
    type: PropTypes.string
}


export default Ingredient;

import React from "react";
import PropTypes from 'prop-types';
import classes from "./Ingredient.module.css";

//rendering ingredients in Burger using CSS
const Ingredient = ({ type }) => {
  return (
    <img
      src={`https://raw.githubusercontent.com/yishuenlo/burger-bulider/design/src/assets/burger-ingredients/${type}.svg`}
    />
  );
};

Ingredient.prototype = {
    type: PropTypes.string
}

export default Ingredient;

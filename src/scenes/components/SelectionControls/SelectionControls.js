import React from "react";
import Control from "./Control/Control";
import classes from "./SelectionControls.module.css";

const SelectionControls = ({
  ingredients,
  totalIngredients,
  adjustIngredientHandler,
  disabledAdd,
  disabledRemove,
  totalPrice,
  price
}) => {

  //loop through ingredients to create individual control
  const displayControls = Object.keys(ingredients).map((ingredientKey) => (
    <Control
      key={ingredientKey}
      label={ingredientKey}
      quantity={ingredients[ingredientKey]}
      adjustIngredients={adjustIngredientHandler}
      disabledAdd={disabledAdd[ingredientKey]}
      disabledRemove={disabledRemove[ingredientKey]}
      price={price}
    />
  ));

  const warningMessage =
    totalIngredients >= 10 ? (
      <p className={classes.Warning}>You've reached your total ingredient limit.</p>
    ) : null;

  return (
    <div className={classes.SelectionControls}>
      <h2 className={classes.TotalPrice}>${totalPrice.toFixed(2)}</h2>
      <p>Total Ingredients Used: {totalIngredients}/10</p>
      {warningMessage}
      <div className={classes.SelectionContainer}>{displayControls}</div>
      <button>Reset</button>
      <button>Order Now</button>
    </div>
  );
};

export default SelectionControls;

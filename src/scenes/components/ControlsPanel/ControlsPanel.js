import React from "react";
import Control from "../Control/Control";
import classes from "./ControlsPanel.module.css";

const ControlsPanel = ({
  ingredients,
  adjustIngredientHandler,
  disabledInfo,
  totalPrice,
}) => {
  const displayControls = Object.keys(ingredients).map((ingredientKey) => (
    <Control
      key={ingredientKey}
      label={ingredientKey}
      quantity={ingredients[ingredientKey]}
      adjustIngredients={adjustIngredientHandler}
      disabledInfo={disabledInfo[ingredientKey]}
    />
  ));
  return (
    <div className={classes.ControlsPanel}>
      <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      {displayControls}
    </div>
  );
};

export default ControlsPanel;

import React from "react";
import Control from "../Control/Control";
import classes from "./ControlsPanel.module.css";

const ControlsPanel = ({
  ingredients,
  adjustIngredientHandler,
  disabledAdd,
  disabledRemove,
  totalPrice,
}) => {
  const displayControls = Object.keys(ingredients).map((ingredientKey) => (
    <Control
      key={ingredientKey}
      label={ingredientKey}
      quantity={ingredients[ingredientKey]}
      adjustIngredients={adjustIngredientHandler}
      disabledAdd={disabledAdd[ingredientKey]}
      disabledRemove={disabledRemove[ingredientKey]}
    />
  ));
  return (
    <div className={classes.ControlsPanel}>
      <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      {displayControls}
      <button>Reset</button>
      <button>Checkout</button>
    </div>
  );
};

export default ControlsPanel;

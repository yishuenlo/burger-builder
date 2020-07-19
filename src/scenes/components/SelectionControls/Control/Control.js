import React from "react";
import classes from "./Control.module.css";

const Control = ({
  label,
  quantity,
  adjustIngredients,
  disabledAdd,
  disabledRemove,
  price
}) => (
  <div className={classes.Control}>
    <div className={classes.Selection}>
      <button
        onClick={() => adjustIngredients(label, "remove")}
        disabled={disabledRemove}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => adjustIngredients(label, "add")}
        disabled={disabledAdd}
      >
        +
      </button>
    </div>
    <img
      src={require(`../../../../assets/ingredients-icon/${label}.svg`)}
    ></img>
    <p className={classes.Label}>{label.toUpperCase()}</p>
    <p className={classes.PriceTag}>+${price[label]}</p>
  </div>
);

export default Control;

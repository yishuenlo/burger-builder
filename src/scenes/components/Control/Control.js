import React from "react";
import classes from "./Control.module.css";

const Control = ({ label, quantity, adjustIngredients, disabledInfo }) => (
  <div className={classes.Control}>
    <p>{label.toUpperCase()}</p>
    <button
      onClick={() => adjustIngredients(label, "remove")}
      disabled={disabledInfo}
    >
      -
    </button>
    <p>{quantity}</p>
    <button
      onClick={() => adjustIngredients(label, "add")}
      disabled={disabledInfo}
    >
      +
    </button>
  </div>
);

export default Control;

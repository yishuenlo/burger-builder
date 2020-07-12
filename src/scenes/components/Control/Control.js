import React from "react";
import classes from "./Control.module.css";

const Control = ({
  label,
  quantity,
  adjustIngredients,
  disabledAdd,
  disabledRemove,
}) => (
  <div className={classes.Control}>
    <p>{label.toUpperCase()}</p>
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
);

export default Control;

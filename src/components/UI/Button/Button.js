import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, action, click }) => {
  let style = null;

  //assign style based on type
  switch (type) {
    case "primary":
      style = classes.Primary;
      break;
    case "secondary":
      style = classes.Secondary;
      break;
    default: style = classes.Primary;
  }

  return <button className={style} onClick={click}>{action}</button>;
};

export default Button;

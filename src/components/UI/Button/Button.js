import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, action }) => {
//   let cssStyle = null;
//     console.log(classes.Secondary);
//   switch (type) {
//     case "primary":
//       cssStyle = {
//         color: "#F8FFF1",
//         backgroundColor: "#FF9300",
//         border: "1px solid #FF9300",
//         borderRadius: "16px",
//       };
//       break;
//     case "secondary":
//       cssStyle = classes.Secondary;
//       break;
//   }

  return <button className={`classes.${type}`}>{action}</button>;
};

export default Button;

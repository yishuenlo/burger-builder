import React, { Fragment } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, purchasingHandler}) => {
  const ingredientSummary = ingredients;

  //<li>lettuce: 1 </li>
  const displayIngredients = Object.keys(ingredientSummary).map((key) => (
    <li key={key}>
      <img
        className={classes.Icon}
        src={require(`../../../assets/ingredients-icon/${key}.svg`)}
        alt={key}
      ></img>
      <span className={classes.IngredientName}>{key}</span>: {ingredients[key]}
    </li>
  ));

  return (
    <Fragment>
      <h2 className={classes.Summary}>Your Order</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul className={classes.List}>{displayIngredients}</ul>
      <Button type="secondary" action="Cancel" click={purchasingHandler}/>
      <Button type="primary" action="Confirm" />
    </Fragment>
  );
};

export default OrderSummary;

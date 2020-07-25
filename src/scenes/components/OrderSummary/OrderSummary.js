import React, { Fragment } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, purchasingHandler, totalPrice }) => {
  const ingredientSummary = ingredients;

  //<li>lettuce: 1 </li>
  const displayIngredients = Object.keys(ingredientSummary)
    .filter((el) => ingredients[el] > 0) //only show used ingredients
    .map((key) => (
      <li key={key}>
        <img
          className={classes.Icon}
          src={require(`../../../assets/ingredients-icon/${key}.svg`)}
          alt={key}
        ></img>
        <span className={classes.IngredientName}>{key}</span> {` x `}
        {ingredients[key]}
      </li>
    ));

  return (
    <Fragment>
      <div className={classes.Summary}>
        <h2>Your Order</h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul className={classes.List}>{displayIngredients}</ul>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      <Button type="secondary" action="Cancel" click={purchasingHandler} />
      <Button type="primary" action="Confirm" />
    </Fragment>
  );
};

export default OrderSummary;

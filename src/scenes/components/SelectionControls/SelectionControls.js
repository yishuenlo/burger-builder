import React, { Component } from "react";
import Control from "./Control/Control";
import Button from "../../../components/UI/Button/Button";
import classes from "./SelectionControls.module.css";

const calcTotal = (ingredients) =>
  Object.values(ingredients).reduce((sum, cur) => sum + cur);

class SelectionControls extends Component {
  //managing button states - enabled or disabled
  state = {
    disabledAdd: {},
    disabledRemove: {},
    // totalIngredients: calcTotal(this.props.ingredients),
  };

  //disabled buttons based on ingredient quantities
  checkIngredientsQuant = (ingredients) => {
    const updatedDisabledAdd = { ...this.state.disabledAdd };
    const updatedDisabledRemove = { ...this.state.disabledRemove };

    for (let key in ingredients) {
      //if more than 2 for each ingredient, disable add button OR
      //if more than 10, disable ALL add buttons
      //store states as boolean value
      updatedDisabledAdd[key] = ingredients[key] > 1;
      updatedDisabledRemove[key] = ingredients[key] <= 0;
    }

    const updatedTotal = calcTotal(ingredients);

    if (updatedTotal >= 10) {
      for (let key in ingredients) {
        updatedDisabledAdd[key] = true;
      }
    }

    this.setState({
      disabledAdd: updatedDisabledAdd,
      disabledRemove: updatedDisabledRemove,
      // totalIngredients: calcTotal(ingredients),
    });
  };

  resetStates = () => {
    this.setState({
      // totalIngredients: calcTotal(this.props.ingredients),
      disabledAdd: {},
      disabledRemove: {},
    });
  };

  render() {
    const {
      ingredients,
      totalIngredients,
      adjustIngredientHandler,
      totalPrice,
      price,
      resetClickHandler,
    } = this.props;

    //loop through ingredients to create individual control
    const displayControls = Object.keys(ingredients).map((ingredientKey) => (
      <Control
        key={ingredientKey}
        label={ingredientKey}
        quantity={ingredients[ingredientKey]}
        adjustIngredients={adjustIngredientHandler}
        checkIngredientsQuant={this.checkIngredientsQuant}
        disabledAdd={this.state.disabledAdd[ingredientKey]}
        disabledRemove={this.state.disabledRemove[ingredientKey]}
        price={price}
      />
    ));

    //display warning message when ingredients are greater than 10
    const warningMessage =
      totalIngredients >= 10 ? (
        <p className={classes.Warning}>
          You've reached your total ingredient limit.
        </p>
      ) : null;
    return (
      <div className={classes.SelectionControls}>
        <h2 className={classes.TotalPrice}>${totalPrice.toFixed(2)}</h2>
        <p>Total Ingredients Used: {totalIngredients}/10</p>
        {warningMessage}
        <div className={classes.SelectionContainer}>{displayControls}</div>
        <Button
          type="secondary"
          action="Reset"
          click={resetClickHandler}
        ></Button>
        <Button type="primary" action="Order Now"></Button>
      </div>
    );
  }
}

export default SelectionControls;

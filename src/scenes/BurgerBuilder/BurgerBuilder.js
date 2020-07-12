import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import ControlsPanel from "../components/ControlsPanel/ControlsPanel";
import classes from "./BurgerBuilder.module.css";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 3.5,
  bacon: 0.75,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
    disabledAdd: {
      salad: false,
      cheese: false,
      bacon: false,
      meat: false,
    },
    disabledRemove: {
      salad: false,
      cheese: false,
      bacon: false,
      meat: false,
    },
    purchasable: false,
    totalPrice: 10.5,
  };

  //disabled buttons based on ingredient quantities
  checkIngredientsQuant = (ingredients) => {
    const updatedDisabledAdd = { ...this.state.disabledAdd };
    const updatedDisabledRemove = { ...this.state.disabledRemove };
    for (let key in ingredients) {
      //if more than 2, disable add button
      updatedDisabledAdd[key] = ingredients[key] > 2;
      updatedDisabledRemove[key] = ingredients[key] <= 0;
    }
    this.setState({
      disabledAdd: updatedDisabledAdd,
      disabledRemove: updatedDisabledRemove,
    });
  };

  adjustIngredientHandler = (type, action) => {
    //create copy of original ingredient obj
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    //update quantity count
    const prevCount = this.state.ingredients[type];
    const updatedCount =
      action === "add"
        ? prevCount + 1
        : prevCount > 0
        ? prevCount - 1
        : prevCount;
    updatedIngredients[type] = updatedCount;

    //update price
    const prevPrice = this.state.totalPrice;
    const updatedPrice =
      action === "add"
        ? prevPrice + INGREDIENT_PRICES[type]
        : prevCount > 0
        ? prevPrice - INGREDIENT_PRICES[type]
        : prevPrice;

    this.checkIngredientsQuant(updatedIngredients);

    //update state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  render() {
    return (
      <article className={classes.BurgerBuilder}>
        <Burger ingredients={this.state.ingredients} />
        <ControlsPanel
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          adjustIngredientHandler={this.adjustIngredientHandler}
          disabledAdd={this.state.disabledAdd}
          disabledRemove={this.state.disabledRemove}
        />
      </article>
    );
  }
}

export default BurgerBuilder;

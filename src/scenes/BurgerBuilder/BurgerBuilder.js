import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import ControlsPanel from "../components/ControlsPanel/ControlsPanel";
import classes from "./BurgerBuilder.module.css";

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  onion: 0.25,
  pickle: 0.75,
  tomato: 0.5,
  egg: 0.75,
  bacon: 0.75,
  cheese: 0.5,
  protein: 3.75,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 1,
      onion: 1,
      pickle: 1,
      tomato: 1,
      egg: 1,
      bacon: 1,
      cheese: 1,
      protein: 1,
    },
    disabledAdd: {
      lettuce: false,
      cheese: false,
      bacon: false,
      protein: false,
    },
    disabledRemove: {
      lettuce: false,
      cheese: false,
      bacon: false,
      protein: false,
    },
    purchasable: false,
    totalPrice: 16.8,
  };

  //disabled buttons based on ingredient quantities
  checkIngredientsQuant = (ingredients) => {
    const updatedDisabledAdd = { ...this.state.disabledAdd };
    const updatedDisabledRemove = { ...this.state.disabledRemove };

    //set total ingredients to limit of 10
    const totalIngredients = Object.values(ingredients).reduce(
      (sum, cur) => sum + cur
    );

    for (let key in ingredients) {
      //if more than 2 for each ingredient, disable add button OR
      //if more than 10, disable ALL add buttons
      updatedDisabledAdd[key] = ingredients[key] > 1 || totalIngredients >= 10;
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

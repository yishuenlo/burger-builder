import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import ControlsPanel from "../components/ControlsPanel/ControlsPanel";
import classes from "./BurgerBuilder.module.css";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 2.5,
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
    purchased: false,
    totalPrice: 6.5,
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

    //update state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  render() {
    //keep track quantity, using boolean values
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0 || disabledInfo[key] > 2;
    }

    console.log(disabledInfo);

    return (
      <article className={classes.BurgerBuilder}>
        <Burger ingredients={this.state.ingredients} />
        <ControlsPanel
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          adjustIngredientHandler={this.adjustIngredientHandler}
          disabledInfo={disabledInfo}
        />
      </article>
    );
  }
}

export default BurgerBuilder;

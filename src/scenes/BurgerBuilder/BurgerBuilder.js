import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import SelectionControls from "../components/SelectionControls/SelectionControls";
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

const initialIngredients = {
  lettuce: 1,
  onion: 1,
  pickle: 1,
  tomato: 1,
  egg: 1,
  bacon: 1,
  cheese: 1,
  protein: 1,
};

const initialPrice = Object.values(INGREDIENT_PRICES).reduce((a, b) => a + b);

const initialTotalIngredients = Object.values(initialIngredients).reduce(
  (sum, cur) => sum + cur
);

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.resetSelectionControls = React.createRef();
  }

  state = {
    ingredients: initialIngredients,
    totalIngredients: initialTotalIngredients,
    purchasable: false,
    totalPrice: initialPrice,
  };

  //fn for disable add/remove buttons in SelectionControls
  adjustIngredientHandler = (type, action, fn) => {
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

    fn(updatedIngredients);

    //update state
    this.setState({
      ingredients: updatedIngredients,
      totalIngredients: Object.values(updatedIngredients).reduce(
        (sum, cur) => sum + cur
      ),
      totalPrice: updatedPrice,
    });
  };

  resetClickHandler = () => {
    this.setState({
      ingredients: initialIngredients,
      totalIngredients: initialTotalIngredients,
      totalPrice: initialPrice,
    });
    this.resetSelectionControls.current.resetStates();
  };

  render() {
    return (
      <article className={classes.BurgerBuilder}>
        <div className={classes.TitleContainer}>
          <div>
            <p className={classes.SubTitle}>React</p>
            <h2 className={classes.Title}>Mystery Burger</h2>
            <p className={classes.Description}>
              With Delicious Ancient Secret Sauce
            </p>
          </div>
        </div>
        <div className={classes.Burger}>
          <Burger ingredients={this.state.ingredients} />
        </div>

        <div className={classes.SelectionControls}>
          <SelectionControls
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            totalIngredients={this.state.totalIngredients}
            ref={this.resetSelectionControls}
            adjustIngredientHandler={this.adjustIngredientHandler}
            disabledAdd={this.state.disabledAdd}
            disabledRemove={this.state.disabledRemove}
            price={INGREDIENT_PRICES}
            resetClickHandler={this.resetClickHandler}
          />
        </div>
      </article>
    );
  }
}

export default BurgerBuilder;

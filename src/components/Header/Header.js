import React from 'react';
import classes from './Header.module.css';
import '../../assets/logo-icon.svg'

const Header = () => {
    return (
      <header className={classes.Header}>
        <div className={classes.HeaderContainer}>
          <img src={require("../../assets/title.png")} alt="React Burger Builder"/>
          <nav className={classes.Nav}>
            <p>Sign In</p>
            <div>
              <p>Checkout</p>
              <img src={require("../../assets/cart-icon.svg")} alt="cart"/>
            </div>
          </nav>
        </div>
      </header>
    );
}

export default Header;
import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

const layout = ({ children }) => (
  <Fragment>
    <Header />
    <main className={classes.Content}>{children}</main>
    <Footer />
  </Fragment>
);

export default layout;
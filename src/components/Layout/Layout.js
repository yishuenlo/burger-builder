import React, { Fragment } from 'react';
import classes from './Layout.module.css';

const layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </Fragment>
);

export default layout;
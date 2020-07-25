import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        <p className={classes.Author}>
          Made with <i class="fas fa-heart"></i> by{" "}
          <a href="https://github.com/yishuenlo/burger-builder" target="_blank">Yish</a>
        </p>
        <p className={classes.Course}>
          A{" "}
          <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank">
            Udemy
          </a>{" "}
          Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;

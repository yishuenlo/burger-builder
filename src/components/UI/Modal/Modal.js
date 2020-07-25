import React, {Fragment} from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, purchasingHandler}) => {
  const animation = show ? classes.FadeIn : classes.FadeOut;
  const style = [classes.Modal, animation];

  console.log("animation", animation);
  console.log("style", style);

  return (
    <Fragment>
      <div className={style.join(" ")}>{children}</div>
      <Backdrop show={show} click={purchasingHandler}/>
    </Fragment>
  );
};

export default Modal;

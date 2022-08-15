import React from "react";
// import classes from "./ButtonDark.module.scss";
const ButtonDark = (props) => {
  return (
    <button
      className={`btn1 ${props.className}`}
      type={`${props.type}` || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonDark;

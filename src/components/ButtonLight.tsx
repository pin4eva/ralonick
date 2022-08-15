import React from "react";

const ButtonLight = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      type={`${props.type}` || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonLight;

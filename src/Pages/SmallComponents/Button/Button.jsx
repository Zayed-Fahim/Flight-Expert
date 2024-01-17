import React from "react";

const Button = ({ type, text, buttonClassNames }) => {
  return (
    <button className={buttonClassNames} type={type}>
      {text}
    </button>
  );
};

export default Button;

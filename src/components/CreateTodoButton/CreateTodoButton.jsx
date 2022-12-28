import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({
  text,
  callback,
  bgColor = "secondary",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`CreateTodoButton bg-${bgColor}`}
      onClick={callback}
    >
      {text}
    </button>
  );
};

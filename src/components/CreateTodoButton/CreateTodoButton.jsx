import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ text, callback, type = "button" }) => {
  return (
    <button type={type} className="CreateTodoButton" onClick={callback}>
      {text}
    </button>
  );
};

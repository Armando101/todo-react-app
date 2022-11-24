import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ text, callback }) => {
  return (
    <button className="CreateTodoButton" onClick={callback}>
      {text}
    </button>
  );
};

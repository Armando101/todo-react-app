import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const createTask = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={createTask.bind(this, "Hello task")}
    >
      Create task
    </button>
  );
};

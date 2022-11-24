import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const createTask = () => {
    setOpenModal(true);
  };

  return (
    <button className="CreateTodoButton" onClick={createTask.bind(this)}>
      Create task
    </button>
  );
};

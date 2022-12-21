import React from "react";
import "./TodoCounter.css";

export const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has comletado {completedTodos} de {totalTodos} Todo's
    </h2>
  );
};

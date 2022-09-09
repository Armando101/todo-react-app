import React from "react";
import "./TodoCounter.css";

export const TodoCounter = ({ completedTodos, total }) => {
  return (
    <h2 className="TodoCounter">
      Has comletado {completedTodos} de {total} Todo's
    </h2>
  );
};

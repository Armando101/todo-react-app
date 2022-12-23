import React from "react";
import "./TodoCounter.css";

export const TodoCounter = ({ completedTodos, totalTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${loading ? "loading" : ""}`}>
      Has comletado {completedTodos} de {totalTodos} Todo's
    </h2>
  );
};

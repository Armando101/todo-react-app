import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ text }) => {
  return (
    <li className="TodoItem">
      <p>{text}</p>
    </li>
  );
};

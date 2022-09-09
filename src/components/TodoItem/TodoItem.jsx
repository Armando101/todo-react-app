import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ text, completed }) => {
  return (
    <li className="TodoItem">
      <div className="TodoItem-info">
        <input type="checkbox" />
        <p className={completed && "completed"}> {text}</p>
      </div>
      <span class="material-symbols-outlined TodoItem-delete">delete</span>
    </li>
  );
};

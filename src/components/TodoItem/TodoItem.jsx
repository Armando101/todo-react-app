import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <div className="TodoItem-info">
        <input
          type="checkbox"
          defaultChecked={completed}
          onClick={onComplete}
        />
        <p className={completed ? "completed" : ""}> {text}</p>
      </div>
      <span
        className="material-symbols-outlined TodoItem-delete"
        onClick={onDelete}
      >
        delete
      </span>
    </li>
  );
};

import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ text, completed }) => {
  const onComplete = () => {
    alert(`Task completed ${text}`);
  };

  const onDelete = () => {
    alert(`Task deleted ${text}`);
  };

  return (
    <li className="TodoItem">
      <div className="TodoItem-info">
        <input type="checkbox" onClick={onComplete} />
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

import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ myItem, completeTodo, deleteTodo }) => {
  return (
    <li className="TodoItem">
      <div className="TodoItem-info">
        <input
          type="checkbox"
          defaultChecked={myItem?.completed}
          onClick={() => {
            completeTodo(myItem.id);
          }}
        />
        <p className={myItem?.completed ? "completed" : ""}> {myItem?.text}</p>
      </div>
      <span
        className="material-symbols-outlined TodoItem-delete"
        onClick={() => {
          deleteTodo(myItem.id);
        }}
      >
        delete
      </span>
    </li>
  );
};

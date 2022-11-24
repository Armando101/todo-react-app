import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoItem.css";

export const TodoItem = ({ id }) => {
  const { todos, completeTodo, deleteTodo } = useContext(TodoContext);
  const item = todos.find((item) => item.id === id);
  return (
    <li className="TodoItem">
      <div className="TodoItem-info">
        <input
          type="checkbox"
          defaultChecked={item.completed}
          onClick={() => {
            completeTodo(item.id);
          }}
        />
        <p className={item.completed ? "completed" : ""}> {item.text}</p>
      </div>
      <span
        className="material-symbols-outlined TodoItem-delete"
        onClick={() => {
          deleteTodo(item.id);
        }}
      >
        delete
      </span>
    </li>
  );
};

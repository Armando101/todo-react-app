import React from "react";
import "./TodoList.css";

export const TodoList = ({ children }) => {
  return <ul className="TodoList">{children}</ul>;
};

import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./ContainerCreateTodo.css";

export const ContainerCreateTodo = () => {
  return (
    <div className="ContainerCreateTodo">
      <TodoSearch />
      <CreateTodoButton />
    </div>
  );
};

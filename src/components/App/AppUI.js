import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./App.css";

export const AppUI = () => {
  const { loading, error, filteredTask } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ha habido un error :/</p>}
        {loading && <p>Cargando...</p>}
        {!loading &&
          !error &&
          filteredTask.map((item, index) => {
            return <TodoItem key={index} id={item.id} />;
          })}
      </TodoList>
    </>
  );
};

import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./App.css";

export const AppUI = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, error, filteredTask, completeTodo, deleteTodo }) => {
          return (
            <>
              <TodoList>
                {error && <p>Ha habido un error :/</p>}
                {loading && <p>Cargando...</p>}
                {!loading &&
                  !error &&
                  filteredTask.map((item, index) => {
                    return (
                      <TodoItem
                        onComplete={completeTodo.bind(this, item.id)}
                        onDelete={deleteTodo.bind(this, item.id)}
                        key={index}
                        text={item.text}
                        completed={item.completed}
                      />
                    );
                  })}
              </TodoList>
            </>
          );
        }}
      </TodoContext.Consumer>
    </>
  );
};

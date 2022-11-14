import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./App.css";

export const AppUI = ({
  loading,
  error,
  todos,
  searchValue,
  setSearchValue,
  filteredTask,
  setFilteredTask,
  completeTodo,
  deleteTodo,
  totalTodos,
  completedTodos,
}) => {
  return (
    <>
      <TodoCounter total={totalTodos} completedTodos={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFilteredTask={setFilteredTask}
        todos={todos}
      />
      {/* <CreateTodoButton className="CreateTodoButton" /> */}

      {loading && <p>Cargando...</p>}
      {error && <p>Ha habido un error :/</p>}

      {!loading && !error && (
        <TodoList>
          {filteredTask.map((item, index) => (
            <TodoItem
              onComplete={completeTodo.bind(this, item.id)}
              onDelete={deleteTodo.bind(this, item.id)}
              key={index}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </TodoList>
      )}
    </>
  );
};

import React from "react";
import { completeTodo, deleteTodo } from "../../helpers/functions";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./App.css";

export const AppUI = ({
  todos,
  searchValue,
  setSearchValue,
  filteredTask,
  setFilteredTask,
  setTodos,

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

      <TodoList>
        {filteredTask.map((item, index) => (
          <TodoItem
            onComplete={() => {
              const newTodos = completeTodo(item.id, todos);
              setTodos(newTodos);
            }}
            onDelete={() => {
              const newTodos = deleteTodo(item.id, todos);
              setTodos(newTodos);
              setFilteredTask(newTodos);
            }}
            key={index}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>
    </>
  );
};

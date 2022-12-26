import { useEffect } from "react";
import { useState } from "react";
import { TODOS_STORAGE } from "../constants";
import { getIndex } from "../helpers/functions";
import { useLocalStorage } from "./useLocalStorage";

function useTodo() {
  const {
    item: todos,
    savedItem: saveTodos,
    loading,
    error,
    sincronize,
  } = useLocalStorage(TODOS_STORAGE, []);
  const [searchValue, setSearchValue] = useState();
  const [openModal, setOpenModal] = useState(false);

  const [filteredTask, setFilteredTask] = useState(todos);
  useEffect(() => {
    setFilteredTask(todos);
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (id) => {
    const [todoIndex, newTodos] = getIndex(id, todos);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const [todoIndex, newTodos] = getIndex(id, todos);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    setFilteredTask(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id: Math.trunc(Math.random() * 1000000),
    });
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    todos,
    searchValue,
    setSearchValue,
    filteredTask,
    setFilteredTask,
    completedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    openModal,
    setOpenModal,
    sincronize,
  };
}

export { useTodo };

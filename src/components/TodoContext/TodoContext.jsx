import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { TODOS_STORAGE } from "../../constants";
import { getIndex } from "../../helpers/functions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { defaultTodos } from "../../mocks/todo";

const TodoContext = createContext();
function TodoProvider({ children }) {
  const {
    item: todos,
    savedItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(TODOS_STORAGE, defaultTodos);
  const [searchValue, setSearchValue] = useState();

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

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };

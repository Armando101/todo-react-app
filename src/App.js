import { useEffect, useState } from "react";
import { AppUI } from "./components/App/AppUI";
import { TODOS_STORAGE } from "./constants";
import { getIndex } from "./helpers/functions";
import { useLocalStorage } from "./hooks/data";
import { defaultTodos } from "./mocks/todo";

function App() {
  const {
    item: todos,
    savedItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(TODOS_STORAGE, defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTask, setFilteredTask] = useState(todos);

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

  useEffect(() => {
    console.log("RENDER");

    return () => {};
  }, [totalTodos]);

  return (
    <AppUI
      loading={loading}
      error={error}
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTask={filteredTask}
      setFilteredTask={setFilteredTask}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

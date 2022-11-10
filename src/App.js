import { useState } from "react";
import { defaultTodos } from "./mocks/todo";
import { AppUI } from "./components/App/AppUI";
import { TODOS_STORAGE } from "./constants";

function App() {
  const localStorageTodos = localStorage.getItem(TODOS_STORAGE);
  let parsedTodos = defaultTodos;
  if (!localStorageTodos) {
    localStorage.setItem(TODOS_STORAGE, JSON.stringify(defaultTodos));
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTask, setFilteredTask] = useState(todos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <AppUI
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTask={filteredTask}
      setFilteredTask={setFilteredTask}
      setTodos={setTodos}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
    />
  );
}

export default App;

import { useState } from "react";
import { defaultTodos } from "./mocks/todo";
import { AppUI } from "./components/App/AppUI";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
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

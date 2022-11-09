import { useState } from "react";
// import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { defaultTodos } from "./mocks/todo";
import "./App.css";
import { getIndex } from "./helpers/functions";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTask, setFilteredTask] = useState(todos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (id) => {
    const [todoIndex, newTodos] = getIndex(id, todos);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const [todoIndex, newTodos] = getIndex(id, todos);
    newTodos.splice(todoIndex, 1);
    console.log(newTodos);
    setTodos(newTodos);
    setFilteredTask(newTodos);
  };

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
            onComplete={completeTodo.bind(this, item.id)}
            onDelete={deleteTodo.bind(this, item.id)}
            key={index}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>
    </>
  );
}

export default App;

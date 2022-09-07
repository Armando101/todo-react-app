import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { todos } from "./mocks/todo";

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((item, index) => (
          <TodoItem key={index} text={item.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

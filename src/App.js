import { ContainerCreateTodo } from "./components/ContainerCreateTodo/ContainerCreateTodo";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { todos } from "./mocks/todo";

function App() {
  return (
    <>
      <TodoCounter />
      <ContainerCreateTodo />

      <TodoList>
        {todos.map((item, index) => (
          <TodoItem key={index} text={item.text} />
        ))}
      </TodoList>
    </>
  );
}

export default App;

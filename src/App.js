import { AppUI } from "./components/App/AppUI";
import { TodoProvider } from "./components/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

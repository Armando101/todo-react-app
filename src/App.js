import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./components/Modal/Modal";
import { TodoProvider } from "./components/TodoContext/TodoContext";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";

function App() {
  const {
    completedTodos,
    totalTodos,
    setSearchValue,
    todos,
    setFilteredTask,
    error,
    loading,
    filteredTask,
    openModal,
    setOpenModal,
    addTodo,
    deleteTodo,
    completeTodo,
  } = TodoProvider();

  const createTask = () => {
    setOpenModal(true);
  };

  return (
    <>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch
          setSearchValue={setSearchValue}
          todos={todos}
          setFilteredTask={setFilteredTask}
        />
      </TodoHeader>
      <TodoList>
        {error && <p>Ha habido un error :/</p>}
        {loading && <p>Cargando...</p>}
        {!loading &&
          !error &&
          filteredTask.map((item, index) => {
            return (
              <TodoItem
                key={index}
                todos={todos}
                myItem={item}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </TodoList>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton
        text={"Create task"}
        callback={createTask}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;

import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./components/Modal/Modal";
import { useTodo } from "./hooks/useTodo";
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
    todos,
    error,
    loading,
    filteredTask,
    openModal,
    searchValue,
    setSearchValue,
    setFilteredTask,
    setOpenModal,
    addTodo,
    deleteTodo,
    completeTodo,
  } = useTodo();

  const createTask = () => {
    setOpenModal(true);
  };

  return (
    <>
      <TodoHeader>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          loading={loading}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
          todos={todos}
          setFilteredTask={setFilteredTask}
          loading={loading}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        filteredTask={filteredTask}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onEmptySearch={(search) => <p>There is no results for {search}</p>}
        onEmptyResult={() => <p>Create your first to do :D</p>}
        onError={() => <p>Ha habido un error</p>}
        onLoading={() => <p>Cargando...</p>}
        // onRender={(item, index) => {
        //   return (
        //     <TodoItem
        //       key={index}
        //       todos={todos}
        //       myItem={item}
        //       completeTodo={completeTodo}
        //       deleteTodo={deleteTodo}
        //     />
        //   );
        // }}
      >
        {(item, index) => {
          return (
            <TodoItem
              key={index}
              todos={todos}
              myItem={item}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        }}
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

import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { Modal } from "../Modal/Modal.jsx";
import "./App.css";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoHeader } from "../TodoHeader/TodoHeader";

export const AppUI = () => {
  const {
    loading,
    error,
    filteredTask,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    setSearchValue,
    todos,
    setFilteredTask,
  } = useContext(TodoContext);

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
            return <TodoItem key={index} id={item.id} />;
          })}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        text={"Create task"}
        callback={createTask}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

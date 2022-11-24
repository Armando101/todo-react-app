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

export const AppUI = () => {
  const { loading, error, filteredTask, openModal, setOpenModal } =
    useContext(TodoContext);

  const createTask = () => {
    setOpenModal(true);
  };

  return (
    <>
      <TodoCounter />
      <TodoSearch />
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

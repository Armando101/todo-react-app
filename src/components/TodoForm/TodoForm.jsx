import React from "react";
import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const text = event.target[0].value;
    addTodo(text);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="bodyForm">
        <label>Task</label>
        <textarea placeholder="Cut onions" cols="30" rows="10"></textarea>
      </div>
      <div>
        <CreateTodoButton
          type={"button"}
          text={"Cancelar"}
          callback={onCancel}
        />
        <CreateTodoButton type={"submit"} text={"Add"} />
      </div>
    </form>
  );
};

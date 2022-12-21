import React from "react";
import { useState } from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./TodoForm.css";

export const TodoForm = ({ addTodo, setOpenModal }) => {
  const [formValue, setFormValue] = useState("");

  const onChange = ({ target }) => {
    setFormValue(target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addTodo(formValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="bodyForm">
        <label>Task</label>
        <textarea
          onChange={onChange.bind(this)}
          placeholder="Cut onions"
          cols="30"
          rows="10"
        ></textarea>
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

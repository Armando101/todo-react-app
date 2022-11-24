import React from "react";
import { useContext } from "react";
import { filterTaskByName } from "../../helpers/functions";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { setSearchValue, todos, setFilteredTask } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    const filteredList = filterTaskByName(todos, value);
    if (filteredList) {
      return setFilteredTask(filteredList);
    }
    setFilteredTask(todos);
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Buy apples"
        onChange={onSearchValueChange}
      />
    </>
  );
};

import React from "react";
import { filterTaskByName } from "../../helpers/functions";
import "./TodoSearch.css";

export const TodoSearch = ({ setSearchValue, todos, setFilteredTask }) => {
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

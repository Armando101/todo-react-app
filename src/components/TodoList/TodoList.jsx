import React from "react";
import "./TodoList.css";

export const TodoList = ({
  error,
  loading,
  totalTodos,
  filteredTask,
  searchValue,
  children,
  onError,
  onRender,
  onLoading,
  onEmptyResult,
  onEmptySearch,
}) => {
  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!error && !loading && totalTodos === 0 && onEmptyResult()}
      {!error &&
        !loading &&
        filteredTask.length === 0 &&
        onEmptySearch(searchValue)}
      <ul className="TodoList">{filteredTask.map(onRender || children)}</ul>
    </section>
  );
};

import React from "react";

export const TodoHeader = ({ children }) => {
  return (
    <header>
      {children[0]}
      {children[1]}
    </header>
  );
};

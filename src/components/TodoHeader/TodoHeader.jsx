import React from "react";

export const TodoHeader = ({ children, loading }) => {
  const childrenList = React.Children.toArray(children);
  return (
    <header>
      {childrenList.map((child) => React.cloneElement(child, { loading }))}
    </header>
  );
};

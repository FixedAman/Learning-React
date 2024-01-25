import React from "react";

const Lists = ({ lists }) => {
  return (
    <div className="Todo-List">
      {lists.map((item) => {
        <TodoList ListName={item.name} ListDate={item.dates} />;
      })}
    </div>
  );
};

export default Lists;

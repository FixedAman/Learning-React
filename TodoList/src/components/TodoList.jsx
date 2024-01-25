import React from "react";

const TodoList = ({ ListName, ListDate }) => {
  
  return (
    <div>
      <div class="row kg-row">
        <div class="col-4">{ListName}</div>
        <div class="col-4">{ListDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

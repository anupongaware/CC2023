import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <>
      <ul className="list-group my-2">
        <TodoItem />
        <TodoItem />
      </ul>
    </>
  );
}

export default TodoList;

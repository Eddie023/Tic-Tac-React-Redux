import React from "react";

import TodoItem from "../components/TodoItem";

const TodoList = ({ todoList = [], length = 0, addTodoItem = f => f }) => (
  <ul>
    <p onClick={() => addTodoItem("Batman")}> Length {length}</p>

    {todoList.map((todo, index) => <TodoItem {...todo} key={index} />)}
  </ul>
);

export default TodoList;

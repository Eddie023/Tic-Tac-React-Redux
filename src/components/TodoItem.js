import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ name, isCompleted = false, setCompleteTodo = f => f }) => (
  <li
    onClick={() => setCompleteTodo()}
    className={isCompleted ? "completed" : ""}
  >
    {name}
  </li>
);

TodoItem.propTypes = {
  name: PropTypes.string,
  isCompleted: PropTypes.bool
};

export default TodoItem;

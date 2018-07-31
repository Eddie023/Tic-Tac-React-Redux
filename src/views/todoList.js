import { connect } from "react-redux";

import TodoListUI from "./todoListUI";
import { addTodo } from "../actions/todoActions";

const mapStateToProps = state => {
  return {
    todoList: state.todo.list,
    length: state.todo.list.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: name => dispatch(addTodo(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListUI);

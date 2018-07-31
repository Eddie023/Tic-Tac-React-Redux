import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import "./App.css";
// import TodoList from "./views/todoList";
import Board from "./views/Board";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

export default App;

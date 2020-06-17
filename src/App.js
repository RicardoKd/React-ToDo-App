import React from "react";
import "./App.css";
import { List } from "./TodoList/List";
import { Task } from "./TodoList/Task";

const App = () => {
  return (
    <div className="centeringTodoList">
      <div className="todoList">
        <List />
        <Task />
      </div>
    </div>
  );
};

export default App;

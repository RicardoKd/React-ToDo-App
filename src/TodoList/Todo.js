import React, { useState } from "react";
import { Task } from "./Task";

const Todo = () => {
  // Todo name
  const [todoTitle, setTodoTitle] = useState("New Todo");
  // Value of task text input
  const [inputValue, setInputValue] = useState("");
  // list of tasks
  const [tasks, setTasks] = useState([]);
  // Add new task to the task list
  const addTask = (taskText) => {
    const newTodo = [{ taskText }, ...tasks];
    setTasks(newTodo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo">
      <div className="header">
        <input
          type="text"
          className="header_title"
          placeholder="Name your todo list"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />

        <form className="header_form-addTask" onSubmit={handleSubmit}>
          <input
            type="text"
            className="header_form_input-addTask"
            placeholder="Enter new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>

      <div className="list">
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Todo };

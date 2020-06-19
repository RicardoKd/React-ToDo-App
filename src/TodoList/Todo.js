import React, { useState } from "react";

const Todo = () => {
  // Todo name
  const [todoTitle, setTodoTitle] = useState("New Todo");
  // Value of task text input
  const [inputValue, setInputValue] = useState("");
  // list of tasks
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    // Don`t refresh the page
    e.preventDefault();
    // Check if input is empty
    if (!inputValue) return;
    // Add new task to the task list
    setTasks([{ taskText: inputValue, completed: false }, ...tasks]);
    // Clear input
    setInputValue("");
  };

  const removeTask = (i) => {
    const todoWithout = tasks.filter((val, index) => index !== i);
    setTasks([...todoWithout]);
  };

  const isCompleted = (i) => {
    const todoWithout = tasks.filter((val, index) => index !== i);
    setTasks([...todoWithout, { taskText: tasks[i].taskText, completed: !tasks[i].completed }]);
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
        {tasks.map((task, index) => {
          return (
            <div className="list_task" key={index} index={index} task={task}>
              <p className={task.completed ? "list_task-text completed" : "list_task-text"}>{task.taskText}</p>
              <i className="fas fa-check" onClick={() => isCompleted(index)}></i>
              <i className="far fa-trash-alt" onClick={() => removeTask(index)}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Todo };

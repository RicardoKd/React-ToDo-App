import React from "react";

// eslint-disable-next-line react/prop-types
const Task = ({ index, task, tasks, setTasks }) => {
  const removeTask = () => {
    console.log("task removed");
  };

  const isCompleted = (i) => {
    const newTasks = [...tasks];
    newTasks[i].isCompleted = true;
    setTasks(newTasks);
  };

  return (
    <div className="list_task">
      <p className="list_task-text">{task.taskText}</p>
      <i className="fas fa-check" onClick={isCompleted(index)}></i>
      <i className="far fa-trash-alt" onClick={removeTask}></i>
    </div>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Task };

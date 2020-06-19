import React from "react";

// eslint-disable-next-line react/prop-types
const Task = ({ index, task }) => {
  return (
    <div className="list_task">
      <p className="list_task-text">{task.taskText}</p>
      <i className="fas fa-check"></i>
      <i className="far fa-trash-alt"></i>
    </div>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Task };

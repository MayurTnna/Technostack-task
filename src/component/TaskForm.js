import React, { useState } from "react";
import "../assets/style/TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="container">
        {" "}
        <div className="row mx-auto ">
          <div className="col-lg-5 col-md-6  col-sm-12">
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="custom-element"
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <input
              type="text
              "
              className="custom-element  "
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="col-lg-2  button-83" type="submit">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;

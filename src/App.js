import React, { useState } from "react";

import "./App.css";
import Filter from "./component/Filter";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = filterCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <div className="App">
      <h1 className="task-title">Task Tracker</h1>
      <Filter
        filterCompleted={filterCompleted}
        onToggleFilter={() => setFilterCompleted(!filterCompleted)}
      />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;

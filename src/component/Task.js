import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/style/Task.css";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="container mx-auto  card-container">
        <Card className="card">
          
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <div className="d-flex justify-content-center">
              <div className="mr-2">
                <Button variant="success" onClick={() => onToggle(task.id)}>
                  {task.completed ? "Unmark Completed" : "Mark Completed"}
                </Button>
              </div>
              <div className="red-button">
                <Button variant="danger" onClick={() => onDelete(task.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Task;

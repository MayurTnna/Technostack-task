import React from "react";
import "../assets/style/Filter.css";

const Filter = ({ filterCompleted, onToggleFilter }) => {
  return (
    <div className="filter">
      <div className="form-check form-switch filter-container">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={filterCompleted}
          onChange={onToggleFilter}
        />
        <label
          className="form-check-label label-text"
          for="flexSwitchCheckDefault"
        >
          Show Completed Tasks
        </label>
      </div>
    </div>
  );
};

export default Filter;

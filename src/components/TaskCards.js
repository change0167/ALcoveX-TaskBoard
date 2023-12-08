import React, { useState } from "react";
import "./taskcard.css";

function TaskCards() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.inputtext || /^\s*$/.test(task.inputtext)) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  return (
    <div className="cards">
      <div className="taskcont">Create a To-Do App</div>
      <div className="time">
        <div className="starttime">
          Start time
          <input className="strttime" type="date" />
        </div>
        <div className="deadtime">
          Deadline
          <input className="strttime" type="date" />
        </div>
      </div>
    </div>
  );
}
export default TaskCards;

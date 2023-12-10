import React from "react";
import "./taskcard.css";

function TaskCards() {
  return (
    <div className="cards">
      <div className="taskcont">Create To-Do App</div>
      <div className="time">
        <div className="starttime1">
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

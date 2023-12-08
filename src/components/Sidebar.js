import React from "react";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div class="taskheader">Task boards</div>
      <div class="projects">
        <div className="objt1">Freelance Project</div>
        <div className="objt2">SBI Project</div>
        <div className="objt3">HRCI Project</div>
      </div>
      <div className="Btn">
        <button> + Add new Project</button>
      </div>
    </div>
  );
}

export default Sidebar;

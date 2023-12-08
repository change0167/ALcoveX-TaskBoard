import React from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import TaskCards from "./TaskCards";

function AddButton() {
  const [openmodal, setopenmodal] = useState(false);

  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setopenmodal(true);
        }}
      >
        adddd
      </button>
      {openmodal && <AddTask closeTask={setopenmodal} />}
    </div>
  );
}

export default AddButton;

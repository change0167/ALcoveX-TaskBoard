import React, { useState } from "react";
import "./stylee.css";
import { v4 as uuidv4 } from "uuid";

function AddTask({ closeTask, onSubmit }) {
  const [inputtext, setinputtext] = useState("");
  const [stime, setstime] = useState("");
  const [dtime, setdtime] = useState("");
  const [select, setselect] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputtext") setinputtext(value);
    else if (name === "stime") setstime(value);
    else if (name === "dtime") setdtime(value);
    else if (name === "select") setselect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputtext || !stime || !dtime || !select) {
      alert("Please fill in all the details");
      return;
    }
    onSubmit({
      id: uuidv4(),
      inputtext: inputtext,
      stime: stime,
      dtime: dtime,
      select: select,
    });

    setinputtext("");
    setstime("");
    setdtime("");
    setselect("");
    closeTask(false);
  };

  return (
    <div>
      <div className="AddtaskBG">
        <div className="ADDtask">
          <div className="Theading">
            <div className="title">Add new task</div>
            <div className="CloseBtn">
              <button onClick={() => closeTask(false)}>X</button>
            </div>
          </div>
          <div className="body">
            <form className="form" onSubmit={handleSubmit} id="taskForm">
              <div className="Taskname">
                <label className="tasknameheading">Name of the Task</label>
                <input
                  className="taskinput"
                  type="text"
                  placeholder="Text"
                  value={inputtext}
                  name="inputtext"
                  onChange={handleChange}
                />
              </div>
              <div className="TaskTime">
                <div className="starttime">
                  <label>Start date</label>
                  <input
                    className="DDinputfield"
                    type="date"
                    placeholder="DD/MM/YYYY"
                    value={stime}
                    name="stime"
                    onChange={handleChange}
                  />
                </div>
                <div className="deadline">
                  <label>Deadline</label>
                  <input
                    className="DDinputfield"
                    type="date"
                    placeholder="DD/MM/YYYY"
                    value={dtime}
                    name="dtime"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="Taskstatus">
                <div className="status">Status</div>
                <select
                  value={select}
                  onChange={(e) => setselect(e.target.value)}
                  name="select"
                >
                  <option className="opt">To Do</option>
                  <option className="opt">In Progress</option>
                  <option className="opt">In Review</option>
                  <option className="opt">Completed</option>
                </select>
              </div>
            </form>
          </div>
          <div className="footer">
            <button onClick={() => closeTask(false)} className="Cancel">
              Cancel
            </button>
            <button className="ADD" form="taskForm" type="submit">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

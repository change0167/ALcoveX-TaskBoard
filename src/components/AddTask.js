import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ closeTask, democard }) {
  const [inputtext, setinputtext] = useState("");
  const [stime, setstime] = useState("");
  const [dtime, setdtime] = useState("");
  const [select, setselect] = useState("");
  const [emptytask, setempty] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputtext") setinputtext(value);
    else if (name === "stime") setstime(value);
    else if (name === "dtime") setdtime(value);
    else if (name === "select") setselect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputtext || !stime || !dtime) {
      setempty(true);
      return;
    }
    democard(true);
    setinputtext("");
    setstime("");
    setdtime("");
    setselect("");
    setempty(false);
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
                {emptytask && (
                  <div className="noinput">Please enter the task name</div>
                )}
              </div>
              <div className="TaskTime">
                <div class="timing">
                  <div className="starttime">
                    <label>Start date</label>
                    <input
                      className="DDinputfield"
                      type="date"
                      placeholder="DD/MM/YYYY"
                      value={stime}
                      name="stime"
                      onChange={handleChange}
                    />{" "}
                    {emptytask && (
                      <div className="noinput">Please enter start time</div>
                    )}
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
                    />{" "}
                    {emptytask && (
                      <div className="noinput">Please enter deadline</div>
                    )}
                  </div>
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
            <button
              className="ADD"
              form="taskForm"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

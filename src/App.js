import Sidebar from "./components/Sidebar";
import "./App.css";
import React, { useState } from "react";
import "./components/AddTask.css";
import AddTask from "./components/AddTask";
import TaskCards from "./components/TaskCards";
function App() {
  const [Task, setTask] = useState(false);
  const [Todo, setTodo] = useState(false);
  const [InProg, setInProg] = useState(false);
  const [InRev, setInRev] = useState(false);
  const [Comp, setComp] = useState(false);

  return (
    <div className="App">
      <>
        <div className="layout">
          <Sidebar />
          <div className="MyProjects">
            <div className="heading">
              {Task ? <div>Freelance Projects </div> : <div>My Projects </div>}
            </div>

            <div className="container">
              <div className="column1">
                <div className="todo">{" \u25CF To Do"}</div>
                {Task && <TaskCards />}
                <button
                  className="todoadd"
                  onClick={() => {
                    setTodo(true);
                  }}
                >
                  + Add new
                </button>
                {Todo && <AddTask closeTask={setTodo} democard={setTask} />}
              </div>
              <div className="column2">
                <div className="inprog">{" \u25CF In Progress"}</div>
                <button
                  className="inprogadd"
                  onClick={() => {
                    setInProg(true);
                  }}
                >
                  + Add new
                </button>
                {InProg && <AddTask closeTask={setInProg} />}
              </div>
              <div className="column3">
                <div className="inrev">{" \u25CF In Review"}</div>
                <button
                  className="inrevadd"
                  onClick={() => {
                    setInRev(true);
                  }}
                >
                  + Add new
                </button>
                {InRev && <AddTask closeTask={setInRev} />}
              </div>
              <div className="column4">
                <div className="comp">{" \u25CF Completed"}</div>
                <button
                  className="completedadd"
                  onClick={() => {
                    setComp(true);
                  }}
                >
                  + Add new
                </button>
                {Comp && <AddTask closeTask={setComp} />}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;

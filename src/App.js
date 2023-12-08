import Sidebar from "./components/Sidebar";
import "./App.css";
import AddButton from "./components/AddButton";
import TaskCards from "./components/TaskCards";
function App() {
  return (
    <div className="App">
      <>
        <div class="layout">
          <Sidebar />
          <div class="MyProjects">
            <div class="heading">My Projects</div>
            <div className="container">
              <div className="column1">
                Column 2
                <AddButton />
              </div>
              <div className="column2">Column 3</div>
              <div className="column3">Column 4</div>
              <div className="column4">Column 5</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;

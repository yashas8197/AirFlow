import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="display-6 text-center">Task Manager</h1>
      </div>
      <TaskList />
    </div>
  );
}

export default App;

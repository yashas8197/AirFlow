import { useState } from "react";
import useFetch from "../utils/useFetch";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";

const TaskList = () => {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { data, loading, error } = useFetch(
    "https://3ab568f0-8e65-4391-a363-ed60547be138-00-2mecytqoyyfst.sisko.replit.dev:3002/tasks"
  );

  if (data === null) return;

  const filterData = () => {
    return data
      .filter((task) => {
        // Filter based on selected priority
        return selectedPriority ? task.priority === +selectedPriority : true;
      })
      .sort((task1, task2) => {
        //Filter bases on sort order
        return sortOrder === "asc"
          ? task1.priority - task2.priority
          : sortOrder === "desc"
          ? task2.priority - task1.priority
          : true;
      });
  };

  const filteredData = filterData();

  return (
    <div
      className="container rounded vh-100"
      style={{ border: "1px solid grey" }}
    >
      <div
        data-bs-theme="dark"
        className="d-flex justify-content-between w-75 container my-5"
      >
        <div>
          <select
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="form-select"
            defaultValue="Filter"
          >
            <option disabled>Filter</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>

        <div>
          <label className="px-2">Sort By Priority: </label>
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill mx-1"
            onClick={() => setSortOrder("asc")}
          >
            Low to High
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill mx-1"
            onClick={() => setSortOrder("desc")}
          >
            High to Low
          </button>
        </div>

        <div>
          <AddTaskModal />
        </div>
      </div>

      <div className="w-75 container">
        <ul className="list-group ">
          {filteredData.map((task) => (
            <li
              key={task.taskId}
              className="list-group-item my-1 rounded-1"
              style={{ backgroundColor: "#262626", border: "1px solid grey" }}
            >
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;

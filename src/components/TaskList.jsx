import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";
import { filterByPriority, getAllTasks, sortByPriority } from "../actions";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks) || [];

  const serverUrl = localStorage.getItem("serverUrl");

  useEffect(() => {
    if (serverUrl !== null) {
      dispatch(getAllTasks(serverUrl));
    }
  }, [serverUrl]);

  if (tasks === null) return;

  const handleClickSort = () => {
    dispatch(sortByPriority(serverUrl));
  };

  const handleOnChange = async (e) => {
    const priorityValue = e.target.value;

    try {
      const response = await fetch(
        serverUrl + `tasks/filter-by-priority?priority=${priorityValue}`
      );

      const data = await response.json();

      dispatch(filterByPriority(data));
    } catch (error) {
      console.log(error);
    }
  };

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
            onChange={handleOnChange}
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
            onClick={handleClickSort}
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
          {tasks.map((task) => (
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

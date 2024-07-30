import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../actions";
import Modal from "react-bootstrap/Modal";

function AddTaskModal() {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const getNewTaskId = () => {
    if (tasks.length === 0) return 1;

    const ids = tasks.map((task) => task.taskId);

    const maxId = Math.max(...ids);

    return maxId + 1;
  };

  const serverUrl = localStorage.getItem("serverUrl");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    let taskId = getNewTaskId();
    dispatch(addTasks(serverUrl, priority, taskName, taskId));

    handleClose();
    setTaskName("");
    setPriority("");
  };

  const getButtonStyle = (value) => ({
    backgroundColor: priority === value ? "#585858" : "#343a40",
    color: "#ffffff",
    border: `2px solid ${priority === value ? "#d3d3d3" : "#343a40"}`,
    borderRadius:
      value === "1" ? "8px 0 0 8px" : value === "3" ? "0 8px 8px 0" : "0",
  });

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="btn btn-secondary px-4 rounded-3"
      >
        <i className="bi bi-plus-lg"></i>
        <span className="mx-1">Add Task</span>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <p className="mx-2 my-3 h5">Set Priority</p>
          <div
            className="btn-group d-flex justify-content-center mb-4 mx-2"
            style={{ backgroundColor: "#343a40" }}
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn px-2"
              style={getButtonStyle("1")}
              value="1"
              onClick={(e) => setPriority(e.target.value)}
            >
              High
            </button>
            {priority !== "1" && priority !== "2" && (
              <span
                className="my-1"
                style={{
                  borderLeft: "2px solid #686868",
                  padding: "2px",
                }}
              ></span>
            )}

            <button
              type="button"
              className="btn px-2"
              style={getButtonStyle("2")}
              value="2"
              onClick={(e) => setPriority(e.target.value)}
            >
              Medium
            </button>
            {priority !== "2" && priority !== "3" && (
              <span
                className="my-1"
                style={{
                  borderLeft: "2px solid #686868",
                  padding: "2px",
                }}
              ></span>
            )}
            <button
              type="button"
              className="btn px-2"
              style={getButtonStyle("3")}
              value="3"
              onClick={(e) => setPriority(e.target.value)}
            >
              Low
            </button>
          </div>

          <div className="my-5">
            <p className="mx-2 my-3 h5">Task Name</p>
            <input
              className="form-control ms-2 py-2"
              placeholder="Eg: Fix bugs"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="w-100 d-flex justify-content-center mb-4">
            <button
              className="btn btn-outline-secondary rounded-3 mx-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="btn btn-secondary rounded-3 mx-2"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTaskModal;

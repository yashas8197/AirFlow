import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../actions";
import Modal from "react-bootstrap/Modal";

function AddTaskModal() {
  const [show, setShow] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://3ab568f0-8e65-4391-a363-ed60547be138-00-2mecytqoyyfst.sisko.replit.dev:3002/tasks/add?taskId=${taskId}&text=${taskName}&priority=${priority}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed To Add Recipe");
      }

      dispatch(addTasks(data));

      handleClose();
      setTaskId("");
      setTaskName("");
      setPriority("");
    } catch (error) {
      console.log(error);
    }
  };

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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="mx-2 my-3 h5">Set Priority</p>
          <div className="">
            <div
              className="btn-group d-flex justify-content-center mb-4"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-secondary rounded-start-pill px-4"
                value="1"
                onClick={(e) => setPriority(e.target.value)}
              >
                High
              </button>
              <span className="border border-white"></span>
              <button
                type="button"
                className="btn btn-secondary px-4"
                value="2"
                onClick={(e) => setPriority(e.target.value)}
              >
                Medium
              </button>
              <span className="border border-white"></span>
              <button
                type="button"
                className="btn btn-secondary rounded-end-pill px-4"
                value="3"
                onClick={(e) => setPriority(e.target.value)}
              >
                Low
              </button>
            </div>
          </div>

          <div className="my-5">
            <p className="mx-2 my-3 h5">Task Id</p>
            <input
              type="number"
              className="form-control mx-2 py-2"
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
            />
          </div>

          <div className="my-5">
            <p className="mx-2 my-3 h5">Task Name</p>
            <input
              className="form-control mx-2 py-2"
              placeholder="Eg: Fix bugs"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex justify-content-center">
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModal;

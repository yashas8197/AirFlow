import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddTaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              >
                High
              </button>
              <span className="border border-white"></span>
              <button type="button" className="btn btn-secondary px-4">
                Medium
              </button>
              <span className="border border-white"></span>
              <button
                type="button"
                className="btn btn-secondary rounded-end-pill px-4"
              >
                Low
              </button>
            </div>
          </div>

          <div className="my-5">
            <p className="mx-2 my-3 h5">Task Name</p>
            <input
              className="form-control mx-2 py-2"
              placeholder="Eg: Fix bugs"
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
            <button className="btn btn-secondary rounded-3 mx-2">Save</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModal;

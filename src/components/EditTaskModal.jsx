import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editTaskByPriority, editTaskByText } from "../actions";

function EditTaskModal({ taskText, taskPriority, taskId }) {
  const [text, setText] = useState(taskText);
  const [priority, setPriority] = useState(taskPriority);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serverUrl = localStorage.getItem("serverUrl");
  const handleEdit = () => {
    dispatch(editTaskByPriority(priority, taskId, serverUrl));
    dispatch(editTaskByText(text, taskId, serverUrl));
    handleClose();
  };

  const getButtonStyle = (value) => ({
    backgroundColor: priority === +value ? "#585858" : "#343a40",
    color: "#ffffff",
    border: `2px solid ${priority === value ? "#d3d3d3" : "#343a40"}`,
    borderRadius:
      value === "1" ? "8px 0 0 8px" : value === "3" ? "0 8px 8px 0" : "0",
  });

  return (
    <>
      <button
        className="rounded-circle mx-2 btn btn-secondary"
        onClick={handleShow}
      >
        <i className="bi bi-pencil"></i>
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
              {priority !== 1 && priority !== 2 && (
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
              {priority !== 2 && priority !== 3 && (
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
          </div>

          <div className="my-5">
            <p className="mx-2 my-3 h5">Task Name</p>
            <input
              className="form-control mx-2 py-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
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
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTaskModal;

import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const TaskItem = ({ task }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="h4">{task.text}</p>
          <div>
            {task.priority === 1 ? (
              <button
                type="button"
                className="btn btn-outline-danger rounded-pill px-3 py-0"
              >
                High
              </button>
            ) : task.priority === 2 ? (
              <button
                type="button"
                className="btn btn-outline-warning rounded-pill px-3 py-0"
              >
                Medium
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success rounded-pill px-3 py-0"
              >
                Low
              </button>
            )}
          </div>
        </div>
        <div>
          <button className="rounded-circle mx-2">
            <i className="bi bi-pencil"></i>
          </button>

          <button className="rounded-circle" onClick={() => setModalShow(true)}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
      <DeleteConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskItem;

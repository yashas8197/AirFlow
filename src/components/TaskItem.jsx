import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const handleTrashClick = (taskId) => {
    setModalShow(true);
    setTaskId(taskId);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="h4">
            {task.taskId}. {task.text}
          </p>
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
          <EditTaskModal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            taskId={task.taskId}
            taskText={task.text}
            taskPriority={task.priority}
          />

          <button
            className="rounded-circle btn text-light-emphasis"
            style={{ backgroundColor: "#525252" }}
            onClick={() => handleTrashClick(task.taskId)}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
      <DeleteConfirmationModal
        show={modalShow}
        taskId={taskId}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskItem;

import Modal from "react-bootstrap/Modal";
import { deleteTask } from "../actions";
import { useDispatch } from "react-redux";

function DeleteConfirmationModal({ show, onHide, taskId }) {
  const dispatch = useDispatch();

  const serverUrl = localStorage.getItem("serverUrl");

  const handleDelete = async () => {
    const response = await fetch(serverUrl + `tasks/delete?taskId=${taskId}`);
    const data = await response.json();
    dispatch(deleteTask(data));
    onHide();
  };
  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <Modal.Body>
          <h5 className="text-center mt-5">
            Are you sure you want to delete the task?
          </h5>
        </Modal.Body>
        <div className="d-flex justify-content-center mb-5">
          <button
            className="btn btn-outline-secondary rounded-3 px-4 mx-2"
            onClick={onHide}
          >
            No
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-outline-secondary rounded-3 px-4 mx-2"
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;

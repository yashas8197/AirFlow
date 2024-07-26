import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteConfirmationModal(props) {
  return (
    <Modal
      {...props}
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
            onClick={props.onHide}
          >
            No
          </button>
          <button className="btn btn-outline-secondary rounded-3 px-4 mx-2">
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;

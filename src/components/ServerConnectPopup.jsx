import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ServerConnectPopup(props) {
  const [serverUrl, setServerUrl] = useState("");
  const saveChange = () => {
    props.onHide();
    localStorage.setItem("serverUrl", serverUrl);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      backdrop="static"
    >
      <Modal.Body>
        <h5 className="m-0">Connect your Express Server</h5>
        <p className="text-secondary mb-4">
          Enter your server URL. Click save when you're done.
        </p>
        <div className="mb-4 d-flex align-items-center">
          <label className="fw-bold me-2">Server URL</label>
          <div className="w-75">
            <input
              className="form-control"
              type="text"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="https://www.example.com/"
            />
          </div>
        </div>
        <div className="text-end">
          <Button variant="secondary" onClick={saveChange}>
            Save Changes
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ServerConnectPopup;

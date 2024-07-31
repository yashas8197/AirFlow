import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditServerUrl(props) {
  const [serverUrl, setServerUrl] = useState(localStorage.getItem("serverUrl"));
  const inputRef = useRef(null);

  const saveChange = () => {
    localStorage.setItem("serverUrl", serverUrl);
    props.onHide();
  };

  useEffect(() => {
    if (props.show && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [props.show]);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
              required
              className="form-control"
              type="text"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="https://www.example.com/"
              ref={inputRef}
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

export default EditServerUrl;

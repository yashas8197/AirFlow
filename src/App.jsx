import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import ServerConnectPopup from "./components/ServerConnectPopup";
import EditServerUrl from "./components/EditServerUrl";

function App() {
  const [modalShow, setModalShow] = useState(true);
  const [show, setShow] = useState(true);
  const [showEditServerModal, setShowEditServerModal] = useState(false);

  useEffect(() => {
    const serverUrl = localStorage.getItem("serverUrl");

    if (serverUrl !== null) {
      setShow(false);
    }
  }, []);

  const handleHideModal = () => {
    setModalShow(false);
    setShow(false);
  };

  const handleEditServerUrl = () => {
    setShowEditServerModal(true);
  };

  const handleHideEditServerUrlModal = () => {
    setShowEditServerModal(false);
  };

  return (
    <div className="container">
      <div className="py-5 d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-6 mx-4">Task Manager</h1>
        </div>
        <div>
          <button
            className="btn btn-outline-secondary rounded-3 mx-2 text-body"
            onClick={handleEditServerUrl}
          >
            Edit Server URL
          </button>
        </div>
      </div>
      <TaskList />
      {show && <ServerConnectPopup show={modalShow} onHide={handleHideModal} />}
      {showEditServerModal && (
        <EditServerUrl
          show={showEditServerModal}
          onHide={handleHideEditServerUrlModal}
        />
      )}
    </div>
  );
}

export default App;

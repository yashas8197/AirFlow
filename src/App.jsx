import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import ServerConnectPopup from "./components/ServerConnectPopup";

function App() {
  const [modalShow, setModalShow] = useState(true);
  const [show, setShow] = useState(true);

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

  return (
    <div className="container">
      <div className="py-5">
        <h1 className="display-6 text-center">Task Manager</h1>
      </div>
      <TaskList />
      {show && <ServerConnectPopup show={modalShow} onHide={handleHideModal} />}
    </div>
  );
}

export default App;

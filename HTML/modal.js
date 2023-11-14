import "./style.css";

import React, { useState } from "react";

const Modal = ({ show, onClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>Close</button>
      </section>
    </div>
  );
};

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Open Modal</button>
      <Modal show={showModal} onClose={toggleModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App;

// ConfigModal.js
import React from "react";
import Modal from "react-modal";

const ConfigModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Enter Username and Password"
      ariaHideApp={false}
    >
      <h2>Enter Username and Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <br />
        <button type="button" onClick={onRequestClose}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default ConfigModal;

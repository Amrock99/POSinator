import React, { useState } from "react";
import "./App.css";
import "./components/LeftPanel";
import Emulator from "./components/Emulator";
import LeftPanel from "./components/LeftPanel";

import ConfigModal from "./components/ConfigModal";

import Modal from "react-modal";

function App() {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfigSubmit = (username, password) => {
    console.log("Username:", username);
    console.log("Password:", password);
    closeModal();
  };

  return (
    <div className="container">
      <LeftPanel setData={setData} openModal={openModal} />
      <ConfigModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSubmit={handleConfigSubmit}
      />
      <Emulator data={data} />
    </div>
  );
}
export default App;

//

// Ensure the app element is set for accessibility

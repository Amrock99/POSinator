import React, { useState } from "react";
import "./App.css";
import "./components/LeftPanel";
import Emulator from "./components/Emulator";
import LeftPanel from "./components/LeftPanel";
import axios from "axios";

import ConfigModal from "./components/ConfigModal";

function App() {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfigSubmit = async (username, password) => {
    await handleConfigChange();
    return;
    await handleSubmitReq(username, password);
    // closeModal();
  };

  const handleConfigChange = async (f) => {
    const response = await axios.get(
      "https://4c62-121-242-131-242.ngrok-free.app/fetch/file_23c022b13c",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  };

  const handleSubmitReq = async (username, password) => {
    console.log({ username, password });
    const response = await axios.post(
      "https://demo.ezetap.com/api/2.0/ca/app/config/get",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie:
            "jsessionid=3bd59052-ca5d-4e08-83de-5091219236ba; jsessionid=b82f8bd0-655c-4cb3-bffc-8fd020f56529",
        },
        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(`File uploaded successfully: ${response.data}`);
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

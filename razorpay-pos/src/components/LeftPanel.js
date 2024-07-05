//code
import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import axios from "axios";

const LeftPanel = ({ setData, data, openModal }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleToggle = () => {
    try {
      const parsedJson = JSON.parse(jsonInput.replace(/[\\/]/g, "")); // Remove slashes and parse
      const beautifiedJson = JSON.stringify(parsedJson, null, 2); // Beautify JSON with 2 spaces indentation
      setFormattedJson(beautifiedJson);
      setData(parsedJson);
    } catch (error) {
      alert("Invalid JSON");
    }
  };

  const handleFileChange = async (f) => {
    const file = f.target.files[0];
    setSelectedFile(file);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("text", "4204201231");
    formData.append("file", "123456Q");

    const response = await axios.post(
      "https://4c62-121-242-131-242.ngrok-free.app/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(`File uploaded successfully: ${response.data}`);
  };

  useEffect(() => {
    if (data) {
      const beautifiedJson = JSON.stringify(data, null, 2); // Beautify JSON with 2 spaces indentation
      setFormattedJson(beautifiedJson);
      setJsonInput(beautifiedJson);
    }
  }, [data]);

  return (
    <div className="left-panel">
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            id="csv"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button style={{ cursor: "pointer", marginRight: "10px" }}>
            <label htmlFor="csv" style={{ cursor: "pointer" }}>
              Upload CSV
            </label>
          </button>
          <button onClick={openModal} style={{ cursor: "pointer" }}>
            Get Config
          </button>
        </div>
      </div>

      <div>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste JSON here"
        />
        <button className="toggle-button" onClick={handleToggle}>
          Render
        </button>
        <br />

        <label>
          <h1>Formatted JSON</h1>
        </label>

        {formattedJson && (
          <ReactJson
            src={JSON.parse(formattedJson)}
            collapsed={true}
            style={{ marginTop: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default LeftPanel;

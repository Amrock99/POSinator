//code
import React, { useState } from "react";
import ReactJson from "react-json-view";

const LeftPanel = ({ setData, onUploadCSV, onGetConfig, openModal }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");

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

  return (
    <div className="left-panel">
      {/* <input type="text" placeholder="UserName" />
      <input type="password" placeholder="Password" /> */}
      {/* <div>
        <input id="csv" type="file" style={{ display: "none" }} />
        <button style={{ cursor: "pointer" }}>
          <label for="csv">Upload CSV</label>
        </button>

        <br />
        <button onClick={openModal}>Get Config</button>
      </div> */}
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input id="csv" type="file" style={{ display: "none" }} />
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

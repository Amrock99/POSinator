//code
import React, { useState } from "react";
import ReactJson from "react-json-view";

const LeftPanel = ({ setData, onUploadCSV, onGetConfig }) => {
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
      <input type="text" placeholder="UserName" />
      <input type="password" placeholder="Password" />
      <input id="csv" type="file" style={{ display: "none" }} />
      <button style={{ cursor: "pointer" }}>
        <label for="csv">Upload CSV</label>
      </button>
      {/* <input type="file" id="selectedFile" style={{ display: "none" }} />
        <input
          type="button"
          value="Browse..."
          onclick="document.getElementById('selectedFile').click();"
        /> */}
      <br />
      <button>Get Config</button>
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

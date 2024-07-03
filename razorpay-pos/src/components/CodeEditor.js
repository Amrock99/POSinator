import React, { useState } from "react";

const CodeEditor = ({ onRun }) => {
  const [code, setCode] = useState("// Write your code here");
  const [formattedCode, setFormattedCode] = useState("");

  const handleFormat = () => {
    let formatted = code;

    try {
      // Remove both forward and backward slashes from JSON-like strings
      formatted = code.replace(/\\/g, "").replace(/\//g, "");
    } catch (error) {
      console.error("Error processing code:", error);
    }

    setFormattedCode(formatted);
  };

  const handleRun = () => {
    onRun(code);
  };

  return (
    <div className="code-editor">
      <h2>Code Editor</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="50"
      />
      <br />
      <button onClick={handleFormat}>Format Code</button>
      <button onClick={handleRun}>Run Code</button>
      <h3>Formatted Code Output:</h3>
      <pre>{formattedCode}</pre>
    </div>
  );
};

export default CodeEditor;

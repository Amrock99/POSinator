import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [formattedCode, setFormattedCode] = useState("");

  const handleFormat = () => {
    // Simple formatting logic (indents each line)
    const formatted = code
      .split("\n")
      .map((line) => "  " + line.trim())
      .join("\n");
    setFormattedCode(formatted);
  };

  return (
    <div>
      <button onClick={handleFormat}>Format Code</button>
      <h2>Code Editor</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="50"
      />
      <br />

      <h3>Formatted Code Output:</h3>
      <pre>{formattedCode}</pre>
    </div>
  );
};

export default CodeEditor;

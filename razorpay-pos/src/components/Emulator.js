import React, { useState } from "react";

const Emulator = ({ code }) => {
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Evaluate the code and capture the result
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div>
      <h2>Emulator Output</h2>
      <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default Emulator;

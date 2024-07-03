// import React, { useState } from "react";

// const CodeEditor = ({ onRun }) => {
//   const [code, setCode] = useState("// Write your code here");
//   const [formattedCode, setFormattedCode] = useState("");

//   const handleFormat = () => {
//     let formatted = code;

//     try {
//       // Parse the JSON to remove escaped characters and then stringify it with indentation
//       const parsedJson = JSON.parse(code);
//       formatted = JSON.stringify(parsedJson, null, 2); // 2-space indentation
//     } catch (error) {
//       console.error("Error processing code:", error);
//     }

//     setFormattedCode(formatted);
//   };

//   const handleRun = () => {
//     onRun(code);
//   };

//   return (
//     <div className="code-editor">
//       <h2>Code Editor</h2>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         rows="10"
//         cols="50"
//       />
//       <br />
//       <button onClick={handleFormat}>Format Code</button>
//       <button onClick={handleRun}>Run Code</button>
//       <h3>Formatted Code Output:</h3>
//       <pre className="formatted-output">{formattedCode}</pre>
//     </div>
//   );
// };

// export default CodeEditor;
import React from "react";

const Emulator = () => {
  return (
    <div className="right-panel">
      <div className="button">E Chalan</div>
      <div className="button">Helmet</div>
      <div className="button">Number Plate</div>
      <div className="button">Drink n Drive</div>
      <div className="button">Pillon Helmet</div>
      <button className="button-color">Button Color</button>
      <button className="background-color">Background Color</button>
    </div>
  );
};

export default Emulator;

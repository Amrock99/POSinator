import React, { useState } from "react";

const LeftPanel = ({ setData }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");

  const handleToggle = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
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
      <button>Get Config</button>
      <div>
        <button className="toggle-button" onClick={handleToggle}>
          Toggle
        </button>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter JSON here"
        />
      </div>
      <select className="dropdown">
        <option>Get Version</option>
      </select>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
      <h3>Formatted JSON Output:</h3>
      <textarea
        value={formattedJson}
        readOnly
        placeholder="Formatted JSON will appear here"
      />
    </div>
  );
};

// export default LeftPanel;

//code 2
// import React, { useState } from "react";

// const LeftPanel = () => {
//   const [formattedCode, setFormattedCode] = useState("");

//   const handleToggle = () => {
//     const json = {
//       a: "a/b/c",
//     };
//     try {
//       const formatted = JSON.stringify(json, null, 2).replace(/\\/g, "");
//       setFormattedCode(formatted);
//     } catch (error) {
//       console.error("Invalid JSON", error);
//     }
//   };

//   return (
//     <div className="left-panel">
//       <input type="text" placeholder="UserName" />
//       <input type="password" placeholder="Password" />
//       <button>Get Config</button>
//       <div>
//         <button className="toggle-button" onClick={handleToggle}>
//           Toggle
//         </button>
//         <textarea value={formattedCode} readOnly></textarea>
//       </div>
//       <select className="dropdown">
//         <option>Get Version</option>
//       </select>
//       <input type="text" placeholder="Name" />
//       <input type="text" placeholder="Description" />
//       <input type="text" placeholder="User" />
//       <input type="password" placeholder="Password" />
//     </div>
//   );
// };

// export default LeftPanel;

//code 3
// import React, { useState } from "react";

// const LeftPanel = () => {
//   const [formattedCode, setFormattedCode] = useState("");

//   const handleToggle = () => {
//     const json = {
//       a: "a/b/c",
//     };
//     try {
//       const formatted = JSON.stringify(json, null, 2).replace(/\\/g, "");
//       setFormattedCode(formatted);
//     } catch (error) {
//       console.error("Invalid JSON", error);
//     }
//   };

//   return (
//     <div className="left-panel">
//       <input type="text" placeholder="UserName" />
//       <input type="password" placeholder="Password" />
//       <button>Get Config</button>
//       <div>
//         <button className="toggle-button" onClick={handleToggle}>
//           Toggle
//         </button>
//         <textarea value={formattedCode} readOnly></textarea>
//       </div>
//       <select className="dropdown">
//         <option>Get Version</option>
//       </select>
//       <input type="text" placeholder="Name" />
//       <input type="text" placeholder="Description" />
//       <input type="text" placeholder="User" />
//       <input type="password" placeholder="Password" />
//     </div>
//   );
// };

export default LeftPanel;

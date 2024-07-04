// import React, { useState } from "react";
// import ReactJson from "react-json-view";

// const LeftPanel = ({ setData }) => {
//   const [jsonInput, setJsonInput] = useState("");
//   const [formattedJson, setFormattedJson] = useState("");

//   const handleToggle = () => {
//     try {
//       const parsedJson = JSON.parse(jsonInput);
//       const beautifiedJson = JSON.stringify(parsedJson, null, 2); // Beautify JSON with 2 spaces indentation
//       setFormattedJson(beautifiedJson);
//       setData(parsedJson);
//     } catch (error) {
//       alert("Invalid JSON");
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
//         <textarea
//           value={jsonInput}
//           onChange={(e) => setJsonInput(e.target.value)}
//           placeholder="Enter JSON here"
//         />
//       </div>
//       <select className="dropdown">
//         <option>Get Version</option>
//       </select>
//       <input type="text" placeholder="Name" />
//       <input type="text" placeholder="Description" />
//       <input type="text" placeholder="User" />
//       <input type="password" placeholder="Password" />
//       <h3>Formatted JSON Output:</h3>
//       {formattedJson === "" ? (
//         ""
//       ) : (
//         <ReactJson src={JSON.parse(formattedJson)} />
//       )}
//     </div>
//   );
// };

// // export default LeftPanel;

// //code 2
// // import React, { useState } from "react";

// // const LeftPanel = () => {
// //   const [formattedCode, setFormattedCode] = useState("");

// //   const handleToggle = () => {
// //     const json = {
// //       a: "a/b/c",
// //     };
// //     try {
// //       const formatted = JSON.stringify(json, null, 2).replace(/\\/g, "");
// //       setFormattedCode(formatted);
// //     } catch (error) {
// //       console.error("Invalid JSON", error);
// //     }
// //   };

// //   return (
// //     <div className="left-panel">
// //       <input type="text" placeholder="UserName" />
// //       <input type="password" placeholder="Password" />
// //       <button>Get Config</button>
// //       <div>
// //         <button className="toggle-button" onClick={handleToggle}>
// //           Toggle
// //         </button>
// //         <textarea value={formattedCode} readOnly></textarea>
// //       </div>
// //       <select className="dropdown">
// //         <option>Get Version</option>
// //       </select>
// //       <input type="text" placeholder="Name" />
// //       <input type="text" placeholder="Description" />
// //       <input type="text" placeholder="User" />
// //       <input type="password" placeholder="Password" />
// //     </div>
// //   );
// // };

// // export default LeftPanel;

// //code 3
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

//leftPanel.js;
import React, { useState } from "react";
import ReactJson from "react-json-view";

const LeftPanel = ({ setData }) => {
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
      <div className="left-poanel">
        <button className="toggle-button">Upload CSV</button>
      </div>
      <br />
      <button>Get Config</button>
      <div>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste JSON here"
        />
        <br />
        <button className="toggle-button" onClick={handleToggle}>
          Render
        </button>
        <div>
          <h1>formatted</h1>
        </div>
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

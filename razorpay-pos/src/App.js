import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Emulator from "./components/Emulator";
import { useState } from "react";

const App = () => {
  const [codeToRun, setCodeToRun] = useState("");

  const handleRunCode = (code) => {
    setCodeToRun(code);
  };

  return (
    <div className="app-container">
      <div className="editor-container">
        <CodeEditor onRun={handleRunCode} />
      </div>
      <div className="emulator-container">
        <Emulator code={codeToRun} />
      </div>
    </div>
  );
};

export default App;
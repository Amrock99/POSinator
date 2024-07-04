import React, { useState } from "react";
import "./App.css";
import "./components/LeftPanel";
import Emulator from "./components/Emulator";
import LeftPanel from "./components/LeftPanel";

function App() {
  const [data, setData] = useState();

  return (
    <div className="container">
      <LeftPanel setData={setData} />
      <Emulator data={data} />
    </div>
  );
}
export default App;

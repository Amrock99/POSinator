import React from "react";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <input type="text" placeholder="UserName" />
      <input type="password" placeholder="Password" />
      <button>Get Config</button>
      <div>
        <button className="toggle-button">toggle</button>
        <textarea></textarea>
      </div>
      <select className="dropdown">
        <option>Get Version</option>
      </select>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
    </div>
  );
};

export default LeftPanel;

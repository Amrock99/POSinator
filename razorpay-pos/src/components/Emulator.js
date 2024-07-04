// import React from "react";

// const Emulator = () => {
//   return (
//     <div className="right-panel">
//       <div className="button">E Chalan</div>
//       <div className="button">Helmet</div>
//       <div className="button">Number Plate</div>
//       <div className="button">Drink n Drive</div>
//       <div className="button">Pillon Helmet</div>
//       <button className="button-color">Button Color</button>
//       <button className="background-color">Background Color</button>
//     </div>
//   );
// };

// export default Emulator;

//Code 2
// import React from "react";

// const Emulator = () => {
//   return (
//     <div className="emulator">
//       <iframe
//         title="Emulator"
//         src="https://www.browserstack.com/app-live"
//         width="100%"
//         height="100%"
//         style={{ border: "none" }}
//       ></iframe>
//     </div>
//   );
// };

// export default Emulator;

//code 3
// import React from "react";

// const Emulator = () => {
//   return (
//     <div className="emulator">
//       <div className="emulator-screen">
//         <div className="status-bar">
//           <span className="time">12:00</span>
//           <span className="battery">🔋</span>
//         </div>
//         <div className="app-container">
//           <div className="app-icon">📱</div>
//           <div className="app-icon">🌐</div>
//           <div className="app-icon">📞</div>
//           <div className="app-icon">📧</div>
//         </div>
//         <div className="home-button"></div>
//       </div>
//     </div>
//   );
// };

// export default Emulator;

//code 4
import React from "react";

const widgets = [
  {
    value: "Button 1",
  },
  {
    value: "Button 2",
  },
  {
    value: "Button 3",
  },
];

const Button = (widgets) => {
  return <button>{widgets.value}</button>;
};

const Emulator = () => {
  return (
    <div className="emulator">
      <div className="android-emulator">
        <div className="emulator-screen">
          <div className="status-bar">
            <span className="time">12:00</span>
            <span className="battery">🔋</span>
          </div>
          <div className="app-container">
            <div className="app-icon">📱</div>
            <div className="app-icon">🌐</div>
            <div className="app-icon">📞</div>
            <div className="app-icon">📧</div>
          </div>
          <div className="home-button"></div>
        </div>
        <div className="android-frame">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Emulator;

// code 1
// import React, { useEffect, useState } from "react";
// import Layout from "../assets/A50-03.png";
// import Layout2 from "../assets/A910.png";
// import Select from "react-select";
// const Button = ({ title, onClick, style }) => {
//   return (
//     <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
//       {title}
//     </button>
//   );
// };
// const Emulator = ({ data }) => {
//   const [screens, setScreens] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [layoutIndex, setLayoutIndex] = useState(0);
//   const layouts = [Layout, Layout2];
//   const options = [
//     { value: 0, label: "Samsung A50" },
//     { value: 1, label: "Samsung A910" },
//   ];
//   function handleBack() {
//     if (index === 0) return;
//     setIndex((index) => (index -= 1));
//   }
//   function handleNext() {
//     if (index === screens.length - 1) return;
//     setIndex((index) => (index += 1));
//   }
//   useEffect(() => {
//     if (data && data.screens) setScreens(data.screens);
//   }, [data]);
//   return (
//     <div className="emulator">
//       <div style={{ width: "-webkit-fill-available", marginBottom: "16px" }}>
//         <Select
//           options={options}
//           onChange={(v) => setLayoutIndex(v.value)}
//           defaultInputValue={options[layoutIndex].label}
//         />
//       </div>
//       <div
//         className="android-emulator"
//         style={{
//           backgroundImage: `url("${layouts[layoutIndex]}")`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {screens.length === 0 ? (
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             No screens
//           </div>
//         ) : (
//           <div
//             style={{
//               position: "absolute",
//               top: "15%",
//               width: "70%",
//               height: "70%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "20px",
//               boxSizing: "border-box",
//             }}
//           >
//             <div style={{ flex: 1, textAlign: "center" }}>
//               <h2>{screens[index]["heading-text"]}</h2>
//             </div>
//             <div
//               style={{
//                 flex: 3,
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {screens[index].widgets.map((widget, i) => {
//                 if (widget.type === "BUTTON") {
//                   return (
//                     <Button
//                       key={i}
//                       title={widget["label-text"] ?? widget.value}
//                       style={{ marginBottom: "10px" }}
//                     />
//                   );
//                 } else if (widget.type === "LABEL-INPUT") {
//                   return (
//                     <div
//                       style={{
//                         width: "100%",
//                         margin: "8px 4px",
//                       }}
//                     >
//                       <input
//                         style={{
//                           width: "100%",
//                           padding: "8px",
//                           border: "1px solid lightgrey",
//                           borderRadius: "6px",
//                         }}
//                         placeholder={widget["label-text"]}
//                       />
//                     </div>
//                   );
//                 } else if (widget.type === "LABEL-LABEL") {
//                   return (
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         width: "100%",
//                       }}
//                     >
//                       <h4>{`${widget["text-left"]}`}</h4>
//                       <h4>{`${widget["text-right"]}`}</h4>
//                     </div>
//                   );
//                 } else return "";
//               })}
//             </div>
//             <div
//               style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "space-around",
//                 width: "100%",
//               }}
//             >
//               <Button
//                 title={"Back"}
//                 onClick={handleBack}
//                 style={{
//                   cursor: index === 0 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//               <Button
//                 title={"Next"}
//                 onClick={handleNext}
//                 style={{
//                   cursor: index === screens.length - 1 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Emulator;
//code 2
// import React, { useEffect, useState } from "react";
// import Layout from "../assets/A50-03.png";
// import Layout2 from "../assets/A910.png";
// import Select from "react-select";
// const Button = ({ title, onClick, style }) => {
//   return (
//     <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
//       {title}
//     </button>
//   );
// };
// const Emulator = ({ data }) => {
//   const [screens, setScreens] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [layoutIndex, setLayoutIndex] = useState(0);
//   const layouts = [Layout, Layout2];
//   const options = [
//     { value: 0, label: "Samsung A50" },
//     { value: 1, label: "Samsung A910" },
//   ];
//   function handleBack() {
//     if (index === 0) return;
//     setIndex((index) => index - 1);
//   }
//   function handleNext() {
//     if (index === screens.length - 1) return;
//     setIndex((index) => index + 1);
//   }
//   useEffect(() => {
//     if (data && data.screens) setScreens(data.screens);
//   }, [data]);
//   return (
//     <div className="emulator">
//       <div style={{ width: "100%", marginBottom: "16px" }}>
//         <Select
//           options={options}
//           onChange={(v) => setLayoutIndex(v.value)}
//           defaultValue={options[layoutIndex]}
//         />
//       </div>
//       <div
//         className="android-emulator"
//         style={{
//           backgroundImage: `url("${layouts[layoutIndex]}")`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {screens.length === 0 ? (
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             No screens
//           </div>
//         ) : (
//           <div
//             style={{
//               position: "absolute",
//               top: "15%",
//               width: "70%",
//               height: "70%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "20px",
//               boxSizing: "border-box",
//             }}
//           >
//             <div style={{ flex: 1, textAlign: "center" }}>
//               <h2>{screens[index]["heading-text"]}</h2>
//             </div>
//             <div
//               style={{
//                 flex: 3,
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {screens[index].widgets.map((widget, i) => {
//                 if (widget.type === "BUTTON") {
//                   return (
//                     <Button
//                       key={i}
//                       title={widget["label-text"] ?? widget.value}
//                       style={{ marginBottom: "10px" }}
//                     />
//                   );
//                 } else if (widget.type === "LABEL-INPUT") {
//                   return (
//                     <div
//                       key={i}
//                       style={{
//                         width: "100%",
//                         margin: "8px 4px",
//                       }}
//                     >
//                       <input
//                         style={{
//                           width: "100%",
//                           padding: "8px",
//                           border: "1px solid lightgrey",
//                           borderRadius: "6px",
//                         }}
//                         placeholder={widget["label-text"]}
//                       />
//                     </div>
//                   );
//                 } else if (widget.type === "LABEL-LABEL") {
//                   return (
//                     <div
//                       key={i}
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         width: "100%",
//                       }}
//                     >
//                       <h4>{widget["text-left"]}</h4>
//                       <h4>{widget["text-right"]}</h4>
//                     </div>
//                   );
//                 } else return null;
//               })}
//             </div>
//             <div
//               style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "space-around",
//                 width: "100%",
//               }}
//             >
//               <Button
//                 title={"Back"}
//                 onClick={handleBack}
//                 style={{
//                   cursor: index === 0 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//               <Button
//                 title={"Next"}
//                 onClick={handleNext}
//                 style={{
//                   cursor: index === screens.length - 1 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Emulator;
//temp code 3
// import React, { useEffect, useState } from "react";
// import Layout from "../assets/A50-03.png";
// import Layout2 from "../assets/A910.png";
// import Select from "react-select";
// const Button = ({ title, onClick, style }) => {
//   return (
//     <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
//       {title}
//     </button>
//   );
// };
// const Emulator = ({ data }) => {
//   const [screens, setScreens] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [layoutIndex, setLayoutIndex] = useState(0);
//   const layouts = [Layout, Layout2];
//   const options = [
//     { value: 0, label: "Samsung A50" },
//     { value: 1, label: "Samsung A910" },
//   ];
//   function handleBack() {
//     if (index === 0) return;
//     setIndex((index) => index - 1);
//   }
//   function handleNext() {
//     if (index === screens.length - 1) return;
//     setIndex((index) => index + 1);
//   }
//   useEffect(() => {
//     if (data && data.screens) setScreens(data.screens);
//   }, [data]);
//   return (
//     <div className="emulator">
//       <div style={{ width: "100%", marginBottom: "16px" }}>
//         <Select
//           options={options}
//           onChange={(v) => setLayoutIndex(v.value)}
//           defaultValue={options[layoutIndex]}
//         />
//       </div>
//       <div
//         className="android-emulator"
//         style={{
//           backgroundImage: `url("${layouts[layoutIndex]}")`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           width: "100%",
//           height: "600px",
//           position: "relative",
//         }}
//       >
//         {screens.length === 0 ? (
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             No screens
//           </div>
//         ) : (
//           <div
//             style={{
//               position: "absolute",
//               top: "20%",
//               left: "10%",
//               width: "80%",
//               height: "60%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div style={{ flex: 1, textAlign: "center" }}>
//               <h2>{screens[index]["heading-text"]}</h2>
//             </div>
//             <div
//               style={{
//                 flex: 3,
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {screens[index].widgets.map((widget, i) => {
//                 if (widget.type === "BUTTON") {
//                   return (
//                     <Button
//                       key={i}
//                       title={widget["label-text"] ?? widget.value}
//                       style={{
//                         marginBottom: "10px",
//                         width: "80%",
//                         padding: "10px",
//                       }}
//                     />
//                   );
//                 } else if (widget.type === "LABEL-INPUT") {
//                   return (
//                     <div
//                       key={i}
//                       style={{
//                         width: "100%",
//                         margin: "8px 4px",
//                       }}
//                     >
//                       <input
//                         style={{
//                           width: "100%",
//                           padding: "8px",
//                           border: "1px solid lightgrey",
//                           borderRadius: "6px",
//                         }}
//                         placeholder={widget["label-text"]}
//                       />
//                     </div>
//                   );
//                 } else if (widget.type === "LABEL-LABEL") {
//                   return (
//                     <div
//                       key={i}
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         width: "100%",
//                       }}
//                     >
//                       <h4>{widget["text-left"]}</h4>
//                       <h4>{widget["text-right"]}</h4>
//                     </div>
//                   );
//                 } else return null;
//               })}
//             </div>
//             <div
//               style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "space-around",
//                 width: "100%",
//               }}
//             >
//               <Button
//                 title={"Back"}
//                 onClick={handleBack}
//                 style={{
//                   cursor: index === 0 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//               <Button
//                 title={"Next"}
//                 onClick={handleNext}
//                 style={{
//                   cursor: index === screens.length - 1 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Emulator;
//code 3
// import React, { useEffect, useState } from "react";
// import Layout from "../assets/A50-03.png";
// import Layout2 from "../assets/A910.png";
// import Select from "react-select";
// import "../App.css"; // Import the CSS file
// const Button = ({ title, onClick, style }) => {
//   return (
//     <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
//       {title}
//     </button>
//   );
// };
// const Emulator = ({ data }) => {
//   const [screens, setScreens] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [layoutIndex, setLayoutIndex] = useState(0);
//   const layouts = [Layout, Layout2];
//   const options = [
//     { value: 0, label: "Samsung A50" },
//     { value: 1, label: "Samsung A910" },
//   ];
//   function handleBack() {
//     if (index === 0) return;
//     setIndex((index) => index - 1);
//   }
//   function handleNext() {
//     if (index === screens.length - 1) return;
//     setIndex((index) => index + 1);
//   }
//   useEffect(() => {
//     if (data && data.screens) setScreens(data.screens);
//   }, [data]);
//   return (
//     <div className="emulator">
//       <div style={{ width: "100%", marginBottom: "16px" }}>
//         <Select
//           options={options}
//           onChange={(v) => setLayoutIndex(v.value)}
//           defaultValue={options[layoutIndex]}
//         />
//       </div>
//       <div
//         className="android-emulator"
//         style={{
//           backgroundImage: `url("${layouts[layoutIndex]}")`,
//           width: "100%",
//           height: "600px",
//         }}
//       >
//         {screens.length === 0 ? (
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             No screens
//           </div>
//         ) : (
//           <div className="screen">
//             <div className="heading">
//               <h2>{screens[index]["heading-text"]}</h2>
//             </div>
//             <div className="widgets">
//               {screens[index].widgets.map((widget, i) => {
//                 if (widget.type === "BUTTON") {
//                   return (
//                     <Button
//                       key={i}
//                       title={widget["label-text"] ?? widget.value}
//                       style={{
//                         marginBottom: "10px",
//                         width: "80%",
//                         padding: "10px",
//                       }}
//                     />
//                   );
//                 } else if (widget.type === "LABEL-INPUT") {
//                   return <input key={i} placeholder={widget["label-text"]} />;
//                 } else if (widget.type === "LABEL-LABEL") {
//                   return (
//                     <div key={i} className="label-label">
//                       <h4>{widget["text-left"]}</h4>
//                       <h4>{widget["text-right"]}</h4>
//                     </div>
//                   );
//                 } else return null;
//               })}
//             </div>
//             <div className="buttons">
//               <Button
//                 title={"Back"}
//                 onClick={handleBack}
//                 style={{
//                   cursor: index === 0 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//               <Button
//                 title={"Next"}
//                 onClick={handleNext}
//                 style={{
//                   cursor: index === screens.length - 1 ? "no-drop" : "pointer",
//                   width: "120px",
//                   padding: "8px",
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Emulator;
"use strict";
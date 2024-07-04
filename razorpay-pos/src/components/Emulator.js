import React, { useEffect, useState } from "react";
import Layout from "../assets/A50-03.png";

const Button = ({ title, onClick, style }) => {
  return (
    <button style={{ cursor: "pointer", ...style }} onClick={onClick}>
      {title}
    </button>
  );
};

const Emulator = ({ data }) => {
  const [screens, setScreens] = useState([]);
  const [index, setIndex] = useState(0);

  function handleBack() {
    if (index === 0) return;
    setIndex((index) => (index -= 1));
  }

  function handleNext() {
    if (index === screens.length - 1) return;
    setIndex((index) => (index += 1));
  }

  useEffect(() => {
    if (data && data.screens) setScreens(data.screens);
  }, [data]);

  return (
    <div className="emulator">
      <div
        className="android-emulator"
        style={{
          backgroundImage: `url("${Layout}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {screens.length === 0 ? (
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No screens
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              top: "15%",
              width: "70%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <h2>{screens[index]["heading-text"]}</h2>
            </div>
            <div
              style={{
                flex: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {screens[index].widgets.map((widget, i) => {
                if (widget.type === "BUTTON") {
                  return (
                    <Button
                      key={i}
                      title={widget["label-text"] ?? widget.value}
                      style={{ marginBottom: "10px" }}
                    />
                  );
                } else if (widget.type === "LABEL-INPUT") {
                  return (
                    <div
                      style={{
                        width: "100%",
                        margin: "8px 4px",
                      }}
                    >
                      <input
                        style={{
                          width: "100%",
                          padding: "8px",
                          border: "1px solid lightgrey",
                          borderRadius: "6px",
                        }}
                        placeholder={widget["label-text"]}
                      />
                    </div>
                  );
                } else if (widget.type === "LABEL-LABEL") {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <h4>{`${widget["text-left"]}`}</h4>
                      <h4>{`${widget["text-right"]}`}</h4>
                    </div>
                  );
                } else return "";
              })}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                title={"Back"}
                onClick={handleBack}
                style={{
                  cursor: index === 0 ? "no-drop" : "pointer",
                  width: "120px",
                  padding: "8px",
                }}
              />
              <Button
                title={"Next"}
                onClick={handleNext}
                style={{
                  cursor: index === screens.length - 1 ? "no-drop" : "pointer",
                  width: "120px",
                  padding: "8px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emulator;

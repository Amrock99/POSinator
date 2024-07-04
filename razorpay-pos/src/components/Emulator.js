import React, { useEffect, useState } from "react";

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
      <div className="android-emulator">
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
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              {/* Title */}
              <h1 style={{ textAlign: "center" }}>
                {screens[index]["heading-text"]}
              </h1>
              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {screens[index].widgets.map((widget, i) => {
                  return (
                    <Button
                      key={i}
                      title={widget["label-text"] ?? widget.value}
                    />
                  );
                })}
              </div>
            </div>
            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                title={"Back"}
                onClick={handleBack}
                style={{ cursor: index === 0 ? "no-drop" : "pointer" }}
              />
              <Button
                title={"Next"}
                onClick={handleNext}
                style={{
                  cursor: index === screens.length - 1 ? "no-drop" : "pointer",
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

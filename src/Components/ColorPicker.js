import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    document.getElementById("Box").style.backgroundColor = color; // Set the body background color
  };

  return (
    <div className="container">
        <p className="heading">Color Picker</p>
      <div id="Box">
        <button onClick={() => setShowColorList(true)} className="btn">
          Pick a color
        </button>
        {showColorList && (
          <div className="ColorBoxs">
            {colors.map((color, index) => (
              <div
                key={index}
                className="ColorBox"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        <p id="selectedColor">{selectedColor}</p>
      </div>
    </div>
  );
};

export default ColorPicker;

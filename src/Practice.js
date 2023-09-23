import { useState } from "react";
import colorNames from "colornames";
const Practice = () => {
  const [colorValue, setColorValue] = useState("");
  const [hex, setHex] = useState("");

  return (
    <div className="colorName">
      <div
        className="box"
        style={{
          backgroundColor: colorValue,
          color:
            colorValue === "white" || colorValue === "" ? "black" : "white",
        }}>
        {colorValue ? colorValue : "empty value"} {hex ? hex : null}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          role="searchbox"
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHex(colorNames(e.target.value));
          }}
        />
      </form>
    </div>
  );
};

export default Practice;

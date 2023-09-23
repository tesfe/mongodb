import { useState } from "react";
import colorNames from "colornames";
const Practice = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");

  return (
    <div className="colorName">
      <div
        className="box"
        style={{
          backgroundColor: color,
          color: color === "white" ? "black" : "white",
        }}>
        {color} {hex ? hex : null}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          role="searchbox"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            setHex(colorNames(e.target.value));
          }}
        />
      </form>
    </div>
  );
};

export default Practice;

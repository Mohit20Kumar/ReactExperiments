import React, { useState } from "react";
import "./ColorGen.css";
import Values from "values.js";
import SingleColo from "./SingleColo";

// const color = new Values("red");
// const arr = color.all(10);
// console.log(arr[10].hex);
// console.log(color.all(10));
// console.log(color.rgbString());
// console.log(color.hexString());

const ColorGen = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("cyan").all(1));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(1);
      console.log(colors);
      //   console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      //   console.log("THERE WAS SOME ERROR !");
      alert("The input color is wrong vro!");
    }
  };
  return (
    <div className="color-container">
      <div className={`color-header ${error ? "color-error" : null}`}>
        <h1>BACKGROUND COLOR GENERATOR</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#ffffff"
            type="text"
          />
          <button className="color-button">Press for magic</button>
        </form>
      </div>
      <div className="color-content">
        {list.map((each, index) => {
          return (
            <SingleColo key={index} index={index} {...each} hex={each.hex} />
          );
        })}
      </div>
    </div>
  );
};

export default ColorGen;

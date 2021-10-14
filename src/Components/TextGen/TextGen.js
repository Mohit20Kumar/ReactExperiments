import React, { useState } from "react";
import { data } from "./Data";
import "./TextGen.css";

// document.title = "TEXT GENERATOR";

const TextGen = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = parseInt(count);
    if (count > data.length) {
      x = data.length;
    }
    if (count <= 0) {
      x = 1;
    }
    setText(data.slice(0, x));
  };
  return (
    <div className="Gen-main">
      <h1 className="Gen-heading">F*CK LOREM IPSUM</h1>
      <p className="Gen-subline">Create Dummy Text Better Than Before!</p>
      <div className="Gen-div-main">
        <form className="Gen-form" onSubmit={handleSubmit}>
          <label className="Gen-form-label" htmlFor="paragraph">
            Paragraphs:
          </label>
          <input
            className="Gen-form-input"
            type="number"
            name="paragraph"
            id="paragraph"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="Gen-form-btn" type="submit">
            PRESS FOR MAGIC!
          </button>
        </form>
        {text.map((each) => {
          return (
            <div className="Gen-text-div">
              <p className="Gen-text-p">{each}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextGen;

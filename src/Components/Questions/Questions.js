import React, { useState, useEffect } from "react";
import "./Questions.css";

const Questions = () => {
  const [clicked, setClicked] = useState(false);

  const toshow = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  const [ques, setQues] = useState([]);
  const getQue = async () => {
    const response = await fetch("Questions.json");
    const data = await response.json();
    setQues(data);
    console.log("HEYY data got successfully");
    console.log(data);
  };
  useEffect(() => {
    getQue();
  }, []);
  return (
    <div className="Q-DIV">
      <div className="Q-flexbox-container">
        <div className="Q-heading-flexitem">
          <h2>MY QUESTIONNAIRE ABOUT LIFE TIPS</h2>
        </div>
        <div className="Q-QDIV-flexitem">
          {ques.map((each) => {
            const { id, que, ans } = each;
            return (
              <div key={id} className="QDIV-item">
                <div onClick={() => toshow(id)} className="QDIV-item-flexbox">
                  <h4>{que}</h4>
                  {clicked === id ? <p id="lol">-</p> : <p id="lol">+</p>}
                </div>
                <div className="QDIV-item-ans">
                  {clicked === id ? <p>{ans}</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Questions;

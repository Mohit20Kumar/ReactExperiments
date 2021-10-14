import React, { useState, useEffect } from "react";
import "./Peoples.css";

const Peoples = () => {
  const [people, setPeople] = useState([]);
  const [obj, setObj] = useState({});
  const changeIt = () => {
    let item = people[Math.floor(Math.random() * people.length)];
    setObj(item);
  };
  const next = (id) => {
    id !== 4 ? setObj(people[++id]) : setObj(people[0]);
  };
  const previous = (id) => {
    id !== 0 ? setObj(people[--id]) : setObj(people[4]);
  };
  const getPeople = async () => {
    const response = await fetch("Peoples.json");
    const data = await response.json();
    setObj(data[0]);
    setPeople(data);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <div className="flexbox-places-container">
        <h1 className="heading-places">PEOPLE</h1>
      </div>

      <div className="flexbox-places-container">
        <div className="flexbox-places-item flex-box-places-item">
          <div className="image-container">
            <img className="peoples-img" src={obj.image} alt="" />
          </div>
          <h2 className="h2myname-peoples">{obj.title}</h2>
          <b>
            <p className="para">{obj.about}</p>
          </b>
          <div className="buttondiv">
            <button className="arroww" onClick={() => previous(obj.id)}>
              <i className="arrow left"></i>
            </button>
            <button className="Places-btn" onClick={changeIt}>
              Different Plz
            </button>
            <button className="arroww" onClick={() => next(obj.id)}>
              <i className="arrow right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peoples;

import { data } from "./Data";
import "./Menu.css";
import React, { useState } from "react";

const Menu = () => {
  const sabjitime = () => {
    const r = data.filter((each) => each.genre === "sabji");
    setDishes(r);
  };
  const shaketime = () => {
    const r = data.filter((each) => each.genre === "shake");
    setDishes(r);
  };
  const streettime = () => {
    const r = data.filter((each) => each.genre === "street");
    setDishes(r);
  };
  const [dishes, setDishes] = useState(data);
  //   console.log(r);
  return (
    <div className="menu">
      <div className="menu-tit">
        <h1 className="menu-h1">MK FOODS</h1>
        <div className="menu-underline"></div>
      </div>
      {/* this should be Flex*/}
      <div className="menu-btn-container">
        <button
          onClick={() => {
            setDishes(data);
          }}
          className="menu-btn"
        >
          All
        </button>
        <button onClick={sabjitime} className="menu-btn">
          Sabji
        </button>
        <button onClick={shaketime} className="menu-btn">
          Shakes
        </button>
        <button onClick={streettime} className="menu-btn">
          Street Food
        </button>
      </div>
      <div className="menu-main-container">
        {dishes.map((each, index) => {
          return (
            <div key={index} className="menu-article">
              {/* {console.log(each)} */}
              <img className="menu-photo" src={each.photo} alt="" />
              <div className="menu-item-info">
                <div className="menu-item-info-inside">
                  <h4>{each.name}</h4>
                </div>
                <p className="menu-item-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Enim, perferendis.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

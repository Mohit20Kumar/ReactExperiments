import React, { useState, useEffect } from "react";
import "./Places.css";

// const myJSON = JSON.stringify(x);
// console.log(myJSON);

const Places = () => {
  const [show, setShow] = useState(true);
  // const [empty, setEmpty] = useState(false);

  const [visit, setVisit] = useState([]);

  const getPlaces = async () => {
    const response = await fetch("Places.JSON");
    const world = await response.json();
    setVisit(world);
    setShow(false);

    // console.log(world);
  };

  useEffect(() => {
    getPlaces();
  }, []);

  const gayab = (id) => {
    let newPlaces = visit.filter((each) => each.id !== id);
    setVisit(newPlaces);
  };
  if (show) {
    return <h1 className="heading">IT IS LOADING</h1>;
  }

  if (visit.length === 0) {
    return (
      <div className="flexbox-container">
        <h1 className="heading">Nothing Left To Visit....</h1>
        <button
          className="Places-btn"
          onClick={() => {
            getPlaces();
          }}
        >
          Reload PLZ
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flexbox-container">
        <h1 className="heading-places">PLACESS To Visit in India</h1>
      </div>

      <div className="flexbox-container">
        {visit.map((each) => {
          const { id, image, title, about } = each;
          return (
            <div key={id} className="flexbox-item flex-box-item1">
              <img src={image} alt="" height="320px" width="100%" />
              <h2 className="h2myname">{title}</h2>
              <b>
                <p className="para">{about}</p>
              </b>
              <div className="buttondiv">
                <button className="Places-btn" onClick={() => gayab(id)}>
                  Not Interested
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Places;

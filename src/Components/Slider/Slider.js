import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState([]);

  const getSlides = async () => {
    const response = await fetch("Peoples.json");
    const data = await response.json();
    setPeople(data);
  };

  useEffect(() => {
    getSlides();
  }, []);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let into = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(into);
    };
  }, [index]);

  //   console.log(people);
  return (
    <>
      <div className="slider-main">
        <div className="slider-heading">
          <h1>MK SLIDES</h1>
        </div>

        <div className="slider-article-dad">
          {people.map((each, eachIndex) => {
            // console.log(eachIndex);
            const { id, image, title, about } = each;

            let position = "nextSlide";
            if (eachIndex === index) {
              position = "activeSlide";
            }
            if (
              eachIndex === index - 1 ||
              (index === 0 && eachIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div key={id} className={`slider-article ${position}`}>
                <div className="slider-img-container">
                  <img className="slider-img" src={image} alt="" />
                </div>
                <h1>{title}</h1>
                <p>{about}</p>
              </div>
            );
          })}
          <button onClick={() => setIndex(index - 1)} className="slider-prev">
            Prev
          </button>
          <button onClick={() => setIndex(index + 1)} className="slider-next">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;

import React from "react";
// import { FaPeopleCarry } from "react

const HomeMain = ({ closeSubmenu }) => {
  return (
    <>
      <div className="home-main" onMouseOver={closeSubmenu}>
        <div className="home-main-heading">
          <h1>The Life,</h1>
          <h1>Changing Work!</h1>
          <h1>Find Your Soul,</h1>
          <h1>With Us!</h1>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            ducimus sapiente possimus quae dolore ab obcaecati numquam,
            excepturi quo maiores officiis adipisci dolorum, tenetur veritatis
            aliquam expedita quos repudiandae eveniet.
          </h4>
          <button>SIGN UP</button>
        </div>
        <div className="home-image">
          {/* <FaPeopleCarry /> */}
          <img src="Chakras.gif" alt="" />

          {/* <img
            src="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
            alt=""
          /> */}
        </div>
      </div>
      {/* <div className="home-notsomain"></div> */}
    </>
  );
};

export default HomeMain;

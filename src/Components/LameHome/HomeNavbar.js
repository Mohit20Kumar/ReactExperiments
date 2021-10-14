import React, { useState } from "react";
import HomeNavToggle from "./HomeNavToggle";
// import { FaBars } from "react-icons/fa";
import { FaBars, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function LameNavbar({ openSubmenu, closeSubmenu }) {
  const [showLinks, setShowLinks] = useState(false);

  const displaySubmenu = (e) => {
    // console.log("OOOPSE");
    const page = e.target.textContent;
    const temp = e.target.getBoundingClientRect();
    const center = (temp.left + temp.right) / 2;
    const bottom = temp.bottom - 3;

    // setisSubmenuOpen(true);
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <div className="home-nav" onMouseOver={handleSubmenu}>
      <div className="home-nav-center">
        <div className="home-nav-header">
          <h1>MANTRA</h1>
          <button
            className="home-nav-toggle-btn"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="home-nav-links-container">
          <ul className="home-navbar-links">
            <li>
              <a
                onMouseOver={displaySubmenu}
                className="link-btn"
                href="/nowhere"
              >
                products
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                href="/nowhere"
                onMouseOver={displaySubmenu}
              >
                developers
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                onMouseOver={displaySubmenu}
                href="/nowhere"
              >
                company
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="home-navbar-icons"></div> */}
        <ul className="home-navbar-social">
          <li className="facebook">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <HomeNavToggle showLinks={showLinks} setShowLinks={setShowLinks} />
      </div>
    </div>
  );
}

export default LameNavbar;

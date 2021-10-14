import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./LameNavbar.css";

const LameNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <div className="lame-nav">
      <div className="lame-nav-center">
        <div className="lame-nav-header">
          <h2>Mohit's Navbar</h2>
          <button
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="lame-nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className={`${
            showLinks
              ? "lame-nav-links-container lame-nav-show-container"
              : "lame-nav-links-container"
          }`}
        >
          <ul ref={linksRef} className="lame-nav-links">
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/support">support</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="/nothing">nothing</a>
            </li>
          </ul>
        </div>
        <ul className="lame-nav-social">
          <li>
            <a href="www.google.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="www.google.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="www.google.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LameNavbar;

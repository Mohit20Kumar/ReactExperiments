import React, { useState } from "react";
import "./LameSidebar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LameSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="lame-sidebar-app">
      <div className="lame-sidebar-main">
        <button
          className="lame-sidebar-toggle"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </button>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="lame-sidebar-modal-toggle"
        >
          MODAL
        </button>
      </div>
      <nav
        className={`${
          showSidebar ? "lame-sidebar" : "lame-sidebar remove-sidebar"
        }`}
      >
        <div className="lame-sidebar-header">
          <h1>SIDEBAR</h1>
          <button
            className="lame-sidebar-cross"
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <ImCross />
          </button>
        </div>
        <ul className="lame-sidebar-links">
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
      </nav>
      <div
        className={`${
          showModal ? "modal-overlay" : "modal-overlay remove-modal"
        }`}
      >
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="close-modal-btn"
          >
            <ImCross />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LameSidebar;

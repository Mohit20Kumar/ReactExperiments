import React from "react";
import { ImCross } from "react-icons/im";

function HomeNavToggle({ showLinks, setShowLinks }) {
  //   const [isModal, setIsModal] = useState(true);
  return (
    <div
      className={`${
        showLinks ? "home-nav-layer" : "home-nav-layer remove-layer"
      }`}
    >
      <div className="home-nav-toggle">
        <button
          className="close-layer-btn"
          onClick={() => {
            setShowLinks(false);
            // setIsModal(false);
          }}
        >
          <ImCross />
        </button>
        <div className="home-nav-div-links-container">
          <div className="home-nav-toggle-container">
            <h2>Products</h2>
            <div className="home-nav-toggle-links">
              <ul className="home-nav-links">
                <li>
                  <a href="/home">Payment</a>
                </li>
                <li>
                  <a href="/about">Terminal</a>
                </li>
                <li>
                  <a href="/support">Connect</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-nav-toggle-container">
            <h2>Developers</h2>
            <div className="home-nav-toggle-links">
              <ul className="home-nav-links">
                <li>
                  <a href="/home">Plugin</a>
                </li>
                <li>
                  <a href="/about">Help</a>
                </li>
                <li>
                  <a href="/support">Libraries</a>
                </li>
                <li>
                  <a href="/support">Billing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-nav-toggle-container">
            <h2>Company</h2>
            <div className="home-nav-toggle-links">
              <ul className="home-nav-links">
                <li>
                  <a href="/home">About</a>
                </li>
                <li>
                  <a href="/about">Customers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavToggle;

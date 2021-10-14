import React, { useState } from "react";
import "./LameHome.css";
import HomeNavbar from "./HomeNavbar";
import HomeMain from "./HomeMain";
import HomeSubmenu from "./HomeSubmenu";
import sublinks from "./HomeData";

function LameHome() {
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    const page = sublinks.find((link) => link.page === text);
    setPage(page);

    setisSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };
  return (
    <div className="home">
      {/* <h2>jhaha</h2> */}
      <div className="home-container">
        {/* <h2>lol</h2> */}
        <HomeNavbar openSubmenu={openSubmenu} closeSubmenu={closeSubmenu} />
        <HomeMain closeSubmenu={closeSubmenu} />
        <HomeSubmenu
          isSubmenuOpen={isSubmenuOpen}
          setisSubmenuOpen={setisSubmenuOpen}
          page={page}
          location={location}
        />
        {/* maybe footer */}
      </div>
    </div>
  );
}

export default LameHome;

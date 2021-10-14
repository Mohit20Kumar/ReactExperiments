import React, { useState, useEffect, useRef } from "react";

const HomeSubmenu = ({
  isSubmenuOpen,
  setisSubmenuOpen,
  location,
  page: { page, links },
}) => {
  const [columns, setColumns] = useState("col-2");
  const container = useRef(null);
  useEffect(() => {
    setColumns("col-2");

    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) setColumns("col-3");
    if (links.length > 3) setColumns("col-4");
  }, [location, links]);

  return (
    <div
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSubmenu;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";

function Layout({ children }) {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);
  

  return (
    <>
      <MobileNavbar toggleMenu={toggleMenu} />
      {menuVisible && (
        <div
          className="overlay"
          onClick={toggleMenu}
        ></div>
      )}
      <div className="d-flex">
        {/* Sidebar visible solo en desktop o si menu está abierto en mobile */}
        <Sidebar menuOpen={menuVisible} toggleMenu={toggleMenu} />
        <main className="flex-grow-1 p-3">{children}</main>
      </div>
    </>
  );
}

export default Layout;

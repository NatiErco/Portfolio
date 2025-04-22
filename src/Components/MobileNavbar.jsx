import React from "react";
import { Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "../index.css";

function MobileNavbar({ toggleMenu }) {
  return (
    <div className="d-flex d-md-none justify-content-between align-items-center bg-dark text-light px-3 py-2 fixed-top w-100 shadow-sm"  style={{ zIndex: 1100 }} > 
      <h5 className="m-0">NE</h5>
      <Button variant="outline-light" onClick={toggleMenu}>
        <FaBars />
      </Button>
    </div>
  );
}
export default MobileNavbar;


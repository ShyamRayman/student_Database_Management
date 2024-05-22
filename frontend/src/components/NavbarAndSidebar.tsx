import React, { useState, useEffect } from "react";
import "./NavbarAndSidebar.css";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarAndSidebar: React.FC = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth <= 700
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className="wrapper">
      <div
        id="sidebar"
        className={`sidebar ${isSidebarHidden ? "hidden" : ""}`}
      >
        <img
          src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"
          alt=""
          className="imgNavbar"
        />
        <div>
          <h4 className="h4Sidebar">YellowOwl</h4>
          <p className="pSidebar">Admin</p>
        </div>
      </div>
      <div className={`main_content ${isSidebarHidden ? "expanded" : ""}`}>
        <div className="header">
          {isSidebarHidden && (
            <button
              id="toggleSidebarBtn"
              onClick={toggleSidebar}
              className="toggleSidebarBtn"
            >
              <AiOutlineMenu />
            </button>
          )}
          <span className="studentsNavBar">Students</span>
        </div>
        <div className="info">
          <div></div>
          {/* More content here */}
        </div>
      </div>
    </div>
  );
};

export default NavbarAndSidebar;

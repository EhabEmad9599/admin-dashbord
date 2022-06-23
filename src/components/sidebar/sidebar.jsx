import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../sidebarData";

const Sidebar = ({ toggleSlide, slideStatusHandler }) => {
  return (
    <>
      <section className={toggleSlide ? "active" : ""} id="sidebar">
        <div className="logo">
          <Link to="/">Dashbord</Link>
          <div onClick={slideStatusHandler} id="close">
            <span className="material-icons">close</span>
          </div>
        </div>
        <ul className="main-menu">
          {sidebarData.map((item, index) => (
            <li key={index}>
              <a href="/">
                <h3>{item.header}</h3>
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;

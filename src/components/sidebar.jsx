import React from "react";
import { sidebarData } from "../sidebarData";

const Sidebar = ({ toggleSlide, slideStatus }) => {
  return (
    <>
      <section className={toggleSlide ? "active" : ""} id="sidebar">
        <div className="logo">
          <h2>Dashbord</h2>
          <div onClick={slideStatus} id="close">
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

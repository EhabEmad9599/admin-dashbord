import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiAction } from "../../Redux/Reducer/uiSlice";
import { sidebarData } from "../../sidebarData";

const Sidebar = () => {
  const sidebarMenu = useSelector((state) => state.ui.sidebarMenu);
  const dispatch = useDispatch();

  // state toggle siderbar section
  const sidebarHandler = () => {
    dispatch(uiAction.sidebarMenu());
  };
  // End toggle siderbar section
  return (
    <>
      <section className={sidebarMenu ? "active" : ""} id="sidebar">
        <div className="logo">
          <Link to="/">Dashbord</Link>
          <div onClick={sidebarHandler} id="close">
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

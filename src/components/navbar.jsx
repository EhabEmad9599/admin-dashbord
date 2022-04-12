import React, { useState } from "react";
import profile from "../img/profile.png";

const Navbar = ({ slideStatus }) => {

  const [submenu, setSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setSubmenu(!submenu);
    console.log(submenu);
  }
  return (
    <>
      <nav>
        <ul className="bookmark">
          <li>
            {/* .burger-menu */}
            <div onClick={slideStatus} id="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            {/* .burger-menu */}
          </li>
          <li>
            <span className="material-icons icon">calendar_today</span>
          </li>
          <li>
            <span className="material-icons icon">chat_bubble_outline</span>
          </li>
          <li>
            <span className="material-icons icon">mail_outline</span>
          </li>
          <li>
            <span className="material-icons icon">note</span>
          </li>
          <li>
            <span className="material-icons star icon">star_border</span>
          </li>
        </ul>
        <ul className="setting">
          <li>
            <span className="material-icons">language</span>
            {/* English */}
          </li>
          <li>
            <span className="material-icons icon">dark_mode</span>
          </li>
          <li>
            <span className="material-icons">search</span>
          </li>
          <li className="shoping-cart">
            <span className="material-icons">shopping_cart</span>
          </li>
          <li>
            <span className="material-icons">notifications_none</span>
          </li>
          <li onClick={toggleSubmenu} className="user">
            <div className="info">
              <h5>Ehab Emad</h5>
              <span>admin</span>
            </div>
            <img src={profile} alt="profileImg" />
            <ul className={submenu ? 'submenu active' : 'submenu'}>
              <li> <span className="material-icons">person</span>Profile</li>
              <li>
                <span className="material-icons icon">mail_outline</span>
                <a href="/">inbox</a>
              </li>
              <li>
                <span className="material-icons icon">note</span>
                <a href="/">Task</a>
              </li>
              <li>
                <span className="material-icons icon">chat_bubble_outline</span>
                <a href="/">Chat</a>
              </li>
              <li>
                <span className="material-icons">settings</span>
                <a href="/">Setting</a>
              </li>
              <div className="line"></div>
              <li>
                <span className="material-icons">credit_card</span>
                <a href="/">Pricing</a>
              </li>
              <li> <span className="material-icons">help</span>
              <a href="/">FAQ</a>
              </li>
              <li><span className="material-icons">logout</span>
              <a href="/">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

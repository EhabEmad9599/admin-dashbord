import React from "react";
import profile from "../img/profile.png";

const Navbar = ({slideStatus}) => {



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
        <ul className='setting'>
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
          <li className="user">
            <div className="info">
              <h5>Ehab Emad</h5>
              <span>admin</span>
            </div>
            <img src={profile} alt="profileImg" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

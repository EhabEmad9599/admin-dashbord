import React, { useEffect, useState } from "react";
import profile from "../../img/profile.png";
import avatar from "../../img/avatar.png";
import avatar2 from "../../img/avatar-2.png";
import { uiAction } from "../../Redux/Reducer/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ slideStatusHandler }) => {
  const [darkMood, setDarkMood] = useState(false);
  const userSubMenu = useSelector((state) => state.ui.userSubMenu);
  const notificationsSubMenu = useSelector(
    (state) => state.ui.notificationsSubMenu
  );
  const dispatch = useDispatch();

  // start toggle user submenu
  const toggleUserSubMenu = () => {
    dispatch(uiAction.userSunMenuHandler());
  };
  // start toggle user submenu

  // start toggle notification submenu

  const showNotifications = () => {
    dispatch(uiAction.notificationsHandler());
  };
  // start toggle notification submenu

  // state toggle siderbar section
  const sidebarHandler = () => {
    dispatch(uiAction.sidebarMenu());
  };
  // End toggle siderbar section

  // start toggle dark mode Toggle

  let theme = localStorage.getItem("theme");
  useEffect(() => {
    if (theme === "dark") {
      enableDarkMood();
    }
  }, []);
  const darkModeToggle = () => {
    theme = localStorage.getItem("theme");
    if (darkMood === true) {
      disableDarkMood();
    } else {
      enableDarkMood();
    }
  };

  function enableDarkMood() {
    setDarkMood(!darkMood); // this line to change the icon
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
  }
  function disableDarkMood() {
    setDarkMood(!darkMood);
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
  }
  // End toggle dark mode Toggle

  return (
    <>
      <nav>
        <ul className="bookmark">
          <li>
            {/* .burger-menu */}
            <div onClick={sidebarHandler} id="burger">
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
          </li>
          <li onClick={darkModeToggle}>
            <span className="material-icons icon darkMood ">
              {darkMood ? "light_mode" : "dark_mode"}
            </span>
          </li>
          <li>
            <span className="material-icons">search</span>
          </li>
          <li className="shoping-cart">
            <Link to="/Checkout" className="material-icons">
              shopping_cart
            </Link>
          </li>
          <li onClick={showNotifications} className="alert">
            <span className="material-icons">notifications_none</span>
            <span className="badge">6</span>
            <ul
              className={
                notificationsSubMenu ? "drop-down-menu show" : "drop-down-menu"
              }
            >
              <li>
                <div className="title">
                  <h4>Notifications</h4>
                  <p className="drop-down-badge">6 new</p>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="media-content">
                    <h5> Congratulation Sam 🎉 </h5>
                    <span>Won the monthly best seller badge</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <img src={avatar2} alt="avatar" />
                  </div>
                  <div className="media-content">
                    <h5> New message received </h5>
                    <span>You have 10 unread messages</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <p>MD</p>
                  </div>
                  <div className="media-content">
                    <h5>Revised Order 👋</h5>
                    <span>MD Inc. order updated</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="media-content">
                    <h5> System Notifications </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <p>X</p>
                  </div>
                  <div className="media-content">
                    <h5> Server down </h5>
                    <span>USA Server is down due to hight CPU usage</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <p>
                      <span className="material-icons">done</span>
                    </p>
                  </div>
                  <div className="media-content">
                    <h5> Sales report generated </h5>
                    <span>Last month sales report generated</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="avatar-img">
                    <p>
                      <span className="material-icons">warning_amber</span>
                    </p>
                  </div>
                  <div className="media-content">
                    <h5> High memory usage </h5>
                    <span>BLR Server using high memory</span>
                  </div>
                </div>
              </li>
              <li>
                <input type="button" value="Read all notifications" />
              </li>
            </ul>
          </li>

          <li onClick={toggleUserSubMenu} className="user">
            <div className="info">
              <h5>Ehab Emad</h5>
              <span>admin</span>
            </div>
            <img src={profile} alt="profileImg" />
            <ul className={userSubMenu ? "submenu active" : "submenu"}>
              <li>
                <span className="material-icons">person</span>Profile
              </li>
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
              <li>
                {" "}
                <span className="material-icons">help</span>
                <a href="/">FAQ</a>
              </li>
              <li>
                <span className="material-icons">logout</span>
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

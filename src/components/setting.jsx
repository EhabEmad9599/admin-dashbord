import React, { useState } from 'react';

const Setting = () => {
  const [toggleSetting, setToggleSetting] = useState(false);

  const toggle = () => {
    setToggleSetting(!toggleSetting);
    console.log(toggleSetting);
  }
  return (  
    <>
      <article className={toggleSetting ? 'customizer open': 'customizer'}>
        <div onClick={toggle} className="customizer-toggle">
        <span className="material-icons">settings</span>
        </div>
        <section className="customizer-title">
          <h4>Theme Customizer </h4>
          <span>Customize &amp; Preview in Real Time</span>

        {/* start customizer-layout section */}
        </section>
        <section className="customizer-layout">
          <h4>Skin</h4>
          <input type="radio" name="bg-color"/>
          <label>Light</label>
          <input type="radio" name="bg-color"/>
          <label>Bordered</label>
          <input type="radio" name="bg-color"/>
          <label>Dark</label>
          <input type="radio" name="bg-color"/>
          <label>Semi Dark</label>

          <h4>Content Width</h4>
          <input type="radio" name="content-Width"/>
          <label>Full Width</label>
          <input type="radio" name="content-Width"/>
          <label>Boxed</label>

          <div className="form-row">
            <h4>RTL</h4>
            <input type="checkbox" name="direction" />
          </div>
          <div className="form-group">
            <h4>Router Transition</h4>
            <select name="" id="">
              <option value="Zoom fade">Zoom fade</option>
              <option value="fade">Fade</option>
              <option value="Fade bottom">Fade bottom</option>
              <option value="Slide Fade">Slide Fade</option>
              <option value="Zoom out">Zoom out</option>
              <option value="None">None</option>
            </select>
          </div>
        </section>
        {/* End customizer-layout section */}

        {/* start Menu Layout section */}
        <section className="menu-layout">
          <h4>Menu Layout</h4>
          <input type="radio" name='dir' />
          <label>Vertical</label>
          <input type="radio" name='dir' />
          <label>Horizontal</label>
          <div className='menu-visibilty'>
            <h5>Menu Collapsed</h5>
            <input type="checkbox" />
          </div>
          <div className="menu-visibilty">
            <h5>Menu Hidden</h5>
            <input type="checkbox" />
          </div>
        </section>
        {/* End Menu Layout section */}

        {/* start navbar layout section */}
        <section className='customizer-navbar'>
          <h5>Navbar Color</h5>
          <div className="box-colors">
          <div className="box-color bg-light"></div>
          <div className="box-color bg-purple"></div>
          <div className="box-color bg-gray"></div>
          <div className="box-color bg-grren"></div>
          <div className="box-color bg-red"></div>
          <div className="box-color bg-orange"></div>
          <div className="box-color bg-Blue-light"></div>
          <div className="box-color bg-dark"></div>
          </div>
          <h5>Navbar Type</h5>
          <div className="navbar-type">
          <input type="radio" name='nav-type' />
          <label>Floating</label>
          <input type="radio" name='nav-type' />
          <label>Sticky</label>
          <input type="radio" name='nav-type' />
          <label>Static</label>
          <input type="radio" name='nav-type' />
          <label>Hidden</label>
          </div>
        </section>
        {/* End navbar layout section */}

        {/* Start Footer  layout */}
        <section className="customizer-footer">
          <h5>Footer Type</h5>
            <div className="navbar-type">
            <input type="radio" name='footer' />
            <label>Sticky</label>
            <input type="radio" name='footer' />
            <label>Static</label>
            <input type="radio" name='footer' />
            <label>Hidden</label>
            </div>
        </section>
        {/* end Footer  layout */}
      </article>
    </>
  );
}

export default Setting;
import React, { useState } from 'react';
import { useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Nav.scss';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
const Nav = () => {
  const [bgNavScroll, setBgNavScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgNavScroll(true);
      } else {
        setBgNavScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const [nav, setNav] = useState(true);
  const handleCloseNav = () => {
    setNav(false);
  };
  const handleOpenNav = () => {
    setNav(true);
  };
  return (
    <>
      {nav ? (
        <div className={`nav ${bgNavScroll && 'bgNavScroll'}`}>
          <div className="nav__content">
            <div className="nav__content__info">
              <div className="nav__content__info__logo">
                <a href="#">
                  <h1>DTV</h1>
                </a>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#" onClick={handleCloseNav}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={handleCloseNav}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleCloseNav}>
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" onClick={handleCloseNav}>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleCloseNav}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="menu" onClick={handleCloseNav}>
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="menuOpen" onClick={handleOpenNav}>
          <MenuOpenIcon />
        </div>
      )}
    </>
  );
};

export default Nav;

import React, { useState } from 'react';
import { useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Nav.scss';

const Nav = ({ checked }) => {
  const [bgNavScroll, setBgNavScroll] = useState(false);

  const [windowX, setWindowX] = useState(window.innerWidth);

  //Thuộc tinh windowX thay đổi thì làm
  useEffect(() => {
    const navList = document.querySelector('.navList');
    const menuIcon = document.querySelector('.menu');
    //Hiện nav khi window InnerWidth > 580 và bỏ icon menu
    if (windowX > 580) {
      navList.setAttribute('style', 'display:block');
      menuIcon.setAttribute('style', 'display:none');
    } else {
      menuIcon.setAttribute('style', 'display:block');
    }
  }, [windowX]);

  useEffect(() => {
    //Handle Resize
    const handleResize = () => {
      setWindowX(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    //Handle Scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgNavScroll(true);
      } else {
        setBgNavScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    //Clean Up function Unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log(windowX);

  // const [nav, setNav] = useState(true);
  //Open Nav
  const handleOpenNavList = () => {
    // setNav(false);
    const navList = document.querySelector('.navList');
    const menuIcon = document.querySelector('.menu');

    navList.setAttribute(
      'style',
      'transform:translateX(0);display:block;animation : navMove linear .3s'
    );
    menuIcon.setAttribute('style', 'display:none');
  };
  //Close Nav
  const handleCloseNavList = () => {
    const navList = document.querySelector('.navList');
    const menuIcon = document.querySelector('.menu');

    navList.setAttribute('style', 'display:none;');
    menuIcon.setAttribute('style', 'display:block');
  };
  // const handleOpenNav = () => {
  //   setNav(true);
  // };

  return (
    <>
      {/* ${checked ? 'bgCheckTrueScroll' : 'nav'} */}
      {/* {nav ? ( */}
      <div className={`nav  ${bgNavScroll && 'bgNavScroll'} `}>
        <div className="nav__content">
          <div className="nav__content__info">
            <div className="nav__content__info__logo">
              <a href="#home">
                <h1>DTV</h1>
              </a>
            </div>

            <nav className="navList">
              <div className="closeNav" onClick={handleCloseNavList}>
                X
              </div>
              <ul>
                <li>
                  <a href="#home" onClick={handleOpenNavList}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={handleOpenNavList}>
                    About
                  </a>
                </li>
                {/* <li>
                    <a href="#" onClick={handleCloseNav}>
                      Service
                    </a>
                  </li> */}
                <li>
                  <a href="#portfolio" onClick={handleOpenNavList}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleOpenNavList}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="menu" onClick={handleOpenNavList}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        <div className="menuOpen" onClick={handleOpenNav}>
          <MenuOpenIcon />
        </div>
      )} */}
    </>
  );
};

export default Nav;

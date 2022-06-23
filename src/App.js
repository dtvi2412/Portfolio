import React, { useEffect, useState } from 'react';

import './App.scss';
// import imageMe from "./Assets/images/thomas-habr-185319-unsplash.jpg"
import imageMe from './Assets/images/me3.png';
// import imageMeCheck from "./Assets/images/me5.png";
import Nav from './Components/Nav/Nav';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import About from './Components/About/About';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Portfolio from './Components/Portfolio/Portfolio';
import FindOnMe from './Components/FindOnMe/FindOnMe';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Songs from './Components/Songs/Songs';
function App() {
  const [backToTop, setBackToTop] = useState(false);
  // const [offSetY ,setOffSetY] = useState(0);
  useEffect(() => {
    AOS.init({
      offset: 350,
      duration: 1500,
    });
    let text = 'Front End Developer!';
    // text
    let domdivText = document.querySelector('.app__bgImage__info__text');
    // domdivText.innerHTML = text;
    let index = 0;
    function writeText() {
      domdivText.innerHTML = text.slice(0, index);
      domdivText.style.opacity = '1';
      index++;
      if (index > text.length) {
        setTimeout(() => {
          domdivText.style.opacity = '0.5';
        }, 1000);
        setTimeout(() => {
          domdivText.style.opacity = '0.2';
          index = 0;
        }, 1500);
      }
    }
    setInterval(() => {
      writeText();
    }, 200);

    //HandleScroll BackToTop
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, []);
  //handleBackToTop
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  //Check box change Background
  // const [checked,setChecked] = useState(false);
  return (
    <>
      {/* <div className={`app ${checked ? 'bgCheck' : 'bgUncheck'}`}> */}
      <div className={`app bgUncheck`}>
        <Nav />
        {/* Background Image with Name */}
        <div id="home" className="app__bgImage">
          {/* Check thay doi background */}
          {/* {checked ? <img src={imageMeCheck}/> :  <img  src={imageMe}/>} */}

          <img alt="background" src={imageMe} />

          <div className="app__bgImage__info">
            <h1 className="app__bgImage__info__hello">
              Hello<span>.</span>
            </h1>

            <h2 className="app__bgImage__info__name">I am Vỉ Đặng</h2>
            <div className="app__bgImage__info__text"></div>
            {/* <input  
                        checked={checked}
                        onChange={()=>setChecked(!checked)}
                        type="checkbox" 
                        className="app__bgImage__info__change" /> */}
          </div>
          {/* {checked &&   <div className="fade-bgCheck"/>} */}
          {/* Social */}
          <div className="app__bgImage__social">
            <a
              className="app__bgImage__social__icon"
              href="https://www.facebook.com/profile.php?id=100007255540779"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="socialName">
                <FacebookIcon />
              </div>
              <p>Contact</p>
            </a>
            <a
              className="app__bgImage__social__icon"
              href="https://www.instagram.com/dangthaivi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="socialName">
                <InstagramIcon />
              </div>
              <p>View</p>
            </a>
            <a
              className="app__bgImage__social__icon"
              href="https://github.com/dtvi2412"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="socialName">
                <GitHubIcon />
              </div>
              <p>Overview</p>
            </a>
          </div>
        </div>

        <div></div>
        {/* About */}
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="songs">
          <Songs />
        </div>
        {/* Find on me */}
        <div id="contact">
          <FindOnMe />
        </div>
        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
        {backToTop && (
          <div
            className="backToTop"
            onClick={handleBackToTop}
            style={{ color: 'white' }}
          >
            <ExpandLessIcon />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import image from '../../Assets/images/me3.png';
import './About.scss';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import product from '../../listProduct';
function About() {
  const data = product;
  const language = [
    {
      id: 1,
      name: 'Javascript (ES6+)',
    },
    {
      id: 2,
      name: 'ReactJS & Redux',
    },
    {
      id: 3,
      name: 'HTML & (S)CSS',
    },
    {
      id: 4,
      name: 'Firebase',
    },
    {
      id: 5,
      name: 'Bootstrap & Material UI',
    },
    {
      id: 6,
      name: 'Laravel & MySQL',
    },
  ];
  //Load Language
  const [dataLanguage, setDataLanguage] = useState([]);
  const loadLanguage = () => {
    return dataLanguage.map((item, index) => {
      return (
        <div
          key={index}
          className="about__content__text__info__recent__name__item"
        >
          <ArrowRightIcon /> <h2>{item.name}</h2>
        </div>
      );
    });
  };

  const diaChi = '24/12/1998';
  const [duLieu, setDuLieu] = useState([]);
  useEffect(() => {
    setDuLieu(data);
    setDataLanguage(language);
  }, []);

  const loadData = () => {
    return duLieu.map((item) => {
      return (
        <div key={item.id} className="about__content__product__items__item">
          {/* <img src={item.image} className="image" /> */}
          <div className="about__content__product__items__item__info">
            <h1>{item.duAn}</h1>
            <p>I code with {item.congNghe}</p>
            <a target="_blank" href={item.linkDemo}>
              View Demo
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="about">
      <div className="about__avarta">{/* <img src={image} /> */}</div>
      <div className="about__content">
        <div className="about__content__text">
          <div className="about__content__text__avarta">
            <img src="https://i.imgur.com/Ry4P9Wx.png" alt="chandung" />
            <div className="about__content__text__avarta__info">
              <h1>Đặng Thái Vỉ</h1>
              <p>Front-End Developer</p>
            </div>
            <div className="about__content__text__avarta__locale">
              <div className="item">
                <DateRangeIcon />
                <p>{diaChi}</p>
              </div>
              <div className="item address">
                <LocationOnIcon />
                <p>Phường 3, TP.Cao Lãnh, Đồng Tháp</p>
              </div>
              <a
                href="https://github.com/dtvi2412"
                className="item"
                target="_blank"
              >
                <GitHubIcon />
                <p>Github</p>
              </a>
              <a href="#" className="item">
                <EmailIcon />
                <p>dtvi2412@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="about__content__text__info">
            <h1>About</h1>
            <p>
              My name is Vi, after graduating from the Cao Đẳng Kỹ Thuật Cao
              Thắng college, I got interested in Front-End web programming.So I
              learned more knowledge at Cybersoft Academy and trained at home.
            </p>
            <div className="about__content__text__info__recent">
              <h1>
                Here are a few technologies i've been working with recently:
              </h1>
              <div className="about__content__text__info__recent__name">
                {/* Load Language  */}
                {loadLanguage()}
              </div>
            </div>
          </div>
        </div>

        <div className="about__content__product">
          <h1>What I'm doing</h1>

          <div className="about__content__product__items">
            {/* Load Du Lieu  */}
            {loadData()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

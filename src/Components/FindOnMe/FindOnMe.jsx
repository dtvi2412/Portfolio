import React, { useEffect, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import emailjs from 'emailjs-com';
import './FindOnMe.scss';
// import Popupfilter from '../PopupFillerContact/popupFilter';
import Popupfilter from '../PopupFillerContact/Popupfilter';
import Success from '../PopupSuccess/Success';

function FindOnMe() {
  // const linkImage = 'https://i.imgur.com/qUGI8Da.png';
  const linkImage = 'https://i.imgur.com/JVz9hXB.png';
  const [thongtin, setthongtin] = useState({
    name: '',
    email: '',
    message: '',
  });
  const onChangeName = (e) => {
    let name = document.getElementById('name');

    let nameState = thongtin;
    nameState['name'] = e.target.value;
    setthongtin(nameState);
    // console.log(thongtin);

    if (e.target.value !== '') {
      name.classList.add('labelHave');
      name.classList.remove('label');
    } else {
      name.classList.add('label');
      name.classList.remove('labelHave');
    }
  };
  //Mess

  const onChangeMes = (e) => {
    let name = document.getElementById('message');

    let messState = thongtin;
    messState['message'] = e.target.value;
    setthongtin(messState);
    // console.log(thongtin);

    if (e.target.value !== '') {
      name.classList.add('labelHave');
      name.classList.remove('label');
    } else {
      name.classList.add('label');
      name.classList.remove('labelHave');
    }
  };

  //Email

  const onChangeEmail = (e) => {
    let name = document.getElementById('email');

    let emailState = thongtin;
    emailState['email'] = e.target.value;
    setthongtin(emailState);
    // console.log(thongtin);

    if (e.target.value !== '') {
      name.classList.add('labelHave');
      name.classList.remove('label');
    } else {
      name.classList.add('label');
      name.classList.remove('labelHave');
    }
  };

  //SEND EMAIL
  const [errPop, setErrPop] = useState(false);
  const [sucesspop, setsucesspop] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    //check
    if (
      thongtin['name'] === '' ||
      thongtin['email'] === '' ||
      thongtin['message'] === ''
    ) {
      // let fade = document.getElementById('fade');
      // fade.setAttribute('style', 'opacity:0.1');
      setErrPop(true);
      setTimeout(() => {
        setErrPop(false);
      }, 2000);
    } else {
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let message = document.getElementById('message');

      name.classList.remove('labelHave');
      name.classList.add('label');

      email.classList.remove('labelHave');
      email.classList.add('label');

      message.classList.remove('labelHave');
      message.classList.add('label');

      emailjs
        .sendForm(
          'gmail',
          'template_0zciilu',
          e.target,
          'user_Ci7xnA9CIlBfJMQnFLKtA'
        )
        .then(
          (result) => {
            console.log(result.text);
            setsucesspop(true);
            setTimeout(() => {
              setsucesspop(false);
            }, 2500);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      thongtin['name'] = '';
      thongtin['email'] = '';
      thongtin['message'] = '';
    }
  }
  return (
    <>
      <div className="allAbout">
        {/* Contact */}

        <div className="contact" data-aos="fade-in">
          <form onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <input type="hidden" name="subject" value="Portfolio DTV" />
            <div className="contentform">
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  onChangeName(e);
                }}
              />
              <label className="label" id="name">
                Name
              </label>
            </div>
            <div className="contentform">
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  onChangeEmail(e);
                }}
              />
              <label id="email" className="label">
                Email
              </label>
            </div>
            <div className="contentform">
              <input
                type="textarea"
                name="message"
                onChange={(e) => {
                  onChangeMes(e);
                }}
              />
              <label id="message" className="label">
                Message
              </label>
            </div>
            <input className="send" type="submit" value="Send your message" />
          </form>
        </div>
        {/* Find me  */}
        <div className="findme">
          <div className="findme__img" data-aos="fade-out">
            <img src={linkImage} alt="link image" />
          </div>
          <div>
            <h1>Find me on</h1>
            <div className="findme__content">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100007255540779"
              >
                <FacebookIcon />
              </a>
              <a target="_blank" href="https://github.com/dtvi2412">
                <GitHubIcon />
              </a>
              <a target="_blank" href="https://www.instagram.com/dangthaivi/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      {errPop && (
        <div id="fade">
          <Popupfilter />
        </div>
      )}
      {sucesspop && <Success />}
    </>
  );
}

export default FindOnMe;

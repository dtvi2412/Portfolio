import React, { useEffect, useState } from 'react';
import music1 from '../../Assets/Music/_Stephen Curry Mix . -Believer-.mp3';
import music2 from "../../Assets/Music/Allen Iverson Mix - -Gangsta's Paradise- ʜᴅ.mp3";
import music3 from '../../Assets/Music/Basketball - -GLORIOUS- ᴴᴰ.mp3';
import music4 from '../../Assets/Music/I Wanna Fly- Incredible Basketball Motivation.mp3';
import music5 from '../../Assets/Music/Ja Morant Mix - -Lemonade-.mp3';

import image1 from '../../Assets/Music/images/music1.jpg';
import image2 from '../../Assets/Music/images/music2.png';
import image3 from '../../Assets/Music/images/music3.jpeg';
import image4 from '../../Assets/Music/images/music4.jpg';
import image5 from '../../Assets/Music/images/music5.jpg';

import './Song.scss';
function Songs() {
  //List Music
  const [listMusic, setListMusic] = useState([
    {
      id: 0,
      sound: music1,
      label: 'Believer',
      song: ' Imagine Dragons',
      linkImage: image1,
    },
    {
      id: 1,
      sound: music2,
      label: "Gangsta's Paradise",
      song: ' Imagine Dragons',
      linkImage: image2,
    },
    {
      id: 2,
      sound: music3,
      label: 'GLORIOUS',
      song: ' Imagine Dragons',
      linkImage: image3,
    },
    {
      id: 3,
      sound: music4,
      label: 'I Wanna Fly',
      song: ' Imagine Dragons',
      linkImage: image4,
    },
    {
      id: 4,
      sound: music5,
      label: 'Lemonade',
      song: ' Imagine Dragons',
      linkImage: image5,
    },
  ]);
  //Play and pause Music
  const [playing, setPlaying] = useState(false);
  //CurrentIndex Music
  const [currentIndex, setCurrentIndex] = useState(0);
  //All Event Music
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);
    const cd = $('.songs__cd');
    const audio = $('#audio');
    const btnNext = $('.songs__control__next');
    const btnPrevious = $('.songs__control__previous');
    const progress = $('#progress');
    const btnChooseMusic = $('.songs__list__item');
    // console.log('songs__list__item', btnChooseMusic);
    const cdThumb = cd.animate([{ transform: 'rotate(360deg)' }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumb.pause();

    audio.onplay = function () {
      cdThumb.play();
    };

    audio.addEventListener('pause', function () {
      cdThumb.pause();
    });

    audio.ontimeupdate = () => {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    //When Audio End Next music
    audio.onended = function () {
      setTimeout(() => {
        btnNext.click();
      }, 300);
    };

    //Cancel CD turn around
    btnNext.addEventListener('click', () => {
      cdThumb.cancel();
    });
    btnPrevious.addEventListener('click', () => {
      cdThumb.cancel();
    });
    btnChooseMusic.addEventListener('click', () => {
      cdThumb.cancel();
      console.log('stop');
    });

    //Change Progress Music
    progress.addEventListener('change', (e) => {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    });
  }, [playing]);
  //Handle Click Play Music
  const handlePlayMusic = () => {
    const audio = document.querySelector('#audio');
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      audio.volume = 0.5;
      setPlaying(true);
    }
  };

  //Handle Click Next Music
  const handleNextMusic = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= listMusic.length - 1) {
      setCurrentIndex(0);
    }
    setPlaying(true);
  };

  //Handle Click Previous Music
  const handlePreviousMusic = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(listMusic.length - 1);
    }
    setPlaying(true);
  };

  //Handle Choose Music
  const handleChosseMusic = (id) => {
    setCurrentIndex(id);
    setPlaying(true);
  };

  //Handle Render List Music
  const renderListMusic = () => {
    return listMusic.map((item) => {
      return (
        <div
          key={item.id}
          className={`songs__list__item ${
            currentIndex === item.id && 'songs__list__active'
          }`}
          onClick={() => handleChosseMusic(item.id)}
        >
          <div className="songs__list__item__image">
            <img src={item.linkImage} alt={`music-${item.id}`} />
          </div>
          <div className="songs__list__item__text">
            <h1>{item.label}</h1>
            <p>{item.song}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="songs">
      <div>
        <div className="songs__cd">
          <img
            className="songs__cd__image"
            src={listMusic[currentIndex].linkImage}
            alt={`music-${listMusic[currentIndex].id}`}
          />
          <div className="songs__cd__circleOut" />
          <div className="songs__cd__circleIn" />
        </div>
        <audio id="audio" src={listMusic[currentIndex].sound} autoPlay></audio>
        <input
          type="range"
          min="1"
          max="100"
          className="songs__progress"
          id="progress"
          defaultValue="0"
        />
        <h1 className="songs__label">{listMusic[currentIndex].label}</h1>
        <div className="songs__control">
          <button
            onClick={() => handlePreviousMusic()}
            className="songs__control__previous"
          >
            ☜
          </button>
          <button
            className="songs__control__play"
            onClick={() => handlePlayMusic()}
          >
            {playing ? '⏸︎ ' : '⏵︎'}
          </button>
          <button
            onClick={() => handleNextMusic()}
            className="songs__control__next"
          >
            ☞
          </button>
        </div>
      </div>
      <div className="songs__list">
        <h1>All Songs</h1>
        {renderListMusic()}
      </div>
    </section>
  );
}

export default Songs;

import React from 'react';
import './PopupDetail.scss';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import LinkIcon from '@material-ui/icons/Link';
function PopupDetail({ popUp, detailItem }) {
  //Close Popup Transfrorm
  const handleClose = () => {
    let closePopup = document.getElementById('ClosePopup');

    closePopup.style.animation = 'trans 0.7s linear 0s 1 alternate';

    setTimeout(() => {
      popUp();
    }, 700);
  };
  return (
    <div className="popup" id="ClosePopup">
      <div className="popup__close" onClick={() => handleClose()}>
        <CancelPresentationIcon />
      </div>
      <div className="popup__content">
        <div className="popup__content__left">
          <img src={detailItem.imageDetail} alt="detail" />
        </div>
        <div className="popup__content__right">
          <div className="popup__content__right__title">
            <h1>DEVOLOPMENT</h1>
            <h2>{detailItem.duAn}</h2>
            <p>{detailItem.moTa}</p>
          </div>
          <div className="popup__content__right__congNghe">
            <h1>Features</h1>
            <p>{detailItem.congNghe}</p>
          </div>
          <div className="popup__content__right__demo">
            <h1>View demo</h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={detailItem.linkDemo}
            >
              <LinkIcon />
            </a>
          </div>
          {/* ek */}
        </div>
      </div>
    </div>
  );
}

export default PopupDetail;

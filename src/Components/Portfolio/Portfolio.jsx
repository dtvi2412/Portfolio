import React, { useEffect, useState } from 'react';
import product from '../../listProduct';
import PopupDetail from '../PopupDetail/PopupDetail';
import './Portfolio.scss';
import { NAME_REACT } from '../../utils/constants';
function Portfolio() {
  const data = product;
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    setDataProduct(data);
  }, [data]);
  const [checkNgonNgu, setCheckNgonNgu] = useState('ALL');
  //POPUP ITEM
  const [popUp, setPopup] = useState(false);
  const [detailItem, setDetailItem] = useState('');
  //Handle Send Item Popup
  const handlePopupProduct = (item) => {
    // console.log(item);
    setDetailItem(item);
    setPopup(true);
  };
  //Close popup
  const handleClose = () => {
    setPopup(false);
  };
  useEffect(() => {
    //ACTIVE
    let list = document.querySelectorAll('.list');

    //Cach 1
    // for (let i = 0; i < list.length; i++) {
    //   list[i].addEventListener('click', () => {
    //     list.forEach((l) => l.classList.remove('active'));
    //     list[i].classList.add('active');
    //   });
    // }

    //Cach2
    list.forEach((theP) => {
      theP.addEventListener('click', () => {
        list.forEach((p) => p.classList.remove('active'));
        theP.classList.add('active');
      });
    });
  }, [checkNgonNgu]);

  const handleChangeNgonNgu = (name) => {
    //Check binding
    if (name === 'ALL') {
      setCheckNgonNgu('ALL');
    }
    if (name === NAME_REACT) {
      setCheckNgonNgu(NAME_REACT);
    }
    if (name === 'HTML') {
      setCheckNgonNgu('HTML');
    }
  };

  // const [currentIndexDataProduct, setCurrentIndexDataProduct] = useState(9);
  const renderData = () => {
    //   Cach 1
    // if (checkNgonNgu === 'ALL') {
    //   return dataProduct
    //     .slice(0, currentIndexDataProduct)
    //     .map((item, index) => {
    //       return (
    //         <div key={index} className="portfolio__content__items__item react">
    //           <img
    //             className="portfolio__content__items__item__img"
    //             src={item.image}
    //             alt={`name-${item.duAn}`}
    //           />{' '}
    //           <h1>{item.duAn}</h1>
    //           <div
    //             className="portfolio__content__items__item__view"
    //             onClick={() => handlePopupProduct(item)}
    //           >
    //             View Detail
    //           </div>
    //         </div>
    //       );
    //     });
    // }
    // if (checkNgonNgu === NAME_REACT) {
    //   return dataProduct
    //     .filter((item) => item.ngonNgu === NAME_REACT)
    //     .map((item, index) => {
    //       return (
    //         <div key={index} className="portfolio__content__items__item react">
    //           <img
    //             className="portfolio__content__items__item__img"
    //             src={item.image}
    //             alt={`name-${item.duAn}`}
    //           />{' '}
    //           <h1>{item.duAn}</h1>
    //           <div
    //             className="portfolio__content__items__item__view"
    //             onClick={() => handlePopupProduct(item)}
    //           >
    //             View Detail
    //           </div>
    //         </div>
    //       );
    //     });
    // }
    // if (checkNgonNgu === 'HTML') {
    //   return dataProduct
    //     .filter((item) => item.ngonNgu === 'HTML')
    //     .map((item, index) => {
    //       return (
    //         <div key={index} className="portfolio__content__items__item react">
    //           <img
    //             className="portfolio__content__items__item__img"
    //             src={item.image}
    //             alt={`name-${item.duAn}`}
    //           />
    //           <h1>{item.duAn}</h1>
    //           <div
    //             className="portfolio__content__items__item__view"
    //             onClick={() => handlePopupProduct(item)}
    //           >
    //             View Detail
    //           </div>
    //         </div>
    //       );
    //     });
    // }
    // return null;
    //Cach 2
    return dataProduct.map((item, index) => {
      if (item.ngonNgu === checkNgonNgu) {
        return (
          // react
          <div key={index} className="portfolio__content__items__item  react">
            <img
              className="portfolio__content__items__item__img"
              src={item.image}
              alt={`name-${item.duAn}`}
            />
            <h1>{item.duAn}</h1>
            <div
              className="portfolio__content__items__item__view"
              onClick={() => handlePopupProduct(item)}
            >
              View Detail
            </div>
          </div>
        );
      }
      if (checkNgonNgu === 'ALL') {
        return (
          // react
          <div key={index} className="portfolio__content__items__item react ">
            <img
              className="portfolio__content__items__item__img"
              src={item.image}
              alt={`name-${item.duAn}`}
            />{' '}
            <h1>{item.duAn}</h1>
            <div
              className="portfolio__content__items__item__view"
              onClick={() => handlePopupProduct(item)}
            >
              View Detail
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <>
      {popUp && <PopupDetail detailItem={detailItem} popUp={handleClose} />}
      <div className="portfolio">
        <div className="portfolio__content">
          <h1>Portfolio</h1>
          {/* Render Product */}
          <div className="portfolio__content__choose" id="chose">
            <p
              onClick={() => {
                handleChangeNgonNgu('ALL');
              }}
              className="active list"
            >
              ALL
            </p>
            <p
              onClick={() => {
                handleChangeNgonNgu(NAME_REACT);
              }}
              className="list"
            >
              REACTJS
            </p>
            <p
              onClick={() => {
                handleChangeNgonNgu('HTML');
              }}
              className="list"
            >
              HTML5, CSS3, JAVASCRIPT
            </p>
          </div>
          <div className="portfolio__content__items " data-aos="zoom-in-up">
            {renderData()}
            {/* WAIT SOMETHING  */}
            {/* {dataProduct.length > currentIndexDataProduct &&
              checkNgonNgu === 'ALL' && (
                <button
                  onClick={setCurrentIndexDataProduct.bind(
                    this,
                    currentIndexDataProduct + 3
                  )}
                >
                  Xem thêm
                </button>
              )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

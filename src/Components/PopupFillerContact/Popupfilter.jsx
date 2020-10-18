import React from 'react';
import './filter.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
function Popupfilter() {
  return (
    <div className="filter">
      <div className="filter__content">
        <div className="err">
          <ErrorOutlineIcon />
        </div>{' '}
        <h1> You need to enter full information!.</h1>
      </div>
    </div>
  );
}

export default Popupfilter;

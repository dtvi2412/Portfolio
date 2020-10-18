import React from 'react';
import './Success.scss';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
function Success() {
  return (
    <div className="success">
      <div className="success__content">
        <div className="icon">
          <DoneOutlineIcon />
        </div>
        <h1>
          You have sent the message successfully. I will read it. Thank you!
        </h1>
      </div>
    </div>
  );
}

export default Success;

import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import './FindOnMe.scss';
function FindOnMe() {
  return (
    <div className="findme">
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
  );
}

export default FindOnMe;

import React from 'react';
import Unread from '../img/Letter/Unread.png';
import Archieve from '../img/Letter/Archieve.png';
import Later from '../img/Letter/Later.png';
import List from '../img/Letter/List.png';
import Sort from '../img/Letter/Sort.png';
import Delete from '../img/Letter/Delete.png';
import Profile from '../img/1.png';
import Back from '../img/Letter/back.png';
import Forward from '../img/Letter/forward.png';
import Pdf from '../img/Letter/pdf.png';
import { NavLink } from 'react-router-dom';

const Letter = () => {
  return (
    <div className="letter">
      <div className="letter-icons">
        <div><img className="letter-icons-item" src={Unread} alt="unread" /></div>
        <div><img className="letter-icons-item" src={Archieve} alt="archieve" /></div>
        <div><img className="letter-icons-item" src={Later} alt="later" /></div>
        <div><img className="letter-icons-item" src={List} alt="list" /></div>
        <div><img className="letter-icons-item" src={Sort} alt="sort" /></div>
        <div><img className="letter-icons-item" src={Delete} alt="delete" /></div>
      </div>
      <div className="mail-header">
        <div className="mail-header-title">Nextmail New Look</div>
        <div className="mail-header-content">
          <img src={Profile} />
          <div className="mail-header-suptitle">Salman Shah</div>
          <div className="mail-header-time">11:00 AM Today</div>
          <div className="mail-header-email">From: shah.salman4@gmail.com</div>
        </div>
      </div>
      <div className="letter-content">
        <p>Hello Adithya,</p><br />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis <br />nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. </p><br />

        <p className="letter-content1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.</p><br />

        <p className="letter-content2">Cheers</p>
        <p>DesignAvenger</p>
      </div>
      <div className="pdf-container">
        <div className="pdf">
          <img src={Pdf} className="pdf-icon" /> Sample.pdf
        </div>
      </div>

      <div className="letter-btns">
        <NavLink to="#"><button className="btn"><img className="edit-icon letter-icon" src={Back} alt="edit" />Reply</button></NavLink>
        <NavLink to="#"><button className="btn letter-btn"><img className="edit-icon letter-icon" src={Forward} alt="edit" />Forward</button></NavLink>
      </div>
    </div>
  );
}

export default Letter;

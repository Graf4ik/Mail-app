import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../img/1.png';
import Edit from '../img/edit.png';
import Inbox from '../img/inbox.png';
import Drafts from '../img/drafts.png';
import More from '../img/more.png';
import Sent from '../img/sent.png';
import Trash from '../img/trash.png';
import Attachments from '../img/attachments.png';



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <NavLink to="#"><button className="btn"><img className="edit-icon" src={Edit} alt="edit" />Compose</button></NavLink>
        <div className="mailbox">
          <div className="navbar-titles">MAILBOX</div>
          <div className="mailbox-item mailbox-active"><img className="icon inbox-icon" src={Inbox} alt="edit" />Inbox (200)</div>
          <div className="mailbox-item"><img className="icon" src={Sent} alt="sent" />Sent Mail</div>
          <div className="mailbox-item"><img className="icon" src={Drafts} alt="drafts" />Drafts</div>
          <div className="mailbox-item"><img className="icon" src={Trash} alt="trash" />Trash (2)</div>
          <div className="mailbox-item"><img className="icon" src={Attachments} alt="attachments" />Attachments</div>
          <div className="mailbox-item"><img className="icon" src={More} alt="more" />More...</div>
        </div>
        <div className="lists">
          <div className="navbar-titles">LISTS</div>
          <div className="list-item">Linkedin</div>
        </div>
        <div className="labels">
          <div className="navbar-titles">LABELS</div>
          <div className="labels-item"><div className="circle circle-c1" /><span className="labels-text">Personal (2)</span></div>
          <div className="labels-item labels-item-active"><div className="circle circle-c2" /><span className="labels-text">Clients</span></div>
          <div className="labels-item"><div className="circle circle-c3" /><span className="labels-text">Work (2)</span></div>
          <div className="labels-item"><div className="circle circle-c4" /><span className="labels-text">Friends</span></div>
        </div>
      </div>
      <div className="profile">
      <img src={Profile} />
        <div className="profile-content">
          <div className="profile-title">Salman Shah</div>
          <div className="profile-mail">shah.salman4@gmaiil.com</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

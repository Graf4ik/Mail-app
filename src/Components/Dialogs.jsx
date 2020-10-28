import React from 'react';
import Search from '../img/search.png'
import Attachments from '../img/attachments.png';
import Down from '../img/down.png';

const Dialogs = () => {
  return (
    <div className="dialogs">
      <section className="dialogs-header">
        <form className="search">
          <img className="search-icon" src={Search} alt="search" />
          <input type='text' className="search_input" placeholder='Search' />
        </form>
        <div className="dialogs-header-content">
          <div className="dialogs-header-title">Inbox</div>
          <div className="dialogs-header-suptitle">Sort by: Unread<img className="arrow_down" src={Down} alt="attachments" /></div>
        </div>
      </section>
      <section className="dialogs-item dialogs-item1">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Design Language</div>
          <div className="dialogs-time">08:00 PM</div>
          <div className="dialogs-suptitle">Salman Shah</div>
        </div>
      </section>
      <section className="dialogs-active">
        <div className="dialogs-container">
          <div className="row">
            <div className="dialogs-title">Nextmail New Look</div>
            <div className="dialogs-time">11:00 AM</div>
          </div>
          <div className="row2">
          <div className="dialogs-suptitle">Salman Shah</div>
          <div className="dialogs-attachment"><img className="icon" src={Attachments} alt="attachments" /></div>
          </div>
        </div>
      </section>
      <section className="dialogs-item dialogs-item2">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Interview with Shopify</div>
          <div className="dialogs-time">12:05 PM</div>
          <div className="dialogs-suptitle">Aisha Dialo</div>
        </div>
      </section>
      <section className="dialogs-item">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Narcos Season 2</div>
          <div className="dialogs-time">07:35 PM</div>
          <div className="dialogs-suptitle">Netflix</div>
        </div>
      </section>
      <section className="dialogs-item dialogs-item4">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Top Stories of the Day</div>
          <div className="dialogs-time">Yesterday</div>
          <div className="dialogs-suptitle">TechCrunch</div>
        </div>
      </section>
      <section className="dialogs-item dialogs-item5">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Updates from Kevin</div>
          <div className="dialogs-time">Yesterday</div>
          <div className="dialogs-suptitle">Goodreads</div>
        </div>
      </section>
      <section className="dialogs-item .dialogs-item6">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Startup 2016</div>
          <div className="dialogs-time">09 Oct, 16</div>
          <div className="dialogs-suptitle">Goodreads</div>
        </div>
      </section>
      <section className="dialogs-item">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Narcos Season 2</div>
          <div className="dialogs-time">07:35 PM</div>
          <div className="dialogs-suptitle">Netflix</div>
        </div>
        </section>
      <section className="dialogs-item">
        <div className="dialogs-container">
          <div className="dialogs-oval" />
          <div className="dialogs-title">Startup 2016</div>
          <div className="dialogs-time">09 Oct, 16</div>
          <div className="dialogs-suptitle">Goodreads</div>
        </div>
      </section>
    </div>
  );
}

export default Dialogs;

import React from 'react';
import Logo from '../img/Bitmap.png'

const Header = () => {
  return (
    <div className="header">
      <div className="ovals">
        <div className="oval oval1"></div>
        <div className="oval oval2"></div>
        <div className="oval oval3"></div>
      </div>
      <img className="logo" src={Logo} alt=""/>
    </div>
  );
}

export default Header;

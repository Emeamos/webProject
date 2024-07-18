import React from 'react';
import './Header.css'; // Import CSS file for styling
import passport from './../assets/passport.jpeg'

const Header = () => {
  return (
    <section className="header"> 
      <div className="header-content">
        <div className="header-text">
        <h2>name</h2>
          <h1>lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sint vel a id esse quoc</h1>
          <p>ipsum, dolor sit amet consectetur adipisicing elit. Nam</p>
        </div>
        <div className="header-image">
          <img src={passport} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;

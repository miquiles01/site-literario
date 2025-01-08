import React from 'react';

import logo from '../assets/logo.png';


function Navbar() {
  return (
    <div className="container">
      <div className="nav-container">
        <nav>
          <a href="#intro">
          <img className="logo" src={logo} alt="thali" />
          </a>
          <ul className="navbar-items">
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#books">Lidos 2024</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

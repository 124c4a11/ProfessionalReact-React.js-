import React from 'react';

import './Header.css';


const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex flex-wrap">
      <h3>
        <a href="#">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
      <button
        onClick={ onServiceChange }
        className="header-btn btn btn-primary btn-sm"
      >Change Service</button>
    </div>
  );
};


export default Header;

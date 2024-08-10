import React from 'react';
import { Link } from 'react-router-dom';
import { FaYelp } from "react-icons/fa";

function Header() {
  return (
    <header style={headerStyle}>
       <div className="flex justify-center mb-2"><FaYelp className="m-1 text-2xl"/>
      <h1><Link to="/" className="text-2xl" style={linkStyle}>Mini-Yelp</Link></h1></div>
      <nav className="display flex justify-center">
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={navItemStyle}><Link to="/all-restaurants" style={linkStyle}>All Restaurants</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#57886c',
  color: 'white',
  padding: '15px 0',
  textAlign: 'center',
  
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const navListStyle = {
  listStyle: 'none',
  padding: 0
};

const navItemStyle = {
  display: 'inline',
  margin: '0 10px'
};

export default Header;

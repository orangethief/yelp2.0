import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1><Link to="/" style={linkStyle}>Mini-Yelp</Link></h1>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          {/* Add more links if needed */}
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '15px 0',
  textAlign: 'center'
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

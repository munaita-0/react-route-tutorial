import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header>App</header>
    <menu>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
    </menu>
  </div>
)

export default Header;

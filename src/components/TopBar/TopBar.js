import React from 'react';
import './TopBar.css';

const TopBar = ({logo}) => (
  <div className="TopBar" data-testid="TopBar">
    <img className="logo" src={logo} alt="Vitesco logo"/>
    <div className="content">
      <h1>Competence Matrix</h1>
    </div>
    <nav>
      <ul className="nav-ul">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </div>
);

export default TopBar;

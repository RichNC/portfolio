import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation(){
  return (
    <div className="navigation">
      <Link to="/"><h1 id ="initials" onClick={lightsOff}>rc</h1></Link>
      <div className="navigation-sub">
        <Link to="/projects" className="item projects" id="nav-link" onClick={lightsOff}>Projects</Link>
        <Link to="/articles" className="item articles" onClick={lightsOff}>Articles</Link>
        <Link to="/about" className="item about" onClick={lightsOn}>About</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rich-cherry"><i class="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rich-cherry/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export function lightsOff(){
  document.querySelector('body').style.backgroundColor = '#12191C';
  document.querySelector('body').style.color = '#F9E7E7';
}

export function lightsOn(){
  document.querySelector('body').style.backgroundColor = '#F9E7E7';
  document.querySelector('body').style.color = '#12191C';
}

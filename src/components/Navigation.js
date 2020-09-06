import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation(){
  return (
    <div className="navigation">
      <Link to="/"><h1 id ="initials" onClick={lightsOff}>rc</h1></Link>
      <div className="navigation-sub">
        <Link to="/projects" className="item projects" id="nav-link" onClick={screenWiden}>Projects</Link>
        <Link to="/articles" className="item articles" onClick={lightsOff}>Articles</Link>
        <Link to="/about" className="item about" onClick={lightsOn}>About</Link>
        <a className="item" target="_blank" rel="noopener noreferrer" href="https://github.com/rich-cherry"><i className="fab fa-github"></i></a>
        <a className="item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rich-cherry/"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

const lightsOff = () => {
  backgroundDark();
  textLight();
  screenNarrow();
}

const lightsOn = () => {
  backgroundLight();
  textDark();
  screenNarrow();
}

const screenWiden = () => {
  screenWide();
  backgroundDark();
  textLight();
}

const backgroundLight = () => {
  document.body.style.backgroundColor = '#F9E7E7';
}

const textDark = () => {
  document.body.style.color = '#12191C';
}

const screenWide = () => {
  document.querySelector(".main-container").style.width = "90%";
}

const backgroundDark = () => {
  document.body.style.backgroundColor = "";
}

const textLight = () => {
  document.body.style.color = "";
}

const screenNarrow = () => {
  document.querySelector(".main-container").style.width = "";
}








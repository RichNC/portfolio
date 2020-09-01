import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Projects } from './Projects';
import { Articles } from './Articles';
import { About } from './About';
import { Home } from './Home';
import { lightsOn } from './About';

function lightsOff(){
  document.querySelector('body').style.backgroundColor = '#12191C';
  document.querySelector('body').style.color = '#F9E7E7';
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="navigation">
            <Link to="/"><h1 id ="initials" onClick={lightsOff}>rc</h1></Link>
            <div className="navigation-sub">
              <Link to="/projects" className="item" onClick={lightsOff}>Projects</Link>
              <Link to="/articles" className="item" onClick={lightsOff}>Articles</Link>
              <Link to="/about" className="item" onClick={lightsOn}>About</Link>
              <a><i className="fab fa-github"></i></a>
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </div>
        <footer>© 2020 Rich Cherry</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Projects } from './Projects';
import { Articles } from './Articles';
import { About } from './About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <h1 id ="initials">rc</h1>
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            <a><i class="fab fa-github"></i></a>
          </div>
        </div>
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Articles } from './Articles';
import { Footer } from './components/Footer';
import { AnimatedSwitch } from './AnimatedSwitch';
import { AnimatedRoute } from './AnimatedRoute';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
        <Navigation />
          <AnimatedSwitch
            animationClassName="page"
            animationTimeout={1000}>
            <Route exact path="/" component={Home} />
            <AnimatedRoute path="/projects" component={Projects} />
            <AnimatedRoute path="/articles" component={Articles} />
            <AnimatedRoute path="/about" component={About} />
          </AnimatedSwitch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}



export default App;

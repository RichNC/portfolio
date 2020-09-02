import React from 'react';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
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

import React, { Component } from "react";
import { Link, Route } from 'react-router'
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact'
import "./style.css";

class App extends Component {
  render() {
    return (
    
    <div className="App">
        <div className = 'nav'>
        <h1 className="title">Aaron Denney</h1>
        <p className = 'sub-heading'>Web Developer</p>
          <ul className = 'heading-links'>
            <li className = 'link'><a href='#about'>About</a></li>
            <li className = 'link'><a href='#work'>Work</a></li>
            <li className = 'link'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      

      <main>
        <div className = 'about' id = 'about'><About /></div>
        <div className = 'work' id = 'work'><Work /></div>
        <div className = 'contact' id = 'contact'><Contact /></div>
      </main>


    </div>
    )
  }
}

export default App;

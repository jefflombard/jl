import React, { Component } from 'react';
import './Project.css';
import logo from './cah.png'

class Project extends Component {
  
  render() {
    
    return (
      <div className="project">
        <h3>Title</h3>
        <p>A short description.</p>
        <span class="tags"><img className="project-logo" src={logo}/><p>Test</p></span>
      </div>
    )
  }
}

export default Project;
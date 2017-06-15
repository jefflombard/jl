import React, { Component } from 'react';
import './Project.css';
import logo from './cah.png'

class Project extends Component { 
  render() {
    
    return (
      <div className="project">
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        <div className="tags"><p><img className="project-logo" src={logo}/>{this.props.tags}</p></div>
      </div>
    )
  }
}

export default Project;
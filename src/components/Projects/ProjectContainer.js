import React, { Component } from 'react';
import './Project.css';
import ProjectSearch from './ProjectSearch'

class ProjectContainer extends Component {
  
  render() {
    
    return (
      <div className="cardContainer">
        <h2>projects</h2>
        <ProjectSearch />
        
      </div>
    )
  }
}

export default ProjectContainer;
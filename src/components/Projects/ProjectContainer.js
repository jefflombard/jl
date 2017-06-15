import React, { Component } from 'react';
import './Project.css';
import ProjectSearch from './ProjectSearch';
import Project from './Project';

class ProjectContainer extends Component {
  
  render() {
    
    return (
      <div className="projectContainer">
        <h2>projects</h2>
        <div className="project-flexContainer">
                    <Project />

          <Project />
          <Project />
          <Project />
          <Project />
          
        </div>
      </div>
    )
  }
}

export default ProjectContainer;
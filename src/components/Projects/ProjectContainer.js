import React, { Component } from 'react';
import './Project.css';
import ProjectSearch from './ProjectSearch';
import Project from './Project';

class ProjectContainer extends Component {
  static defaultProps = {projects:[]};

  render() {
    const projectList = this.props.projects.map((project,id) => {
      return (
          <div key={'project'+id} className="projectContainer-FlexItem">
            <Project title={project.title} desc={project.desc} tags={project.tags} url={project.url}/>         
          </div>
        );
      });
    
    return (
      <div className="projectContainer">
        <h2>side projects</h2>
        <div className="project-flexContainer">
          {projectList}
        </div>
      </div>
    )
  }
}

export default ProjectContainer;
import React, { Component } from 'react';
import SkillContainer from './Skills/SkillContainer';
import ProjectContainer from './Projects/ProjectContainer';
import CardContainer from './Cards/CardContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.setState({
      searchTerm: null
    })
  }

  render() {
    return (
      <div>
        <CardContainer />
        <SkillContainer />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;

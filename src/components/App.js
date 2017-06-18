import React, { Component } from 'react';
import SkillContainer from './Skills/SkillContainer';
import ProjectContainer from './Projects/ProjectContainer';
import CardContainer from './Cards/CardContainer';
import ContactContainer from './Contact/ContactContainer.js'
import * as api from './apiClient';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={skills:[],projects:[]}
  }

  render() {
    return (
      <div>
        <ContactContainer id="contactSection"/>
        <SkillContainer skills={this.state.skills} />
        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }

  componentDidMount() {    

    // Load Skills
    api.getRemoteData().then(data => this.setState(data));

    // Load Portfolio Objects
    
    //https://stackoverflow.com/questions/38755092/reactjs-componentdidmount-and-fetch-api
  }
}

export default App;

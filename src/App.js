import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkillContainer from './Skills/SkillContainer';
import Skill from './Skills/Skill';

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
       <SkillContainer />
      </div>
    );
  }
}

export default App;

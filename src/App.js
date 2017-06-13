import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <Skill name="javascript"/>
        <Skill name="react"/>
        <Skill name="jest"/>
        <Skill name="functional programming"/>
      </div>
    );
  }
}

export default App;

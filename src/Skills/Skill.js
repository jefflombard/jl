import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {
  render() {
    return (
      <button
        value={this.props.name}
        className="skill">
        {this.props.name}
      </button>
    );
  }
}

class SkillsContainer extends Component {
  render() {
    return (
      <div>
        <Skill/>
      </div>
    )
  }
}


export default Skill;

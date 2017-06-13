import React, { Component } from 'react';
import './Skill.css';
import Skill from "./Skill";

class SkillsContainer extends Component {
  render() {
    let skills = ["javascript","react","test"];
    let skillsList = skills.map(skill => {
      return (
          <div className="skillContainer-FlexItem">
            <Skill name={skill}/>
          </div>
        );
      });

    return (
      <div className="skillContainer">
        <h2>Favorite Skills</h2>
        <div className="skillContainer-FlexBox">
          {skillsList}
        </div>
      </div>
    )
  }
}

export default SkillsContainer;
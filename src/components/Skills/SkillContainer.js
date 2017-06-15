import React, { Component } from 'react';
import './Skill.css';
import Skill from "./Skill";

class SkillsContainer extends Component {
  static defaultProps = {skills:[]};
  
  render() {
    const skillsList = this.props.skills.map((skill,id) => {
      return (
          <div key={'skill'+id} className="skillContainer-FlexItem">
            <Skill name={skill}/>
          </div>
        );
      });

    return (
      <div className="skillContainer">
        <h2>skills</h2>
        <div className="skillContainer-FlexBox">
          {skillsList}
        </div>
      </div>
    )
  }
}

export default SkillsContainer;
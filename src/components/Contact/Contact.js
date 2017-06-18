import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <a href={this.props.url}
        target="_blank"
        value={this.props.name}
        className="skill">
        {this.props.name}
      </a>
    );
  }
}

export default Contact;

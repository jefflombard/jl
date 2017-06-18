import React, { Component } from 'react';
import './Contact.css';
import Contact from "./Contact";

class ContactContainer extends Component {
  static defaultProps = {contacts:[{name:"jefflombardjr(at)gmail(dot)com",url:"mailto:jefflombardjr@gmail.com"},{name:"@jefflombardjr",url:"https://twitter.com/JeffLombardJr"},{name:"linkedin",url:"https://www.linkedin.com/in/jefflombardjr/"}]};
  
  render() {
    const contactList = this.props.contacts.map((contact,id) => {
      return (
          <div key={'contact'+id} className="skillContainer-FlexItem">
            <Contact name={contact.name} url={contact.url}/>
          </div>
        );
      });

    return (
      <div className="skillContainer">
        <h2>contact</h2>
        <div className="skillContainer-FlexBox">
          {contactList}
        </div>
      </div>
    )
  }
}

export default ContactContainer;
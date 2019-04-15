import React, { Component } from 'react';
import './index.scss';

class Contact extends Component {
  render() {
    // TODO: write better code
    const { contact } = this.props.content;
    const contactItems = Object.keys(this.props.content.contact).map((info, index) => {
      let innerContactNode = contact[info];
      switch (info) {
        case 'email':
          innerContactNode = <React.Fragment>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `mailto:${ contact[info] }` }>{ contact[info] }</a> (linked)
          </React.Fragment>;
          break;
        case 'linkedin':
        case 'github':
          innerContactNode = <React.Fragment>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `https://${ contact[info] }` }>{ contact[info] }</a> (linked)
          </React.Fragment>;
          break;
        default:
          break;
      }

      return <li className="item" key={ `contact_${ index }` }>{ innerContactNode }</li>
    });

    return (
      <address className="Contact">
        <h2 className="header">Details</h2>
        <ul className="list">{ contactItems }</ul>
      </address>
    );
  }
}

export default Contact;
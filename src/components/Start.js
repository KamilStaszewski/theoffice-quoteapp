import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Start extends Component {
  render() {
    return (
      <div className="landingpage">
        <Link to='/QuoteApp' className="link">Guess who said that The Office quote</Link>
      </div>
    )
  }
}

export default Start

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Start extends Component {
  render() {
    return (
      <div>
        Start
        <Link to='/QuoteApp' className="link">Link</Link>
      </div>
    )
  }
}

export default Start

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import { Button } from 'react-bootstrap';

export class Start extends Component {
  render() {
    return (
        <div className="landingpage">
          <div className="buttonContainer">
            <Link to='/QuoteApp' className="link"><Button variant="light">Play the game</Button></Link>
          </div>
        </div>
    )
  }
}

export default Start

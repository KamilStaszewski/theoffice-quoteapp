import React, { Component } from 'react'
import Quote from './Quote'
import Answers from './Answers';
import data from '../../fakedata'

export default class QuoteApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       index: 0,
       isCorrect: null
    }
  }

  confirmAnswer = () => {
      this.setState({
          index: this.state.index + 1,
          isCorrect: null
      })
  }

  handleClick = (e, index) => {
    if (e.target.textContent === data[index].name) {
      this.setState({
        isCorrect: true
      }) 
    } else {
      this.setState({
        isCorrect: false
      })
    }
  }
  
  render() {
      const { index, isCorrect } = this.state
      let button;
      if (isCorrect == true || isCorrect == false) {
        button = <button onClick={this.confirmAnswer}>Confirm</button>
      } 
    return (
      <div className="QuoteApp">
         {isCorrect === null ? <div className="Quote">
          <Quote index={index}/>
          <Answers index={index}
             handleClick={this.handleClick}
             />
        </div> : null}
        {isCorrect !== null && isCorrect && 
        <h1>you're right</h1>}
        {isCorrect !== null && !isCorrect && 
        <h1>you're wrong</h1>}
        
        {button}
      </div>
    )
  }
}

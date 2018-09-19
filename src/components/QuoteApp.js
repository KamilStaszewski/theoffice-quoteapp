import React, { Component } from 'react'
import Quote from './Quote'
import Answers from './Answers';
import data from '../../fakedata'

export default class QuoteApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       index: Math.floor(Math.random() * data.length),
       isCorrect: null,
       gifarr: ['http://blog.colourfulrebel.com/files/2016/08/giphy2.gif', 'https://www.cvonline.hu/blog/wp-content/uploads/2017/04/cvonline_2.gif'],
       random: 0
    }
  }

  confirmAnswer = () => {
      this.setState({
          index: Math.floor(Math.random() * data.length),
          isCorrect: null,
          random: this.state.gifarr[Math.floor(Math.random() * this.state.gifarr.length)]
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
      console.log(this.state)
    return (
      <div className="QuoteApp">
        <div className="QuoteApp-window">
          <div className="QuoteApp-image">
          {isCorrect !== null && isCorrect && 
              <img src={this.state.random}
                   className="QuoteApp-img"
                    alt="no"></img>}
          {isCorrect !== null && !isCorrect && 
            <img src={this.state.random}
                 className="QuoteApp-img"
                 alt="no"></img>}
          </div>
          <div className="QuoteApp-quote">
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
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import data from '../../fakedata';

const Answers = (props) => {
  return (
    <div className="answerscontainer">
        <h2 onClick={e => props.handleClick(e, props.index)}>{data[props.index].answers[0]}</h2>
        <h2 onClick={e => props.handleClick(e, props.index)}>{data[props.index].answers[1]}</h2>
        <h2 onClick={e => props.handleClick(e, props.index)}>{data[props.index].answers[2]}</h2>
    </div>
  )
}

export default Answers
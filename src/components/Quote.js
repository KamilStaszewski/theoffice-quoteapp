import React, { Component } from 'react'
import data from '../../fakedata';

const Quote = (props) => {
  return (
    <h2>{data[props.index].quote}</h2>
  )
}

export default Quote

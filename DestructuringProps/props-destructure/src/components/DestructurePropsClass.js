import React, { Component } from 'react'

export default class DestructurePropsClass extends Component {
  render() {
   
    const {name, age} = this.props; // destructuring props
    const {state1, state2} = this.state; // destructuring state

    return (
      <div>
        <h1>Class Component</h1>
        <h2>My name is {name} and I am {age} years old.</h2>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ClassComponent extends Component {

  clickHandler(){ // this is a method    
    console.log("button clicked")
  
  }


  render() {
    return (
      <div>
         <button onClick={this.clickHandler}>
            click me
         </button>
      </div>
    )
  }
}

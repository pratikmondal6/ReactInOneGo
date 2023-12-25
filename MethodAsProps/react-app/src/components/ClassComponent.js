import React, { Component } from 'react'
import FunctionalComponent from './FunctionalComponent'

export default class ClassComponent extends Component {

  constructor(props) {  
    super(props)  
    this.state = {  
         parentName: "Parent"  
    }
    
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName}` + " from " + childName )
  }


  render() {
    return (
      <div>
        <FunctionalComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

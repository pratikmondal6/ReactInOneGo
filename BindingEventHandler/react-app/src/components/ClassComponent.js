import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {  
      super(props)  
      this.state = {  
        message: "Hello!" 
      }

    //  this.clickHandlerFour = this.clickHandlerFour.bind(this);
    }

    clickHandler = () => {  
      this.setState({  
        message: "Goodbye!"  
      })  
    }

    clickHandlerTwo() { 
      this.setState({  
        message: "Two!"  
      })  
    }

    clickHandlerThree() { 
      this.setState({  
        message: "Three!"  
      })  
    }



  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        <button onClick={this.clickHandlerTwo.bind(this)}>Two</button>
        <button onClick={() => this.clickHandlerThree() }>Three</button>
       <button onClick={this.clickHandlerFour}>Four</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {    
        super(props)
        this.state = {
             count: 0
        }
    }

    increment() {
         this.setState({
                count: this.state.count + 1
            }, () => 
            {
                console.log('Callback value', this.state.count)
            })

            this.setState((prevState, props) => ({    // This is the correct way to update the state when you are depending on the previous state value
                count : prevState.count + props.addValue
            }) )

            console.log(this.state.count)  // This will not work as setState is asynchronous   ) 
    }



  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
      
    )
  }
}

export default Counter

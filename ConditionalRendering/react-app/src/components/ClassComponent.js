import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: false
    }
  }


  render() {


    let message;
    if(this.state.isLogged) {
      message = <div>Welcome User</div>
    } else {
      message = <div>Welcome Guest</div>
    } 

    return  <div>{message}</div>


/*     if(this.state.isLogged) {
      return (
        <div>
          <div>Welcome User</div>
        </div>
      )  
    }else {
      return (
        <div>
          <div>Welcome Guest</div>
        </div>
      )
    }  */



 /*    return (
      <div>
        <div>Welcome to Class Component</div>
        <div>Welcome Guest</div>
      </div>
      
    ) */
  }
}

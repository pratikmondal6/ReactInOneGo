import React from 'react'

export default function FunctionalComponent() {


  function clickHandler(){
    console.log("button clicked")
  }

  return (
    <div>
        hello from functional component
        <div><button onClick={clickHandler}
        className="btn btn-success">click me</button></div>
        
    </div>
  )
}

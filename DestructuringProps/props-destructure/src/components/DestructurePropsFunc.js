import React from 'react'

/* const DestructureProps = ({name, age}) => {
  return (
    <div>
      {name} is {age} years old.
    </div>
  )
} */

const DestructureProps = props => {
  return (
    <div>
      {props.name} is {props.age} years old.
    </div>
  )
} 

export default DestructureProps;
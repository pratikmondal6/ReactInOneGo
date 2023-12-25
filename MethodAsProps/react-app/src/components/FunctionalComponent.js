import React from 'react'

export default function FunctionalComponent(props) {
  return (
    <div>
       <button onClick={()=> props.greetHandler("child") }>Greet</button>
    </div>
  )
}

import React from 'react'
import Person from './Person'

export default function FunctionalComponent() {


  const persons = [
    {
      name: 'John',
      age: 30
    },
    {
      name: 'Jane',
      age: 20
    }

  ]

   // const names = ['John', 'Paul', 'George', 'Ringo'];
   const personList = persons.map(person => 
    <Person key={person.name} person={person} />
    )
  return (
    <div>
       {personList}
    </div>
  )
}

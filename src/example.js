
import React from 'react'
import { Person, employee } from './utils'


const Example = () => {
   // Create an instance of the person class
const person1 = new Person('Adarsh', 25);

// Output the person details
console.log(person1.personDetails());

  return (
    <div>
        {new Person('Adarsh', 25).personDetails()}<br/>
        {new employee("adarsh",40,"vft","station road",8073980672,).employeeDetails()}
    </div>
  )
}

export default Example
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let name = "Habiba Khan" //name javascript ka attribute hai
    let rollno = "00112035"
    let courseName = "Giaic"
  return (
    <div>
      
      <ChildComponent fullName={name} rollNo={rollno} courseName= {courseName}/>
    </div>
  )
}

export default ParentComponent

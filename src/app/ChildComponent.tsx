import React from 'react'

const ChildComponent = (props : any) => {
console.log(props)
  return (
    <div>
      <h1 className='text-4xl pt-5'>Assignment 10</h1> <br />
      <p> 2.  Make 3 variables in Parent Component <br />
        2.1 Pass props to Child Component <br />
        2.2 Render props Child Component</p><br />
      <h3 className='text-2xl'>Full Name: {props.fullName} <br />
                               Roll No: {props.rollNo}<br />
                               Course: {props.courseName}</h3>
    </div>
  )
}

export default ChildComponent

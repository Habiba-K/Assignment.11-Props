"use client"
import React, { useState } from 'react'

const page = () => {
    const [counter, setCounter]=useState(1)
    const [number, setNumber]=useState(100)
    const [reset, setReset]=useState(101)
    const [country, setCountry]=useState("pak")
    const [color, setColor]=useState("blue")
    
    // let counter =5
    
    const handleIncrement =()=>{
        setCounter(counter+1)
        console.log('Added value', counter)
        // counter = counter +1
    }

    const handledecrement =()=>{
        setNumber(number-1)
        console.log('Added value', counter)
        // counter = counter +1
    }

    const handleReset =()=>{
        setReset(0)
    }
  return (
    <div className='flex flex-col justify-center  items-center space-y-3 h-screen'>
      <h1>use state</h1>
      <p>{counter}</p>
      <button onClick={handleIncrement} className='border border-gray-400 p-3'>increament : {counter}</button>
      <button onClick={handledecrement} className='border border-gray-400 p-3'>decreament : {number}</button>
      <button onClick={handleReset} className='border border-gray-400 p-3'>reset : {reset}</button>
    </div>
  )
}

export default page

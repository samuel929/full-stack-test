import React from 'react'

interface Props{
calculate:()=> void
}

const Button = ({calculate}:Props) => {
  return (

       <button onClick={calculate}>Calculate fizzBuzz</button>

  )
}

export default Button

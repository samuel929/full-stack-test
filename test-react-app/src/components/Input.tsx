import React from 'react'

interface Props{
count: string;
setCount: (x:string)=> void;
}

const Input = ({count,setCount}:Props) => {
  return (
    <div>
     <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} placeholder='  Please enter a number between 1 and 1000' />
    </div>
  )
}

export default Input

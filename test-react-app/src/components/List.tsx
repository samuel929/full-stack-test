import React from 'react'
interface Props{
    result:(string | number)[]
}

const List = ({result}:Props) => {
  return (
    <ul>
          {result.map((item)=>(
            <li>{item}</li>
          ))}
    </ul>
  )
}

export default List

import React from 'react'

const Data = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.rollno}</p>
      <p>{props.bio}</p>
    </div>
  )
}

export default Data

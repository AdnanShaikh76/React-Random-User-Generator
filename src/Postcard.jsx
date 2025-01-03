import React from 'react'
import "./App.css"

const Postcard = (props) => {
  return (
    <div className='Post-card'>
        <h5>{props.title}</h5>
        <p>{props.body}</p>
    </div>
  )
}

export default Postcard
import React from 'react'

const Button = (props) => {

  return (
    <div>
      
        <button onClick={props.clik} className={props.stly}>{props.value}</button>
    </div>
  )
}

export default Button
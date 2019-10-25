import React from 'react'

const Button = (props) => {
  return (
    <button>
      {String(props.name)}
    </button>
  )
}

export default Button

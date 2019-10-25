import React from 'react'

const Display = (props) => {
  return (
    <h1>{String(props.result)}</h1>
  )
}

Display.defaultProps = {
  result: 0
}

export default Display

import React from 'react'

const Display = (props) => {
  return (
    <div>{String(props.result)}</div>
  )
}

Display.defaultProps = {
  result: 0
}

export default Display

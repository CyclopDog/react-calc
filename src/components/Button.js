import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }} className={props.wide}>
      {String(props.name)}
    </button>
  )
}

Button.defaultProps = {
  color: 'orange',
  wide: 'wide1'
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button

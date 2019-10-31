import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

   handleClick (buttonName) {
    this.props.clickHandler(buttonName)
  }

  render() {
    return (
      <button style={{ backgroundColor: this.props.color }} className={this.props.wide} onClick={this.handleClick.bind(this, this.props.name)}>
        {this.props.name}
      </button>
    )
  }
}

Button.defaultProps = {
  color: 'orange',
  wide: 'wide1'
}

export default Button

import React from 'react'
import Button from './Button'

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName)
  }
  render () {
    return (
      <div>
        <div>
          <Button name='AC' color='lightgray' clickHandler={this.handleClick} />
          <Button name='+/-' color='lightgray' clickHandler={this.handleClick} />
          <Button name='%' color='lightgray' clickHandler={this.handleClick} />
          <Button name='÷' clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name='7' color='lightgray' clickHandler={this.handleClick} />
          <Button name='8' color='lightgray' clickHandler={this.handleClick} />
          <Button name='9' color='lightgray' clickHandler={this.handleClick} />
          <Button name='X' clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name='4' color='lightgray' clickHandler={this.handleClick} />
          <Button name='5' color='lightgray' clickHandler={this.handleClick} />
          <Button name='6' color='lightgray' clickHandler={this.handleClick} />
          <Button name='-' clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name='1' color='lightgray' clickHandler={this.handleClick} />
          <Button name='2' color='lightgray' clickHandler={this.handleClick} />
          <Button name='3' color='lightgray' clickHandler={this.handleClick} />
          <Button name='+' clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name='0' color='lightgray' clickHandler={this.handleClick} wide='wide2' />
          <Button name='.' color='lightgray' clickHandler={this.handleClick} />
          <Button name='=' clickHandler={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default ButtonPanel

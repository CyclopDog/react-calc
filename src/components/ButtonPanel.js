import React from 'react'
import Button from './Button'

class ButtonPanel extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Button name='AC' color='lightgray' />
          <Button name='+/-' color='lightgray' />
          <Button name='%' color='lightgray' />
          <Button name='÷' />
        </div>
        <div>
          <Button name='7' color='lightgray' />
          <Button name='8' color='lightgray' />
          <Button name='9' color='lightgray' />
          <Button name='X' />
        </div>
        <div>
          <Button name='4' color='lightgray' />
          <Button name='5' color='lightgray' />
          <Button name='6' color='lightgray' />
          <Button name='-' />
        </div>
        <div>
          <Button name='1' color='lightgray' />
          <Button name='2' color='lightgray' />
          <Button name='3' color='lightgray' />
          <Button name='+' />
        </div>
        <div>
          <Button name='0' color='lightgray' wide='wide2' />
          <Button name='.' color='lightgray' />
          <Button name='=' />
        </div>
      </div>
    )
  }
}

export default ButtonPanel

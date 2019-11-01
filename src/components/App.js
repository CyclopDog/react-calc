import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
    console.log(buttonName)
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <Display result={this.state.next || this.state.total || '0'}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}

export default App
